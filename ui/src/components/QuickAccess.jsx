import { motion } from "framer-motion";
import { Box, Palette, Image, AudioLines } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickAccess() {

  const navigate = useNavigate();

  const items = [
    {
      icon: Box,
      title: "Widgets",
      desc: "Add desktop widgets",
      route: "/widgets"
    },
    {
      icon: Palette,
      title: "Themes",
      desc: "Customize UI themes",
      route: "/themes"
    },
    {
      icon: Image,
      title: "Live Wallpapers",
      desc: "Manage animated wallpapers",
      route: "/wallpapers"
    },
    {
      icon: AudioLines,
      title: "Visualizers",
      desc: "Audio reactive visuals",
      route: "/visualizers"
    }
  ];

  return (
    <div className="quick-access">

      <h2>Quick Access</h2>

      <div className="cards">

        {items.map((item, i) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              className="card quick-card"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(item.route)}
            >

              <Icon size={36} />

              <div className="card-text">
                <p className="card-title">{item.title}</p>
                <span className="card-desc">{item.desc}</span>
              </div>

            </motion.div>
          );

        })}

      </div>

    </div>
  );
}