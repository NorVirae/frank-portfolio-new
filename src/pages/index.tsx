import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Norbert Frank Mba | Software Developer"
        description="Norbert Frank Mba is a seasoned software engineer with over 7 years of professional full-stack development experience, specialized in high-performance, user-centric web applications using ReactJS, NextJS, and SolidJS, with expertise in JavaScript, HTML, and CSS, versatile skills in GCP and AWS, and a proven track record of effectively managing client relationships."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Norbert Frank Mba - Software Developer",
          description:
            "Dive into the world of web development with Norbert Frank Mba, a seasoned Software Developer with over 7 years of professional full-stack development experience, specialized in high-performance, user-centric web applications built with ReactJS, NextJS, and SolidJS, skilled in JavaScript, HTML, and CSS, versatile with GCP and AWS cloud systems, and renowned for effectively managing client relationships.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Norbert Frank Mba - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
