import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Norbert Frank Mba | Robotics, UAV & Software"
        description="Robotics and UAV project experience at Wicrypt Labs, supported by almost a decade across software and hardware development."
        canonical={`${siteMetadata.siteUrl}/about`}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <Image
          src="/images/heroProfile.png"
          width={480}
          height={600}
          alt="Norbert Frank Mba"
          className="max-h-[500px] w-full rounded-lg object-cover"
          priority
        />
        <div>
          <p className="text-sm uppercase tracking-widest text-accent">
            Robotics · UAV systems · Software
          </p>
          <h1 className="my-6 text-5xl font-semibold tracking-tight">
            Norbert Frank Mba
          </h1>
          <p className="mb-5 leading-8 text-muted-foreground">
            I’m an engineer based in Enugu, Nigeria, with almost a decade across
            software and hardware development. At Wicrypt Labs, I work on
            robotics and UAV prototypes, spanning aircraft controls, mechanical
            design, embedded electronics, computer vision, and simulation.
          </p>
          <p className="mb-5 leading-8 text-muted-foreground">
            My full-stack and DevOps background connects that physical work to
            software: Python, TypeScript, React, Next.js, Node.js, NestJS, GCP,
            Kubernetes, and Docker, with Prometheus and Grafana for monitoring.
          </p>
          <p className="mb-8 leading-8 text-muted-foreground">
            I’m continuing to study robot kinematics, motion planning, and
            feedback control while exploring reinforcement learning for
            manipulation. My work culture is all about point-blank focus.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="font-semibold text-accent underline underline-offset-4"
            >
              Robotics work
            </Link>
            <Link
              href="/software"
              className="font-semibold text-accent underline underline-offset-4"
            >
              Software work
            </Link>
          </div>
        </div>
      </section>
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
