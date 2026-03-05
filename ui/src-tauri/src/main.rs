mod core;

use core::engine::Engine;
use std::sync::Mutex;

use tauri::State;

// Plugins
use tauri_plugin_dialog;
use tauri_plugin_fs;

struct AppState {
    engine: Mutex<Engine>,
}

#[tauri::command]
fn get_engine_version(state: State<AppState>) -> String {
    let engine = state.engine.lock().unwrap();
    engine.version()
}

fn main() {
    // Start engine
    let mut engine = Engine::new();
    engine.start();

    tauri::Builder::default()
        // Register plugins
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())

        // App state
        .manage(AppState {
            engine: Mutex::new(engine),
        })

        // Commands exposed to frontend
        .invoke_handler(tauri::generate_handler![
            get_engine_version
        ])

        // Run application
        .run(tauri::generate_context!())
        .expect("error running DDPJ");
}