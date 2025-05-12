import { motion, AnimatePresence } from "framer-motion";

type ResultCardProps = {
  result: string;
};

export function ResultCard({ result }: ResultCardProps) {
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-md bg-white border border-pink-200 text-lg"
        >
          {result}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
