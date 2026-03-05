mod core;

use core::engine::DDPJEngine;

#[tauri::command]
fn get_engine_version() -> String {
    "DDPJ UI Engine v0.1".to_string()
}

fn main() {
    let engine = DDPJEngine::new();
    engine.start();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_engine_version])
        .run(tauri::generate_context!())
        .expect("error running DDPJ UI");
}