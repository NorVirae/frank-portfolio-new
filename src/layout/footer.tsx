import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-14 md:px-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-8">
          {/* Brand / Contact Column */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-5xl lg:text-6xl">
              Let&apos;s Build <br /> Something{" "}
              <span className="text-accent">Real.</span>
            </h2>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Get in touch
              </span>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-xl font-medium decoration-accent decoration-2 underline-offset-4 hover:underline md:text-2xl"
              >
                {siteMetadata.email}
              </a>
            </div>
          </div>

          {/* Navigation / Socials Column */}
          <div className="flex flex-col justify-end gap-8 md:w-1/2 md:items-end">
            <div className="flex gap-6">
              <a
                href={siteMetadata.github}
                target="_blank"
                className="group flex items-center justify-center p-2 transition-transform hover:-translate-y-1"
                aria-label="Github"
              >
                <GithubIcon className="h-8 w-8 text-foreground transition-colors group-hover:text-accent" />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                className="group flex items-center justify-center p-2 transition-transform hover:-translate-y-1"
                aria-label="Linkedin"
              >
                <LinkedinIcon className="h-8 w-8 text-foreground transition-colors group-hover:text-accent" />
              </a>
              <a
                href={siteMetadata.X}
                target="_blank"
                className="group flex items-center justify-center p-2 transition-transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-8 w-8 text-foreground transition-colors group-hover:text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex w-full flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 text-xs font-medium uppercase tracking-wider text-muted-foreground md:flex-row">
          <span>&copy; {new Date().getFullYear()} Norbert Frank Mba</span>
          <div className="flex gap-8">
            <span>Nigeria, NG (Remote)</span>
            <span>
              Local Time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Europe/Zurich",
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
