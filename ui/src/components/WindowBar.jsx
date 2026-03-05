import { getCurrentWindow } from "@tauri-apps/api/window";
import { ArrowLeft, Minus } from "lucide-react";

export default function WindowBar() {

  const minimizeWindow = async () => {
    const win = getCurrentWindow();
    await win.minimize();
  };

  const closeWindow = async () => {
    const win = getCurrentWindow();
    await win.close();
  };

  return (
    <div className="windowbar" data-tauri-drag-region>

      {/* LEFT SECTION */}
      <div className="window-left">
        <span className="logo-dot"></span>
        <span className="title">DDPJ UI</span>

        <ArrowLeft size={16} className="back-icon"/>
        <span className="page">Home</span>
      </div>

      {/* RIGHT SECTION */}
      <div className="window-controls">

        <button
          className="window-btn minimize"
          data-tauri-drag-region="false"
          onClick={minimizeWindow}
        >
          <Minus size={16}/>
        </button>

        <button
          className="window-btn close"
          data-tauri-drag-region="false"
          onClick={closeWindow}
        >
          Close
        </button>

      </div>

    </div>
  );
}