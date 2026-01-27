import { ReactNode } from "react";
import { Montserrat } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={classNames("flex min-h-screen flex-col bg-background font-sans text-foreground", montserrat.variable)}>
      <Navbar routes={routes} />
      <main className="flex-1 w-full relative">{props.children}</main>
      <Footer />
    </div>
  );
}
