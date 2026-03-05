use std::collections::HashMap;

pub struct Engine {
    pub version: String,
    pub modules_loaded: bool,
    pub modules: HashMap<String, bool>,
}

impl Engine {
    pub fn new() -> Self {
        let mut modules = HashMap::new();

        modules.insert("desktop".to_string(), false);
        modules.insert("dock".to_string(), false);
        modules.insert("wallpaper".to_string(), false);
        modules.insert("widgets".to_string(), false);
        modules.insert("plugins".to_string(), false);
        modules.insert("settings".to_string(), false);

        Self {
            version: "DDPJ Engine v0.1".to_string(),
            modules_loaded: false,
            modules,
        }
    }

    pub fn start(&mut self) {
        println!("🚀 Starting DDPJ Engine...");
        self.load_modules();
        self.modules_loaded = true;
        println!("✅ Engine started successfully");
    }

    fn load_modules(&mut self) {
        println!("🔧 Loading modules...");

        for (module, state) in self.modules.iter_mut() {
            println!("📦 Initializing module: {}", module);
            *state = true;
        }

        println!("📦 All modules initialized");
    }

    pub fn version(&self) -> String {
        self.version.clone()
    }

    pub fn modules_status(&self) -> Vec<(String, bool)> {
        self.modules
            .iter()
            .map(|(k, v)| (k.clone(), *v))
            .collect()
    }

    pub fn is_module_loaded(&self, module_name: &str) -> bool {
        match self.modules.get(module_name) {
            Some(status) => *status,
            None => false,
        }
    }
}