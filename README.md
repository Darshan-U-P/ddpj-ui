# DDPJ UI

**DDPJ UI (Darshan Desktop Personalization Engine)** is a modular desktop customization platform designed to give users full control over their desktop environment.

It aims to provide a modern, extensible alternative to desktop customization tools such as Rainmeter and Seelen UI.

DDPJ UI allows users to customize their desktop using widgets, docks, themes, live wallpapers, plugins, and layouts.

---

## Vision

The goal of DDPJ UI is to build a **plugin-driven desktop engine** where users and developers can create and share desktop customization components.

DDPJ UI will act as a **desktop customization platform**, not just an application.

---

## Features (Planned)

* Custom **Dock / Taskbar**
* **Widget Engine** (clock, weather, CPU monitor, music, etc.)
* **Live Wallpaper Engine**
* **Theme System**
* **Icon Packs**
* **Sound Packs**
* **Multi-Monitor Layouts**
* **Window Manager**
* **Plugin System**
* **Resource Marketplace**

---

## Architecture

DDPJ UI is built with a modern hybrid architecture.

Core technologies:

* **Rust** – system level engine
* **Tauri** – desktop application framework
* **React + Vite** – UI framework
* **Node.js** – tooling and plugin runtime

Architecture overview:

Core Engine
│
├ Desktop Engine
├ Widget Engine
├ Dock Engine
├ Wallpaper Engine
├ Plugin Runtime
└ Resource Manager

---

## Project Structure

```
ddpj-ui
│
├ ui                # React + Tauri desktop app
│ ├ src
│ └ src-tauri
│
├ core              # Core desktop engine (future)
├ plugins           # Plugin ecosystem
├ resources         # Themes, widgets, wallpapers
├ docs              # Documentation
```

---

## Development Status

Current version:

**v0.1.0 – Project Initialization**

Completed:

* Development environment setup
* GitHub repository
* Tauri + React application scaffold

Next milestones:

* Desktop Overlay Engine
* Widget Engine
* Dock System
* Wallpaper Engine
* Plugin Runtime

---

## Roadmap

v0.1.0 – Project setup
v0.2.0 – Desktop overlay engine
v0.3.0 – Widget engine
v0.4.0 – Dock system
v0.5.0 – Wallpaper engine
v1.0.0 – First stable release

---

## Installation (Coming Soon)

Prebuilt installers will be available after the first development milestone.

Planned platforms:

* Windows
* Linux
* macOS

---

## Website

Official site:

https://ddpj.darshanup.online

Future marketplace for resources:

* Themes
* Widgets
* Plugins
* Wallpapers
* Icon packs

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Darshan U P**

GitHub
https://github.com/Darshan-U-P