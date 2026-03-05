import { Bell, Clock, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="topbar" data-tauri-drag-region>

      {/* Logo / Title */}
      <div className="logo">
        <span className="logo-dot"></span>
        DDPJ UI
      </div>

      {/* Actions (not draggable) */}
      <div className="top-actions" data-tauri-drag-region="false">

        <motion.div whileHover={{ scale: 1.2 }}>
          <Clock size={20}/>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <Bell size={20}/>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }}>
          <UserCircle size={24}/>
        </motion.div>

      </div>

    </div>
  );
}