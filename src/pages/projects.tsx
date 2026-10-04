import Link from "next/link";
import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Norbert Frank Mba - Software Developer Portfolio"
        description="Explore a collection of projects by Norbert Frank Mba, a seasoned Software Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Norbert Frank Mba - Software Developer",
          description:
            "Explore a showcase of projects crafted by Norbert Frank Mba, a Software Developer. Witness the fusion of creativity and technology in web development.",
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
              "Projects, Software Developer, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mb-40 mt-6 w-full sm:mt-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-14 md:px-20">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Software projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Web applications, marketplaces, and interactive software.
            </span>
          </div>
          <Link
            href="/#robotics-projects"
            className="mt-4 inline-block text-accent underline underline-offset-4"
          >
            Explore robotics &amp; UAV projects →
          </Link>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              My software work spans full-stack applications, cloud
              infrastructure, and interactive experiences.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
