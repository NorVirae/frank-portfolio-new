import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-14 md:px-20">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Return to home page"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative h-10 w-10"
          >
            <AnimatedLogo />
          </motion.div>
          <span className="hidden text-lg font-bold tracking-tight md:block">
            Norbert Frank Mba
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-6 text-sm font-medium uppercase tracking-wide">
            {props.routes.map((_link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={_link.href}
                    className={classNames(
                      pathName === _link.href
                        ? "font-bold text-accent"
                        : "text-muted-foreground hover:text-foreground",
                      "transition-colors duration-200",
                    )}
                  >
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-6 w-px bg-border"></div>
          <ThemeSwitch />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitch />
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </div>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
