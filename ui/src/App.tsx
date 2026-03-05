import { invoke } from "@tauri-apps/api/core";

function App() {

  async function getVersion() {
    const version = await invoke("get_engine_version");
    console.log(version);
    alert(version);
  }

  return (
    <div style={{padding:"40px"}}>
      <h1>DDPJ UI</h1>
      <button onClick={getVersion}>Get Engine Version</button>
    </div>
  );
}

export default App;