import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Routes, Route } from "react-router-dom";

import DesktopLayout from "./layout/DesktopLayout";

import Home from "./pages/Home";
import Wallpapers from "./pages/Wallpapers";

/* Placeholder pages */

const Widgets = () => <div style={{ padding: 40 }}>Widgets Page</div>;
const Themes = () => <div style={{ padding: 40 }}>Themes Page</div>;
const Visualizers = () => <div style={{ padding: 40 }}>Visualizers Page</div>;

function App() {

  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState("Starting DDPJ Engine...");
  const [error, setError] = useState<string | null>(null);

  /* ---------------- ENGINE BOOT ---------------- */

  useEffect(() => {

    async function bootEngine() {

      try {

        const version = await invoke<string>("get_engine_version");

        setStatus("Engine Loaded: " + version);

        setTimeout(() => {
          setLoaded(true);
        }, 1000);

      } catch (err) {

        console.error("Engine start failed:", err);
        setError("Failed to start engine");

      }

    }

    bootEngine();

  }, []);

  /* ---------------- ERROR SCREEN ---------------- */

  if (error) {

    return (
      <div className="loading-container">

        <div className="left-panel">
          <h1>DDPJ</h1>
          <p>Engine Error</p>
        </div>

        <div className="right-panel">
          <p>{error}</p>
        </div>

      </div>
    );

  }

  /* ---------------- LOADING SCREEN ---------------- */

  if (!loaded) {

    return (
      <div className="loading-container">

        <div className="left-panel">
          <h1>DDPJ</h1>
          <p>Darshan Desktop Personalization Engine</p>
        </div>

        <div className="right-panel">
          <div className="loader"></div>
          <p>{status}</p>
        </div>

      </div>
    );

  }

  /* ---------------- MAIN APP ---------------- */

  return (

    <Routes>

      <Route element={<DesktopLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/wallpapers" element={<Wallpapers />} />

        <Route path="/widgets" element={<Widgets />} />

        <Route path="/themes" element={<Themes />} />

        <Route path="/visualizers" element={<Visualizers />} />

      </Route>

    </Routes>

  );

}

export default App;