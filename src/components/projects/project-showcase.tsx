import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";
import ProjectShowcaseList, {
  type ProjectShowcaseListItem,
} from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const handleAnimate = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-14 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
            Active Missions
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden h-px flex-1 origin-left bg-border sm:block"
          />
          <span className="hidden text-xs font-bold uppercase tracking-widest text-muted-foreground sm:block">
            Status: Deployed
          </span>
        </motion.div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left: Project List */}
          <div className="flex flex-col gap-8 py-8">
            {props.projects.map((proj, index) => (
              <ProjectShowcaseList
                activeProject={currentImage}
                toggleList={handleAnimate}
                data={proj}
                key={index}
              />
            ))}
          </div>

          {/* Right: Image Preview */}
          <div className="relative">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={props.projects[currentImage].title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                >
                  {/* Gamified Frame for Preview */}
                  <div className="relative rounded-xl border-2 border-accent/20 bg-card p-3 shadow-2xl">
                    <div className="absolute -top-3 left-6 z-10 bg-background px-3 text-xs font-bold uppercase tracking-widest text-accent">
                      Target Preview
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={images[currentImage].LIGHT}
                        unoptimized
                        width={600}
                        height={400}
                        className="h-full w-full object-cover dark:hidden"
                        alt={`${props.projects[currentImage].title} preview`}
                      />
                      {images[currentImage].DARK !== undefined && (
                        <Image
                          src={images[currentImage].DARK!}
                          unoptimized
                          width={600}
                          height={400}
                          className="hidden h-full w-full object-cover dark:inline-block"
                          alt={`${props.projects[currentImage].title} preview`}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile List */}
        <div className="flex flex-col gap-8 py-8 lg:hidden">
          {props.projects.map((proj) => (
            <Link
              key={proj.title}
              href={proj.href}
              className="group flex flex-col gap-3 rounded-lg border border-border p-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {proj.title}
                </span>
                <ArrowTopRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <p className="flex flex-wrap gap-2">
                {proj.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-accent/10 px-2 py-1 text-xs font-bold text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </p>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-lg font-bold text-accent transition-all hover:gap-4"
          >
            <span>View Mission Archive</span>
            <ArrowTopRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
