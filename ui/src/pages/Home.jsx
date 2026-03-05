import { useState } from "react";

import WindowBar from "../components/WindowBar";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

import HeroBanner from "../components/HeroBanner";
import QuickAccess from "../components/QuickAccess";
import FeaturedDownloads from "../components/FeaturedDownloads";

import Wallpapers from "./Wallpapers";

export default function Home() {

  const [page, setPage] = useState("home");

  return (
    <div className="desktop-root">

      {/* LIVE WALLPAPER LAYER */}
      <div className="wallpaper-layer">
        {/* temporary static wallpaper */}
        <video
          className="wallpaper-video"
          src="/wallpapers/live1.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* DESKTOP UI */}
      <div className="desktop-ui">

        {/* WINDOW BAR */}
        <WindowBar />

        {/* HEADER */}
        <TopBar />

        {/* MAIN LAYOUT */}
        <div className="content-area">

          {/* SIDEBAR */}
          <Sidebar setPage={setPage} activePage={page} />

          {/* CONTENT */}
          <main className="main-content">

            {page === "home" && (
              <>
                <HeroBanner />
                <QuickAccess />
                <FeaturedDownloads />
              </>
            )}

            {page === "wallpapers" && (
              <Wallpapers />
            )}

          </main>

        </div>

      </div>

    </div>
  );
}