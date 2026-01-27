import Image from "next/image";
import { motion } from "framer-motion";

import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <section className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-12 px-6 py-20 text-center sm:px-14 md:px-20 lg:flex-row lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="w-full lg:w-1/2"
      >
        <motion.div
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-accent/20 bg-muted shadow-2xl lg:mx-0"
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
            className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-accent"
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-lg font-medium leading-relaxed text-muted-foreground"
        >
          I turn vision into reality with code. Whether I&apos;m working on
          a website or any digital product, I bring my commitment to design
          excellence and user-centered thinking to every project I work on.
        </motion.p>

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
            { value: "100%", label: "Committed" }
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
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
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
