export type Artwork = {
  id: string;
  title: string;
  year: "2018" | "2019" | "2020-21";
  era: string;
  filename: string;
  description?: string;
};

export const artworks: Artwork[] = [
  // 2018 — "Maximum Impact"
  {
    id: "club-night",
    title: "Club Night",
    year: "2018",
    era: "Maximum Impact",
    filename: "/Personal-Website/images/artworks/2018/club-night.jpeg",
    description: "Vibrant nightlife-themed event poster with photo collage",
  },
  {
    id: "cops-and-robbers",
    title: "Cops & Robbers",
    year: "2018",
    era: "Maximum Impact",
    filename: "/Personal-Website/images/artworks/2018/cops-and-robbers.jpeg",
    description: "Game night event with high-energy visual treatment",
  },
  {
    id: "undoukai-2018",
    title: "Undoukai",
    year: "2018",
    era: "Maximum Impact",
    filename: "/Personal-Website/images/artworks/2018/undoukai.jpg",
    description: "Japanese sports day event poster",
  },
  // 2019 — "Finding Focus"
  {
    id: "you-and-i-on-ice",
    title: "You & I on Ice",
    year: "2019",
    era: "Finding Focus",
    filename: "/Personal-Website/images/artworks/2019/you-and-i-on-ice.jpeg",
    description: "Ice skating event with ethereal blue aesthetic",
  },
  {
    id: "icebreaker",
    title: "Icebreaker",
    year: "2019",
    era: "Finding Focus",
    filename: "/Personal-Website/images/artworks/2019/springfest.jpeg",
    description: "Welcome icebreaker event poster",
  },
  {
    id: "scavenger-hunt",
    title: "Scavenger Hunt",
    year: "2019",
    era: "Finding Focus",
    filename: "/Personal-Website/images/artworks/2019/scavenger-hunt.jpg",
    description: "Campus-wide scavenger hunt event",
  },
  // 2020-21 — "Less is More"
  {
    id: "nihongo-de-asobo",
    title: "Nihongo de Asobo",
    year: "2020-21",
    era: "Less is More",
    filename: "/Personal-Website/images/artworks/2020-21/nihongo-de-asobo.jpeg",
    description: "Japanese language play event with minimalist Tokyo Skytree silhouette",
  },
  {
    id: "icebreaker-2021",
    title: "Icebreaker 2021",
    year: "2020-21",
    era: "Less is More",
    filename: "/Personal-Website/images/artworks/2020-21/icebreaker-2021.jpeg",
    description: "Welcome event with bold geometric ice pattern",
  },
  {
    id: "nbc",
    title: "Nightmare Before Christmas",
    year: "2020-21",
    era: "Less is More",
    filename: "/Personal-Website/images/artworks/2020-21/nbc.jpeg",
    description: "Jinrou game event with playful Grinch-themed illustration",
  },
];

export const yearGroups = [
  { year: "2018" as const, era: "Maximum Impact", description: "Detail-heavy, vibrant, photo-collage aesthetic" },
  { year: "2019" as const, era: "Finding Focus", description: "Transitional — richer compositions with more intentional layouts" },
  { year: "2020-21" as const, era: "Less is More", description: "Clean, minimal, strong typography, generous whitespace" },
];
