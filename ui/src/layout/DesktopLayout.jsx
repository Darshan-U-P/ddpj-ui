import { Outlet } from "react-router-dom";

import WindowBar from "../components/WindowBar";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

export default function DesktopLayout() {

  return (
    <div className="app-layout">

      <WindowBar />

      <TopBar />

      <div className="content-area">

        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>

      </div>

    </div>
  );

}