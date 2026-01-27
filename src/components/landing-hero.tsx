import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function LandingHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center gap-12 py-12 md:flex-row md:justify-between">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 sm:px-14 md:flex-row md:px-20">
        {/* Left Column: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="flex w-full flex-col justify-center gap-6 md:w-1/2"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-widest text-accent"
          >
            Player 1 Ready
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-extrabold uppercase leading-tight tracking-tighter text-foreground sm:text-6xl md:text-7xl xl:text-8xl"
          >
            I Build <br />
            <span className="text-accent">Digital</span> <br />
            Worlds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-lg text-lg font-medium leading-relaxed text-muted-foreground md:text-xl"
          >
            Constructing intelligent, scalable web applications with a focus on performance and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 flex gap-4"
          >
            <a
              href={siteMetadata.github}
              target="_blank"
              className="group flex items-center justify-center rounded-md border-2 border-accent bg-accent px-8 py-3 text-sm font-bold text-background transition-all duration-300 hover:bg-background hover:text-accent hover:shadow-lg hover:shadow-accent/20 active:scale-95"
            >
              Press Start
            </a>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="group flex items-center justify-center rounded-md border-2 border-border bg-background px-8 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg active:scale-95"
            >
              Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Character Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="flex w-full items-center justify-center md:w-1/2"
        >
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-2xl transition-shadow duration-500 hover:shadow-accent/20"
          >
            {/* Card Header aka 'HP Bar' decoration */}
            <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Character Profile
              </span>
              <div className="flex gap-1">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-red-500"
                />
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-yellow-500"
                />
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-green-500"
                />
              </div>
            </div>

            {/* Avatar Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/heroProfile.png"
                alt="Norbert Frank Mba"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Level Badge */}
              <div className="absolute bottom-4 right-4 rounded-md border border-background/20 bg-background/90 px-3 py-1 text-xs font-bold backdrop-blur-md">
                LVL 7
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
              >
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">
                  Class
                </span>
                <span className="text-sm font-bold text-foreground">Software Engineer</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
              >
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">
                  Main Skill
                </span>
                <span className="text-sm font-bold text-foreground">Full-Stack Dev</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
              >
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">
                  Mana
                </span>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
              >
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">
                  Stamina
                </span>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-green-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
