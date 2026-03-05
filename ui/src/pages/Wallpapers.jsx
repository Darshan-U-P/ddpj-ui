import { useEffect, useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { appDataDir, join } from "@tauri-apps/api/path";
import { mkdir, readDir, copyFile, writeFile } from "@tauri-apps/plugin-fs";

export default function Wallpapers() {

  const [wallpapers, setWallpapers] = useState([]);
  const [url, setUrl] = useState("");

  /* -------- get wallpaper folder path -------- */

  const getFolder = async () => {
    const base = await appDataDir();
    const folder = await join(base, "livewallpapers");

    try {
      await readDir(folder);
    } catch {
      await mkdir(folder, { recursive: true });
    }

    return folder;
  };

  /* -------- load wallpapers -------- */

  const loadWallpapers = async () => {

    const folder = await getFolder();

    const files = await readDir(folder);

    const valid = files.filter(f =>
      /\.(mp4|webm|jpg|jpeg|png)$/i.test(f.name)
    );

    setWallpapers(valid);
  };

  useEffect(() => {
    loadWallpapers();
  }, []);

  /* -------- upload wallpaper -------- */

  const uploadWallpaper = async () => {

    const file = await open({
      multiple: false,
      filters: [
        { name: "Wallpaper", extensions: ["mp4", "webm", "jpg", "jpeg", "png"] }
      ]
    });

    if (!file) return;

    const filepath = Array.isArray(file) ? file[0] : file;

    const filename = filepath.split("\\").pop();

    const folder = await getFolder();
    const dest = await join(folder, filename);

    await copyFile(filepath, dest);

    loadWallpapers();
  };

  /* -------- add wallpaper via URL -------- */

  const addFromURL = async () => {

    if (!url) return;

    const folder = await getFolder();

    const name = url.split("/").pop();
    const dest = await join(folder, name);

    const res = await fetch(url);
    const buffer = await res.arrayBuffer();

    await writeFile(dest, new Uint8Array(buffer));

    setUrl("");

    loadWallpapers();
  };

  return (

    <div className="wallpaper-manager">

      <div className="wallpaper-header">

        <h1>Wallpaper Manager</h1>

        <button className="upload-btn" onClick={uploadWallpaper}>
          Upload Wallpaper
        </button>

      </div>

      {wallpapers.length === 0 && (

        <div className="empty-state">

          <h2>No Wallpapers Found</h2>

          <p>Upload a live wallpaper or paste a wallpaper URL.</p>

          <div className="url-input">

            <input
              placeholder="Paste wallpaper URL..."
              value={url}
              onChange={(e)=>setUrl(e.target.value)}
            />

            <button className="add-btn" onClick={addFromURL}>
              Add
            </button>

          </div>

        </div>

      )}

      {wallpapers.length > 0 && (

        <div className="wallpaper-grid">

          {wallpapers.map((w,i)=>{

            const isVideo = /\.(mp4|webm)$/i.test(w.name);

            return (
              <div key={i} className="wallpaper-card">

                {isVideo ? (
                  <video src={w.path} autoPlay muted loop />
                ) : (
                  <img src={w.path} alt={w.name}/>
                )}

                <span>{w.name}</span>

              </div>
            );

          })}

        </div>

      )}

    </div>

  );

}