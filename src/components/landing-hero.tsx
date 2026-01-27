import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Norbert Frank Mba
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Software Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I'm a <span className="font-semibold text-accent">software engineer</span> with over <span className="font-semibold text-accent">7 years</span> of professional <span className="font-semibold text-accent">full-stack</span> experience, specializing in building <span className="font-semibold text-accent">high-performance</span>, <span className="font-semibold text-accent">responsive</span>, and <span className="font-semibold text-accent">user-centric</span> web applications. I focus on delivering <span className="font-semibold text-accent">intelligent</span> and <span className="font-semibold text-accent">user-friendly</span> products that <span className="font-semibold text-accent">scale on cloud infrastructure</span>.
                <br />
                I'm fascinated by <span className="font-semibold text-accent">mathematics</span> and obsessed with <span className="font-semibold text-accent">machine learning</span> and <span className="font-semibold text-accent">robotics</span>. I'm also a <span className="font-semibold text-accent">meditator</span> — I apply <span className="font-semibold text-accent">deep focus</span> to a <span className="font-semibold text-accent">client's problem</span> until it's solved <span className="font-semibold text-accent">effectively</span> and <span className="font-semibold text-accent">on schedule</span>.
                <br />
                If you want to <span className="font-semibold text-accent">move fast</span> without <span className="font-semibold text-accent">sacrificing quality</span>, I'm your <span className="font-semibold text-accent">go-to software engineer</span>.
              </div>


            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
