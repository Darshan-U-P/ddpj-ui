pub struct DDPJEngine {
    pub version: String,
}

impl DDPJEngine {
    pub fn new() -> Self {
        Self {
            version: "0.1.0".to_string(),
        }
    }

    pub fn start(&self) {
        println!("DDPJ Engine started!");
    }
}