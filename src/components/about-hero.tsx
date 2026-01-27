import Image from "next/image";
import { motion } from "framer-motion";

import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <section className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-12 px-6 py-4 text-center sm:px-14 md:px-20 lg:flex-row lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="w-full lg:w-1/2"
      >
        <motion.div
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-2 border-accent/20 bg-muted shadow-2xl lg:mx-0"
        >
          <Image
            src={heroProfileImg}
            alt="Norbert Frank Mba"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* Decorative Frame Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-accent"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-accent"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="w-full lg:w-1/2"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 block text-sm font-bold uppercase tracking-widest text-accent"
        >
          About The Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-extrabold uppercase leading-none tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Norbert <br /> Frank Mba
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 space-y-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            I&apos;m a{" "}
            <span className="font-semibold text-accent">software engineer</span>{" "}
            with over <span className="font-semibold text-accent">7 years</span>{" "}
            of professional{" "}
            <span className="font-semibold text-accent">full-stack</span>{" "}
            experience, specialized in building{" "}
            <span className="font-semibold text-accent">high-performance</span>,{" "}
            <span className="font-semibold text-accent">responsive</span>, and{" "}
            <span className="font-semibold text-accent">user-centric</span> web
            applications. I focus on delivering{" "}
            <span className="font-semibold text-accent">intelligent</span> and{" "}
            <span className="font-semibold text-accent">user-friendly</span>{" "}
            products that{" "}
            <span className="font-semibold text-accent">
              scale on cloud infrastructure
            </span>
            .
          </p>

          <p>
            I&apos;m fascinated by{" "}
            <span className="font-semibold text-accent">mathematics</span> and
            obsessed with{" "}
            <span className="font-semibold text-accent">
              machine learning algos
            </span>{" "}
            and its applications towards{" "}
            <span className="font-semibold text-accent">
              Embodied AI or Robotics
            </span>
            . I Practice{" "}
            <span className="font-semibold text-accent">Deep Work</span> — I
            apply <span className="font-semibold text-accent">deep focus</span>{" "}
            to a{" "}
            <span className="font-semibold text-accent">
              Software Engineering problem
            </span>{" "}
            until it&apos;s solved{" "}
            <span className="font-semibold text-accent">effectively</span> and{" "}
            <span className="font-semibold text-accent">on schedule</span>.
          </p>

          <p>
            If you want to{" "}
            <span className="font-semibold text-accent">move fast</span> without{" "}
            <span className="font-semibold text-accent">
              sacrificing quality
            </span>
            , I&apos;m your{" "}
            <span className="font-semibold text-accent">
              go-to software engineer
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {[
            { value: "7+", label: "Yrs Exp" },
            { value: "20+", label: "Projects" },
            { value: "100%", label: "Committed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                }}
                className="block text-3xl font-black text-accent"
              >
                {stat.value}
              </motion.span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
