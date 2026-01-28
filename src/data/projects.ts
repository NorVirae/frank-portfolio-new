import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Loooty",
    href: "/projects",
    description: "African 3D Asset Market place for Games",
    tags: ["reactjs", "css", "redux", "laravel"],
    image: {
      LIGHT: "/images/projects/loooty1.webp",
      DARK: "/images/projects/loooty1.webp",
    },
  },
  {
    index: 1,
    title: "AI Amara",
    href: "/projects",
    description:
      "Crypto AI Model, 3D Interactive model, with the ability to trade crypto, Open sourced ",
    tags: [
      "React",
      "Vite",
      "TailwindCSS",
      "ThreeJS",
      "Flask",
      "Python",
      "LangChain",
      "Groq",
      "OpenAIWhisper",
      "ElevenLabs",
      "Web3Py",
      "Hardhat",
      "TypeScript",
    ],
    image: {
      LIGHT: "/images/projects/AIAmara1.webp",
      DARK: "/images/projects/AIAmara1.webp",
    },
  },

  {
    index: 2,
    title: "Blackhards",
    description:
      "Marketplace for Game codes and Blackhards in house games Like Gun Drive",
    href: "/projects",
    tags: [
      "Nextjs",
      "Nestjs",
      "Posgresql",
      "redis",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "mocha",
    ],
    image: {
      LIGHT: "/images/projects/blackhards1.webp",
      DARK: "/images/projects/blackhards1.webp",
    },
  },
  {
    index: 3,
    title: "Gun Drive",
    href: "/projects",
    description: "A Unity Platformer/2D Shooter Mobile Game",
    tags: ["Unity", "ethersjs", "React Native", "Playfab", "Nethereum"],
    image: {
      LIGHT: "/images/projects/gundrive1.jpeg",
      DARK: "/images/projects/gundrive1.jpeg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Loooty",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/loooty1.webp",
      "/images/projects/loooty2.webp",
      "/images/projects/loooty3.webp",
      "/images/projects/loooty4.webp",
      "/images/projects/loooty5.webp",
      "/images/projects/loooty6.webp",
    ],
    description: "African 3D Asset Market place for Games",
    sourceCodeHref: "",
    liveWebsiteHref: "https://loooty.com",
    status: "Live",
  },
  {
    name: "Gun Drive",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/gundrive1.jpeg",
      "/images/projects/gundrive2.jpeg",
      "/images/projects/gundrive3.png",
      "/images/projects/gundrive4.png",
      "/images/projects/gundrive5.jpeg",
    ],
    description: "A Unity Platformer/2D Shooter Mobile Game",
    sourceCodeHref: "",
    status: "Staging",
    liveWebsiteHref:
      "https://itch.io/e/35317813/blackhardgames-updated-gun-drive",
  },
  {
    name: "AI Amara",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/AIAmara1.webp",
      "/images/projects/AIAmara2.webp",
      "/images/projects/AIAmara3.webp",
    ],
    description:
      "Crypto AI Model, 3D Interactive model, with the ability to trade crypto, Open sourced ",
    sourceCodeHref: "https://github.com/NorVirae/AI_Agent_Trading_Amara.git",
    liveWebsiteHref: "https://www.youtube.com/watch?v=O7L23AfRxvk&t=8s",
    status: "Staging",
  },
  {
    name: "Blackhards",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/blackhards1.webp",
      "/images/projects/blackhards2.webp",
      "/images/projects/blackhards3.webp",
      "/images/projects/blackhards4.webp",
      "/images/projects/blackhards5.webp",
    ],
    status: "staging",
    description:
      "Marketplace for Game codes and Blackhards in house games Like Gun Drive",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.blackhards.com",
  },
  {
    name: "CyberSpawns",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/cyb1.webp",
      "/images/projects/cyb2.webp",
      "/images/projects/cyb3.webp",
      "/images/projects/cyb4.webp",
      "/images/projects/cyb5.webp",
    ],
    status: "Discontinued",
    description: "Multiplayer game with features from Axie Infinity",
    sourceCodeHref: "",
    liveWebsiteHref: "https://cyberspawns.com",
  },
  {
    name: "Podship",
    favicon: "/images/vyra.svg",
    status: "",
    imageUrl: [
      "/images/projects/pod1.webp",
      "/images/projects/pod2.webp",
      "/images/projects/pod3.webp",
      "/images/projects/pod4.webp",
      "/images/projects/pod5.webp",
    ],
    description: "Decentralised Podcast system",
    liveWebsiteHref: "",

    sourceCodeHref: "https://github.com/PodShip",
  },

  {
    name: "EHR System",
    favicon: "/images/vyra.svg",
    imageUrl: [
      "/images/projects/hospital1.webp",
      "/images/projects/hospital2.webp",
      "/images/projects/hospital3.webp",
      "/images/projects/hospital4.webp",
      "/images/projects/hospital5.webp",
      "/images/projects/hospital6.webp",
    ],
    status: "Discontinued",
    description: "A Hospital Management system Equiped with SNOMED CT",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
];
