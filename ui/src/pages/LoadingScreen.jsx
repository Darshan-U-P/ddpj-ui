import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

export default function LoadingScreen({ onFinish }) {
  const [status, setStatus] = useState("Starting DDPJ Engine...");

  useEffect(() => {
    async function bootEngine() {
      try {
        const version = await invoke("get_engine_version");

        setStatus("Engine Loaded: " + version);

        setTimeout(() => {
          onFinish();
        }, 1200);
      } catch (err) {
        setStatus("Engine failed to start");
        console.error(err);
      }
    }

    bootEngine();
  }, []);

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