export const moods = ["lazy", "bored", "energetic", "chaotic"];
export const locations = ["home", "outside", "class", "store"];
export const companies = ["alone", "friends", "family", "partner"];

const safeIdeas: Record<string, string[]> = {
  "lazy-home-alone-morning": [
    "Watch cartoons in bed with a bowl of cereal."
  ],
  "energetic-outside-friends-afternoon": [
    "Host a spontaneous dance-off in the park."
  ],
  "bored-class-alone-afternoon": [
    "Doodle a fantasy world in your notebook."
  ],
  "chaotic-store-friends-night": [
    "Find the weirdest item in the store and act like it’s sacred."
  ]
};

const freakyIdeas: Record<string, string[]> = {
  "lazy-home-partner-night": [
    "Turn off the lights, light a candle, and play a game of ‘guess that touch’."
  ],
  "chaotic-home-alone-night": [
    "Write steamy fanfic about two random objects in your room."
  ],
  "energetic-class-friends-afternoon": [
    "Whisper naughty jokes in class and try not to laugh."
  ],
  "bored-store-partner-evening": [
    "Pick a risqué item and dare each other to find creative uses."
  ]
};

export function getIdeas(
  mood: string,
  location: string,
  company: string,
  time: string,
  mode: "safe" | "freaky"
): string {
  const key = `${mood}-${location}-${company}-${time}`;
  const pool = mode === "freaky" ? freakyIdeas : safeIdeas;
  const options = pool[key] || [
    mode === "freaky"
      ? "Whisper a fantasy to yourself and see if you blush."
      : "Take a deep breath and dance like nobody's watching."
  ];
  return options[Math.floor(Math.random() * options.length)];
}
