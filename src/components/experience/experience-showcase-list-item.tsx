import Link from "next/link";
import { motion } from "framer-motion";

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
  index?: number;
}

export default function ExperienceShowcaseListItem({
  title,
  organisation,
  date,
  location,
  description,
  index = 0,
}: ExperienceShowcaseListItemProps) {
  const isEven = index % 2 === 0;

  return (
    <li
      className={`relative flex w-full flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } mb-12 items-center gap-8`}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-accent"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.6, 0.05, 0.01, 0.9],
        }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        className={`w-full pl-16 md:w-1/2 md:pl-0 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <div className="group relative rounded-xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
          {/* XP Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className={`absolute -top-3 ${
              isEven ? "left-6 md:left-auto md:right-6" : "left-6"
            } rounded-full border border-accent bg-background px-3 py-1 text-xs font-bold text-accent`}
          >
            +2500 XP
          </motion.div>

          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {date} | {location}
          </span>
          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent md:text-2xl">
            {title}
          </h3>
          <Link
            href={organisation.href}
            className="mb-4 mt-1 inline-block text-sm font-semibold text-accent transition-all hover:underline hover:underline-offset-4"
          >
            @{organisation.name}
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden w-1/2 md:block"></div>
    </li>
  );
}
