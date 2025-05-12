import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-4"
    >
      <h1 className="text-4xl font-bold text-pink-600 mb-2">
        🎉 What’s the Vibe Today?
      </h1>
      <p className="text-gray-700 text-lg">
        Pick your mood, location & company — then get a spicy or sweet suggestion 🌶️
      </p>
    </motion.header>
  );
}
