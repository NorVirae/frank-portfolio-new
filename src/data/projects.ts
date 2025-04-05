import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Loooty",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/loooty1.webp",
      DARK: "/images/projects/loooty1.webp",
    },
  },

  {
    index: 1,
    title: "EHR System",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/hospital1.webp",
      DARK: "/images/projects/hospital1.webp",
    },
  },
  {
    index: 2,
    title: "AI Amara",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/AIAmara1.webp",
      DARK: "/images/projects/AIAmara1.webp",
    },
  },

  {
    index: 3,
    title: "Blackhards",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/blackhards1.webp",
      DARK: "/images/projects/blackhards1.webp",
    },
  },
  {
    index: 4,
    title: "Cyberspawns",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/cyb1.webp",
      DARK: "/images/projects/cyb1.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Loooty",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/loooty1.webp",
      "/images/projects/loooty2.webp",
      "/images/projects/loooty3.webp",
      "/images/projects/loooty4.webp",
      "/images/projects/loooty5.webp",
      "/images/projects/loooty6.webp",
    ],
    description: "3D Asset Market place for Games",
    sourceCodeHref: "",
    liveWebsiteHref: "https://loooty.com",
  },
  {
    name: "EHR System",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/hospital1.webp",
      "/images/projects/hospital2.webp",
      "/images/projects/hospital3.webp",
      "/images/projects/hospital4.webp",
      "/images/projects/hospital5.webp",
      "/images/projects/hospital6.webp",
    ],
    description: "A Hospital Management system Equiped with SNOMED CT",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "AI Amara",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/AIAmara1.webp",
      "/images/projects/AIAmara2.webp",
      "/images/projects/AIAmara3.webp",
    ],
    description:
      "Crypto AI Model, 3D Interactive model, with the ability to trade crypto, Open sourced ",
    sourceCodeHref: "https://github.com/NorVirae/AI_Agent_Trading_Amara.git",
    liveWebsiteHref: "https://www.youtube.com/watch?v=O7L23AfRxvk&t=8s",
  },
  {
    name: "Blackhards",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/blackhards1.webp",
      "/images/projects/blackhards2.webp",
      "/images/projects/blackhards3.webp",
      "/images/projects/blackhards4.webp",
      "/images/projects/blackhards5.webp",
    ],
    description: "Marketplace for Game codes",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.blackhards.com",
  },
  {
    name: "CyberSpawns",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/cyb1.webp",
      "/images/projects/cyb2.webp",
      "/images/projects/cyb3.webp",
      "/images/projects/cyb4.webp",
      "/images/projects/cyb5.webp",
    ],
    description: "Multiplayer game with features from Axie Infinity",
    sourceCodeHref: "",
    liveWebsiteHref: "https://cyberspawns.com",
  },
  {
    name: "Podship",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/pod1.webp",
      "/images/projects/pod2.webp",
      "/images/projects/pod3.webp",
      "/images/projects/pod4.webp",
      "/images/projects/pod5.webp",
    ],
    description: "Decentralised Podcast system",
    sourceCodeHref: "https://github.com/PodShip",
  },
];
