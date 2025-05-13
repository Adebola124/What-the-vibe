export const moods = ["lazy", "bored", "energetic", "chaotic"];
export const locations = ["home", "outside", "class", "store"];
export const companies = ["alone", "friends", "family", "partner"];

const safeIdeas: Record<string, string[]> = {
  "lazy-home-alone-morning": [
    "Make a slow, cozy breakfast and eat in bed.",
    "Binge an old cartoon series with zero guilt.",
    "Do gentle stretches on your floor while sipping tea.",
    "Reorganize your phone apps while lying down.",
    "Try 5 breathing exercises to start the day chill.",
    "Rewatch your favorite comfort YouTube video.",
    "Write a list of things you love doing when you’re not lazy.",
    "Text a good morning meme to a friend.",
    "Make toast and rank your toppings by mood.",
    "Stare at the ceiling and practice blinking evenly."
  ],
  "lazy-home-alone-afternoon": [
    "Watch a documentary while wrapped in blankets.",
    "Try a 15-minute nap meditation.",
    "Eat lunch with zero distractions and fully enjoy it.",
    "Organize your junk drawer (slowly).",
    "Do a skincare routine like you’re in a spa commercial.",
    "Scroll social media with commentary like you're a judge.",
    "Play a podcast and lie still like a statue.",
    "Stretch your fingers and toes for 3 minutes straight.",
    "Google weird facts about naps.",
    "Make your own indoor lazy Olympics with water bottle tossing."
  ],
  "lazy-home-alone-evening": [
    "Light candles and play lo-fi beats while you chill.",
    "Rewatch an old favorite rom-com or drama.",
    "Do a slow yoga routine made just for sleepy people.",
    "Take a warm bath and pretend you're royalty.",
    "Read a random Wikipedia article and see how far you get.",
    "Have breakfast for dinner and enjoy the reversal.",
    "Try drawing your mood without lifting the pen.",
    "Write a letter to your future self (lazy edition).",
    "Stalk cute animal accounts on Instagram for 15 min.",
    "Talk to your plants (or pretend they’re talking to you)."
  ],
  "lazy-home-alone-night": [
    "Listen to a dreamy playlist and slowly unwind.",
    "Make hot chocolate and sip while scrolling memes.",
    "Play a calming mobile game in bed.",
    "Lie flat on your floor and just exist.",
    "Wrap yourself like a burrito in your blanket.",
    "Do a face mask and pretend you’re on reality TV.",
    "Set 1 silly goal for tomorrow and forget it after.",
    "Do a bedtime meditation with your lights dimmed.",
    "Find a sleep playlist and hum along until you yawn.",
    "Look at the stars or ceiling and make up stories."
  ],
  "lazy-home-friends-morning": [
    "Make pancakes together with weird toppings.",
    "Watch nostalgic cartoons in a blanket fort.",
    "Do a goofy group meditation session.",
    "Play a chill card game with soft music.",
    "Start a playlist battle: calmest songs win.",
    "Do a slow-motion TikTok dance as a team.",
    "Rate each other's sock styles dramatically.",
    "Make a lazy breakfast board from fridge leftovers.",
    "Invent a group stretch routine.",
    "Lay on the floor and share wild dreams from last night."
  ],
  "lazy-home-friends-afternoon": [
    "Host a movie matinee with commentary.",
    "Take turns giving each other slow, spa-level facials.",
    "Make DIY pizzas and rank them.",
    "Vote on the best nap spot in the house.",
    "Do a chill trivia round with prizes like snacks.",
    "Start a whisper-only story chain.",
    "Design dream homes on paper and present them lazily.",
    "Attempt synchronized lying-down yoga.",
    "Stream a random documentary and roast it softly.",
    "Draw each other in the weirdest style possible."
  ],
  "lazy-home-friends-evening": [
    "Make s'mores in the oven and dim the lights.",
    "Rewatch classic sitcom episodes and assign characters.",
    "Share your funniest sleepy stories.",
    "Create a joint playlist of songs you’d nap to.",
    "Paint your nails while talking nonsense.",
    "Write haikus about snacks you ate today.",
    "Build a couch fort and defend it with honor.",
    "Invent a lazy board game with pillows and dice.",
    "Watch a scenic fireplace video and pretend it’s winter.",
    "Record a slow, monotone podcast episode just for laughs."
  ],
  "lazy-home-friends-night": [
    "Whisper ghost stories dramatically in a circle.",
    "Play 'guess the sound' with random objects.",
    "Light candles and take turns reading poetry.",
    "Lie down and rate each other’s fake accents.",
    "Record your own ASMR session.",
    "Write sleepy fanfics about each other as cartoons.",
    "Take 3-minute turns telling nonsense dreams.",
    "Play calming mobile games side by side.",
    "Try blanket meditation: wrap tight and be silent.",
    "Take turns giving fake TED talks in bed."
  ],
  "energetic-outside-friends-afternoon": [
    "Host a spontaneous dance-off in the park.",
    "Start a mini photo shoot with goofy poses.",
    "Challenge each other to parkour across random benches.",
    "Play tag like you’re 10 again.",
    "Record a TikTok dance in public and pretend you’re famous.",
    "Start a mini scavenger hunt using random items.",
    "Form a conga line and see who joins.",
    "Do cartwheels or sprints until someone gives up.",
    "Invent your own sport using sticks or trash.",
    "Interview strangers with a pretend mic about their 'celebrity past.'"
  ],
  "bored-class-alone-afternoon": [
    "Doodle a fantasy world in your notebook.",
    "Count how many blue pens are in the room.",
    "Invent a fake language and write secret notes to yourself.",
    "Play silent bingo with teacher habits.",
    "Rate the outfits in class from a secret fashion critic persona.",
    "Write a haiku about your boredom.",
    "Try to fold an origami animal with scrap paper.",
    "Redesign the classroom in your notebook.",
    "Create secret nicknames for everyone around you.",
    "Write a breakup letter to your homework."
  ],
  "chaotic-store-friends-night": [
    "Find the weirdest item in the store and act like it’s sacred.",
    "Pick random snacks and rate them like a food critic.",
    "Talk in fake accents while pretending to be influencers shopping.",
    "Play hide-and-seek with limits (like just the cereal aisle).",
    "Dare each other to ask staff for imaginary items.",
    "Try to spend exactly $5 on the silliest combo possible.",
    "Stage a mock proposal using random store products.",
    "Take selfies with mannequins or displays.",
    "Have a speed-run aisle race with baskets.",
    "Read shampoo bottle descriptions like poetry."
  ]
};

