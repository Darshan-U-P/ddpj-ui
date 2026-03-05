import { Home, Palette, Puzzle, Settings, Image, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar({ setPage, activePage }) {

  const items = [
    { icon: Home, label: "Home", page: "home" },
    { icon: Image, label: "Live Wallpaper", page: "wallpapers" },
    { icon: LayoutGrid, label: "Widgets", page: "widgets" },
    { icon: Palette, label: "Themes", page: "themes" },
    { icon: Puzzle, label: "Plugins", page: "plugins" },
    { icon: Settings, label: "Settings", page: "settings" }
  ];

  return (
    <div className="sidebar">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.page}
            className={`nav-item ${activePage === item.page ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setPage(item.page)}
          >
            <Icon size={20}/>
            {item.label}
          </motion.div>
        );
      })}

    </div>
  );
}