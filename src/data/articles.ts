export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: "Desert" | "River" | "Markets";
};

export const articles: Article[] = [
  {
    id: "al-bajrawiya-spirits",
    title: "Spirits of the Desert (Arwah al-Sahra)",
    summary:
      "Stories of desert travelers and unseen forces around ancient routes.",
    category: "Desert",
    content: [
      "Across long desert roads, travelers tell stories of whispers carried by wind.",
      "Some say ancient places hold memories that feel like presence.",
      "Whether myth or warning, the stories survive because they teach respect for the land.",
    ],
  },
  {
    id: "river-jinn",
    title: "The River Jinn",
    summary:
      "A tale whispered near the Nile about a guardian spirit of the water.",
    category: "River",
    content: [
      "Near the Nile, elders share legends of a spirit that protects the river.",
      "They say it appears when people forget the river’s value—when they waste or pollute.",
      "The lesson is simple: care for the water, and it will care for you.",
    ],
  },
  {
    id: "night-market-shadows",
    title: "Shadows of the Night Market",
    summary:
      "Folklore about strange encounters in late-night Sudanese markets.",
    category: "Markets",
    content: [
      "At night, markets feel different—quieter, heavier, full of echoes.",
      "Some stories describe shadowy figures that mirror your steps.",
      "People laugh, but they still walk home together. Just in case.",
    ],
  },
];
