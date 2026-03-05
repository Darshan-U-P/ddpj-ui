import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.div
      className="hero-banner"
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.6 }}
    >

      <h1>Cosmic Explorer's Hub</h1>

      <button className="cta">
        Discover New Features
      </button>

    </motion.div>
  );
}