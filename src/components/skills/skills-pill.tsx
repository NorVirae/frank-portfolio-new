import { FC, SVGProps } from "react";
import { motion } from "framer-motion";

export interface SkillPillProps {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative flex cursor-default flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        className="relative h-10 w-10"
      >
        <Icon className="h-full w-full text-foreground transition-colors duration-300 group-hover:text-accent" />
      </motion.div>

      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-accent">
        {name}
      </span>

      {/* Decorative Inventory Corner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-accent/50"
      />
    </motion.div>
  );
}