const freakyIdeas: Record<string, string[]> = {
  "lazy-home-partner-morning": [
    "Wake up and whisper your dreams to each other.",
    "Do a playful morning strip tease.",
    "Send each other flirty emojis from across the room.",
    "Share your favorite steamy dream scenario.",
    "Challenge each other to a 'who looks hotter yawning' contest.",
    "Create a spicy breakfast in bed game.",
    "Take turns describing each other’s best physical features.",
    "Make eye contact while sipping coffee and not smile.",
    "Write each other a secret desire on a sticky note.",
    "Swap bathrobes dramatically."
  ],
  "lazy-home-partner-afternoon": [
    "Take turns giving sensual hand massages.",
    "Write a short love letter and read it aloud.",
    "Have a slow dance in the kitchen.",
    "Do a fashion show using each other's clothes.",
    "Recreate a sexy scene from a movie.",
    "Act out a soap opera moment dramatically.",
    "Try a spicy TikTok trend together.",
    "Describe your favorite physical moment with each other.",
    "Paint each other using body-safe markers.",
    "Swap your favorite spicy memes."
  ],
  "lazy-home-partner-evening": [
    "Play a game of strip charades.",
    "Watch a romantic movie and reenact one scene.",
    "Give each other back rubs with your favorite lotion.",
    "Roleplay a spicy character you invent on the spot.",
    "Create a shared fantasy story sentence by sentence.",
    "Do slow motion kisses like you're in a drama.",
    "Make dessert together while being overly flirtatious.",
    "Rate each other's slow dance moves.",
    "Read a flirty poem aloud with dramatic flair.",
    "Write notes to each other and hide them around the house."
  ],
  "lazy-home-partner-night": [
    "Turn off the lights, light a candle, and play a game of ‘guess that touch’.",
    "Do a slow massage swap with dramatic music in the background.",
    "Try a silly strip trivia game with snacks as prizes.",
    "Roleplay a scene from a cheesy romance novel.",
    "Blindfold each other and guess the item touching you.",
    "Invent spicy nicknames and only use those for an hour.",
    "Try a new kiss style and give it a review.",
    "Read flirty tweets aloud dramatically.",
    "Act out a fake movie trailer about your relationship.",
    "Swap clothes and pretend to be each other seductively."
  ],
  "lazy-home-friends-night": [
    "Record a fake audio fantasy scene.",
    "Tell bedtime stories that get hotter each round.",
    "Write anonymous spicy confessions and guess who.",
    "Play ‘naughty whisper’ game.",
    "Flirty truth or dare: quiet edition.",
    "Do dramatic flirty roleplay scenes from memory.",
    "Act like flirty TV characters from different genres.",
    "Write sultry tweets and have others read them.",
    "Whisper compliments until someone breaks.",
    "Design bedtime lingerie outfits — on paper."
  ],
  "lazy-home-friends-evening": [
    "Write sexy movie pitches together.",
    "Reenact a dramatic soap opera scene with spice.",
    "Host a flirt-off: flirty compliments only.",
    "Play 'naughty or not' with past crushes.",
    "Do a joint sultry playlist lip sync.",
    "Create spicy alter-egos and backstories.",
    "Design fictional dating profiles together.",
    "Try to draw sexy versions of superheroes.",
    "Pass a flirty note around, adding a line each.",
    "Act out a sexy commercial for a random object."
  ],
  "lazy-home-friends-afternoon": [
    "Roleplay flirty spa attendants.",
    "Write group spicy fanfiction sentence by sentence.",
    "Take spicy personality quizzes and share results.",
    "Host a seductive snack tasting.",
    "Do a sexy slow walk challenge — dramatically judged.",
    "Create a shared spicy playlist and act it out.",
    "Watch a steamy scene and critique it like critics.",
    "Invent your own bedroom product ideas as a team.",
    "Try flirty pickup lines on each other.",
    "Pose for freaky album covers with props."
  ],
  "lazy-home-friends-morning": [
    "Share your wildest dream from last night (dramatized).",
    "Flirt in character — as cartoons.",
    "Dare each other to voice-text someone spicy.",
    "Play a soft-spoken truth or dare.",
    "Do a fashion show using only sleepwear.",
    "Record a spicy 'morning podcast' in sultry tones.",
    "Pose like influencers and take thirst trap selfies.",
    "Create a group thirst trap and don’t post it.",
    "Compliment each other flirtily until it gets weird.",
    "Rate fictional characters' bedroom energy out loud."
  ],
  "chaotic-home-alone-night": [
    "Write steamy fanfic about two random objects in your room.",
    "Do a dance video that's too spicy to post.",
    "Text yourself flirty messages from an imaginary crush.",
    "Host a fake seductive talk show for an invisible audience.",
    "Make a mood lighting setup and act like you’re on OnlyFans (privately).",
    "Draw your dream partner... with your non-dominant hand.",
    "Leave yourself a sultry voicemail and play it back.",
    "Create a seductive perfume ad using household items.",
    "Try on outfits and strut around like it’s freaky fashion week.",
    "Play a dramatic breakup and makeup with your pillow."
  ],
  "energetic-class-friends-afternoon": [
    "Whisper naughty jokes in class and try not to laugh.",
    "Draw risqué stick figure scenes and pass them around.",
    "Come up with spicy nicknames for everyone in the class.",
    "Secretly dare each other to flirt with your notes.",
    "Play flirt or fold with eye contact.",
    "Write fanfic about your friend group as a chaotic romance drama.",
    "Invent a scandal about someone’s coffee mug.",
    "Rate each other's handwriting flirtily.",
    "Doodle each other with exaggerated features.",
    "Pass anonymous ‘admiration notes’ between friends."
  ],
  "bored-store-partner-evening": [
    "Pick a risqué item and dare each other to find creative uses.",
    "Create your own freaky roleplay scenario using store outfits.",
    "Secretly choose items to use later, but don’t tell each other why.",
    "Flirt using only the names of store brands.",
    "Sneak kisses behind displays like it's forbidden.",
    "Hold hands and pretend you're undercover lovers.",
    "Write flirty product reviews on your phone aloud.",
    "Hide saucy notes in random aisles.",
    "Plan a fantasy night based on random aisle contents.",
    "Act out a fake argument and make up dramatically."
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
