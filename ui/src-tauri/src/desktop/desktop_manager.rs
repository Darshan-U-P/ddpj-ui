pub struct DesktopManager;

impl DesktopManager {
    pub fn new() -> Self {
        Self {}
    }

    pub fn attach_to_desktop(&self) {
        println!("Attaching DDPJ UI to desktop layer...");
    }
}