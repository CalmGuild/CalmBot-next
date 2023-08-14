import { Collection } from "discord.js";

interface Challenge {
  name: string;
  points: number;
}

export default new Collection<string, Challenge>([
  ["e1", { name: "Obtain a fire aspect sword in UHC", points: 1 }],
  ["e2", { name: "Have a full hotbar of potions in insane skywars", points: 1 }],
  [
    "e3",
    {
      name: "Eat a golden apple in Blitz SG",
      points: 1,
    },
  ],
  ["e4", { name: "Win a game of parkour duels", points: 1 }],
  ["e5", { name: "Go to sudden death in a game of bedwars", points: 1 }],
  ["m1", { name: "Break 3 beds in a game of bedwars", points: 3 }],
  ["m2", { name: "Craft an extra ultimate in UHC", points: 3 }],
  ["m3", { name: "Win a game of build battle", points: 3 }],
  ["m4", { name: "Kill 50 vampires in one game of VampireZ", points: 3 }],
  ["m5", { name: "Obtain a Sharpness IV/V Diamond sword in Skywars", points: 3 }],
  ["h1", { name: "Get a 7+ kill game in solo skywars", points: 5 }],
  ["h2", { name: "Win a game of bedwars with the toxic rain challenge active", points: 5 }],
  [
    "h3",
    {
      name: "Win a game of Quakecraft",
      points: 5,
    },
  ],
  ["h4", { name: "Get 6 kills in a game of Walls", points: 5 }],
  ["h5", { name: "Eat a notch apple in UHC", points: 5 }],
  ["e6", { name: "Drink a strength potion in UHC", points: 1 }],
  ["e7", { name: "Kill 3+ players in skywars", points: 1 }],
  [
    "e8",
    {
      name: "Buy a Diamond sword in the bedwars shop",
      points: 1,
    },
  ],
  ["e9", { name: "Kill a player in Mega Walls", points: 1 }],
  ["e10", { name: "Win a game of guess the build", points: 1 }],
  ["m6", { name: "Obtain an infinity bow in murder mystery", points: 3 }],
  ["m7", { name: "Get 5 different types of wood in a single game of UHC", points: 3 }],
  ["m8", { name: "Kill 6+ players in a game of skywars", points: 3 }],
  ["m9", { name: "Win a game of bedwars after going to bed destruction with a challenge active", points: 3 }],
  ["m10", { name: "Win a game of smash heroes", points: 3 }],
  ["h6", { name: "Get 50+ kills in a game of paintball", points: 5 }],
  ["h7", { name: "Win a game of skywars with the ultimate warrior challenge active", points: 5 }],
  [
    "h8",
    {
      name: "Win a game of Turbo Kart Racers in 4 minutes or less",
      points: 5,
    },
  ],
  ["h9", { name: "Make a notch apple in UHC", points: 5 }],
  ["h10", { name: "Win a game of murder mystery as murderer with 15 kills", points: 5 }],
  ["e11", { name: "Spawn a blaze in Skywars", points: 1 }],
  ["e12", { name: "Buy a potion in Bedwars", points: 1 }],
  [
    "e13",
    {
      name: "Eat a golden apple in UHC",
      points: 1,
    },
  ],
  ["e14", { name: "Get a kill in Smash Heroes", points: 1 }],
  ["e15", { name: "Obtain a bow as an innocent in Murder Mystery", points: 1 }],
  ["m11", { name: "Win a game as Murderer in Murder Mystery", points: 3 }],
  ["m12", { name: "Complete the Slow Reflexes bedwars challenge", points: 3 }],
  ["m13", { name: "Craft Anduril/Hermes’ Boots in UHC or obtain Speed II potions", points: 3 }],
  ["m14", { name: "Obtain cooked pork chop in Skywars", points: 3 }],
  ["m15", { name: "Fish an enchanted book in Skywars", points: 3 }],
  ["h11", { name: "Win a game of Skywars with 8+ kills and a challenge active", points: 5 }],
  ["h12", { name: "Win a game of Arena Brawl in a minute or less", points: 5 }],
  [
    "h13",
    {
      name: "Win a game of Mega Walls with your wither still alive",
      points: 5,
    },
  ],
  ["h14", { name: "Complete all 5 tasks in Hide and Seek party pooper", points: 5 }],
  ["h15", { name: "Score 4 goals in a game of Football", points: 5 }],
]);

/*
Spawn a blaze in Skywars
Buy a potion in Bedwars
Eat a golden apple in UHC
Get a kill in Smash Heroes
Obtain a bow as an innocent in Murder Mystery

Medium:
Win a game as Murderer in Murder Mystery
Complete the Slow Reflexes bedwars challenge
Craft Anduril/Hermes’ Boots in UHC or obtain Speed II potions
Obtain cooked pork chop in Skywars
Fish an enchanted book in Skywars

Hard:
Win a game of Skywars with 8+ kills and a challenge active
Win a game of Arena Brawl in a minute or less
Win a game of Mega Walls with your wither still alive
Complete all 5 tasks in Hide and Seek party pooper
Score 4 goals in a game of Football

*/