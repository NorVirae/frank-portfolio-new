import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/20"
    >
      {/* Gamified Header */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute top-4 right-4 z-10 rounded-full border border-accent/50 bg-background/90 px-3 py-1 text-xs font-bold text-accent backdrop-blur-md"
      >
        +3000 XP
      </motion.div>

      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={props.imageUrl[0]}
          alt={props.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="relative h-6 w-6 overflow-hidden rounded-md border border-border">
            <Image src={props.favicon} alt="logo" fill className="object-cover" />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-accent">
            {props.name}
          </h3>
        </div>

        <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-muted-foreground">
          {props.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Mission Status: <span className="text-green-500">Completed</span>
          </span>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={props.sourceCodeHref}
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Source Code"
            >
              <FiGithub size={18} />
            </motion.a>
            {props.liveWebsiteHref && (
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href={props.liveWebsiteHref}
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="Live Website"
              >
                <FiExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
