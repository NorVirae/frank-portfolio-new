import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Lead Software Engineer",
    organisation: {
      name: "Blackhards",
      href: "https://blackhards.com",
    },
    date: "Feb 2024 - Present",
    location: "Enugu",
    description: "Full Stack app development, Microservices, Scaling, Performance",
  },
  {
    title: "Fullstack Engineer",
    organisation: {
      name: "Quiva Games",
      href: "https://quiva.games/quiva",
    },
    date: "Nov 2021 - Dec 2024",
    location: "On site/Remote",
    description:
      `In Collaboration with Game Devs, building, integrating and maintaining Game Economy and Game Chat system for a BR Game.
      With a team of Developers, developed Web Frontend app, integrated blockchain contracts, 
      contributed api's to the backend and called its infrastructure to the frontend with proper risk and Exception Management.
      `,
  },
  {
    title: "Frontend Engineer",
    organisation: {
      name: "Loooty 3D Asset Marketplace",
      href: "https://loooty.com/",
    },
    date: "Mar 2022 - Jan 2023",
    location: "On Site",
    description:
      "Implemented UI/Ux components, integrated state management, tests, and synced Web app with server for the new app, Built app from concept to production",
  },
];
