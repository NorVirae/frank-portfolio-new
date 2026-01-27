import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex h-full w-full items-center justify-center"
    >
      <Image
        src="/images/vyra.svg"
        alt="Vyra Logo"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
