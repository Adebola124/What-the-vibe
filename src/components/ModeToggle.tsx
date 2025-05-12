import { motion } from "framer-motion";

type ModeToggleProps = {
  mode: "safe" | "freaky";
  setMode: (mode: "safe" | "freaky") => void;
};

export function ModeToggle({ mode, setMode }: ModeToggleProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <p className="text-lg font-semibold">Mode:</p>
      <motion.button
        onClick={() => setMode("safe")}
        whileTap={{ scale: 0.9 }}
        className={`px-4 py-2 rounded-full border ${
          mode === "safe" ? "bg-green-300 border-green-600" : "border-gray-400"
        }`}
      >
        🧁 Safe
      </motion.button>

      <motion.button
        onClick={() => setMode("freaky")}
        whileTap={{ scale: 0.9 }}
        className={`px-4 py-2 rounded-full border ${
          mode === "freaky" ? "bg-red-300 border-red-600" : "border-gray-400"
        }`}
      >
        🍑 Freaky
      </motion.button>
    </div>
  );
}
