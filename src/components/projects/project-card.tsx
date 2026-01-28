import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  // Preload images when modal opens
  useEffect(() => {
    if (isModalOpen) {
      props.imageUrl.forEach((url, index) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => {
          setImagesLoaded((prev) => new Set(prev).add(index));
        };
      });
    }
  }, [isModalOpen, props.imageUrl]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % props.imageUrl.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + props.imageUrl.length) % props.imageUrl.length,
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
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
          className="absolute right-4 top-4 z-10 rounded-full border border-accent/50 bg-background/90 px-3 py-1 text-xs font-bold text-accent backdrop-blur-md"
        >
          +3000 XP
        </motion.div>

        {/* Image Section with Carousel */}
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden border-b border-border bg-muted"
          onClick={openModal}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={props.imageUrl[currentImageIndex]}
                alt={`${props.name} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Carousel Controls - Only show if more than 1 image */}
          {props.imageUrl.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-accent hover:text-background group-hover:opacity-100"
                aria-label="Previous image"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 backdrop-blur-sm transition-all hover:bg-accent hover:text-background group-hover:opacity-100"
                aria-label="Next image"
              >
                <FiChevronRight size={20} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {props.imageUrl.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-6 bg-accent"
                        : "w-1.5 bg-background/60 hover:bg-background/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-6 overflow-hidden rounded-md border border-border">
              <Image
                src={props.favicon}
                alt="logo"
                fill
                className="object-cover"
              />
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

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-3 text-foreground backdrop-blur-sm transition-all hover:bg-accent hover:text-background"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-[85vh] w-full max-w-6xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  {!imagesLoaded.has(currentImageIndex) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent" />
                    </div>
                  )}
                  <img
                    src={props.imageUrl[currentImageIndex]}
                    alt={`${props.name} screenshot ${currentImageIndex + 1}`}
                    className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                    style={{
                      opacity: imagesLoaded.has(currentImageIndex) ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation in Modal */}
              {props.imageUrl.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground backdrop-blur-sm transition-all hover:bg-accent hover:text-background"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 text-foreground backdrop-blur-sm transition-all hover:bg-accent hover:text-background"
                    aria-label="Next image"
                  >
                    <FiChevronRight size={28} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                    {currentImageIndex + 1} / {props.imageUrl.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
