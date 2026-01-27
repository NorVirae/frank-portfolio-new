import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Determine if this is Experience or Education to customize the "Quest" title
  const questTitle =
    props.title === "Experience" ? "Main Quests" : "Side Quests";

  return (
    <div className="my-24 md:my-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-14 md:px-20">
        <div className="mb-16 flex flex-col items-center justify-center gap-4">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            {props.title} Log
          </span>
          <h2 className="text-center text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {questTitle}
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        <div ref={ref} className="relative w-full">
          {/* Timeline Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-8 top-0 h-full w-[2px] origin-top bg-accent/30 md:left-1/2 md:-ml-[1px]"
          ></motion.div>

          <ul className="flex flex-col gap-12">
            {props.details.map((_details, index) => (
              <ExperienceShowcaseListItem
                key={index}
                {..._details}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
