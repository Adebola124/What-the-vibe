import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { moods, locations, companies, getIdeas } from "./data/ideas";
import { Selector } from "./components/Selector";
import { ResultCard } from "./components/ResultCard";
import { Header } from "./components/Header";
import { ModeToggle } from "./components/ModeToggle";

export default function App() {
  const [mood, setMood] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [mode, setMode] = useState<"safe" | "freaky">("safe");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("morning");
    else if (hour < 18) setTimeOfDay("afternoon");
    else setTimeOfDay("night");
  }, []);

  const generateIdea = () => {
    if (!mood || !location || !company) {
      setResult("Please select all options.");
      return;
    }
    const idea = getIdeas(mood, location, company, timeOfDay, mode);
    setResult(idea);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-red-100 text-center p-6">
      <Header />
      <ModeToggle mode={mode} setMode={setMode} />

      <div className="grid gap-6 max-w-xl mx-auto mt-10">
        <Selector label="Your vibe today" options={moods} value={mood} setValue={setMood} />
        <Selector label="Where are you?" options={locations} value={location} setValue={setLocation} />
        <Selector label="Who are you with?" options={companies} value={company} setValue={setCompany} />
        <motion.button
          onClick={generateIdea}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600"
        >
          Generate My Vibe
        </motion.button>
      </div>

      <ResultCard result={result} />
    </main>
  );
}
