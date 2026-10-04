import RoboticsGallery from "@/components/robotics-gallery";
import { roboticsMedia } from "@/data/robotics-media";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { ArrowUpRight, ArrowDown, Cpu, Code2 } from "lucide-react";
import { roboticsProjects, roboticsSkills } from "@/data/robotics";
import { siteMetadata } from "@/data/siteMetaData.mjs";

function EngineeringDrawing({ kind = "arm" }: { kind?: string }) {
  return (
    <svg
      viewBox="0 0 560 360"
      fill="none"
      aria-hidden="true"
      className="engineering-drawing"
    >
      <g stroke="currentColor" strokeWidth="1" opacity=".2">
        <path
          d="M40 280H520M280 30V330M40 80H520M80 30V330M480 30V330"
          strokeDasharray="4 6"
        />
        <circle cx="280" cy="180" r="140" />
        <circle cx="280" cy="180" r="100" />
      </g>
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        {kind === "arm" ? (
          <>
            <path d="M170 292H330L344 312H156Z M210 292V253H293V292 M226 251L183 167L212 146L273 239 M199 153L301 89L319 119L221 183 M311 95L365 144L348 164L300 120 M355 154L389 163L394 187L379 199 M362 161L370 192L356 207" />
            <circle cx="204" cy="168" r="20" />
            <circle cx="310" cy="105" r="18" />
            <circle cx="253" cy="253" r="21" />
            <circle cx="354" cy="153" r="12" />
            <path
              d="M127 291V99M120 99H139M120 291H139M135 104L297 104"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
          </>
        ) : kind === "aircraft" ? (
          <>
            <path d="M280 44L294 135L470 209V225L294 189L290 270L341 300V311L280 294L219 311V300L270 270L266 189L90 225V209L266 135Z" />
            <path d="M280 64V287M112 209L262 170M448 209L298 170M259 282H301" />
          </>
        ) : kind === "drone" ? (
          <>
            <path d="M253 156L182 104L164 123L239 185L164 244L182 264L253 209H307L378 264L396 244L321 185L396 123L378 104L307 156Z" />
            <rect x="252" y="150" width="56" height="65" rx="9" />
            {[
              [173, 113],
              [387, 113],
              [173, 254],
              [387, 254],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="48" />
                <circle cx={x} cy={y} r="7" />
                <path d={`M${x - 37} ${y}H${x + 37}`} />
              </g>
            ))}
          </>
        ) : (
          <>
            <rect x="145" y="75" width="270" height="210" rx="8" />
            <rect x="240" y="135" width="80" height="80" />
            <path d="M165 110H220V155H240M320 155H373V104M165 251H218V192H240M320 192H373V251M275 135V96M290 215V267" />
            {[170, 195, 220, 345, 370, 395].map((x) => (
              <g key={x}>
                <rect x={x} y="86" width="10" height="16" />
                <rect x={x} y="258" width="10" height="16" />
              </g>
            ))}
          </>
        )}
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <NextSeo
        title="Norbert Frank Mba | Robotics & UAV Systems Engineer"
        description="Robotics, UAV prototypes, embedded systems and simulation, built on a full-stack software and DevOps foundation. Explore Norbert Frank Mba’s engineering work."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          title: "Norbert Frank Mba | Robotics & UAV Systems",
          description: "Engineering across hardware, motion and code.",
          url: siteMetadata.siteUrl,
          type: "website",
        }}
      />
      <div className="robotics-page">
        <section className="engineering-hero">
          <div className="engineering-wrap">
            <div
              className="discipline-switch"
              aria-label="Portfolio disciplines"
            >
              <Link href="/" aria-current="page">
                <Cpu size={15} /> Robotics & UAV
              </Link>
              <Link href="/software">
                <Code2 size={15} /> Software engineering{" "}
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="engineering-hero-grid">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" /> Norbert Frank Mba · Enugu,
                  Nigeria
                </p>
                <h1>
                  Code meets
                  <br />
                  the{" "}
                  <em>
                    physical
                    <br className="hero-break" /> world.
                  </em>
                </h1>
                <p className="hero-description">
                  Robotics & UAV systems engineer. I work across mechanical
                  design, electronics, and intelligent software to bring
                  machines to life.
                </p>
                <div className="engineering-actions">
                  <a className="engineering-button" href="#robotics-projects">
                    Explore my work <ArrowDown size={17} />
                  </a>
                  <a
                    className="engineering-text-link"
                    href="https://wa.me/2347025488825"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Let’s talk on WhatsApp"
                  >
                    Let’s talk <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
              <div className="hero-blueprint">
                <div className="blueprint-label">
                  <span>FIELD NOTES / 001</span>
                  <span>ROBOTIC MANIPULATION</span>
                </div>
                <EngineeringDrawing />
                <div className="blueprint-caption">
                  <div>
                    <strong>Motion, by design.</strong>
                    <span>Five-axis arm · Planetary actuation</span>
                  </div>
                  <span className="drawing-badge">CONCEPT DRAWING</span>
                </div>
              </div>
            </div>
            <div className="engineering-strip">
              <span>01 / ROBOTICS</span>
              <span>02 / UAV SYSTEMS</span>
              <span>03 / EMBEDDED ELECTRONICS</span>
              <Link href="/software">
                04 / SOFTWARE <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
        <section
          className="engineering-wrap engineering-section"
          id="robotics-projects"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected engineering work</p>
              <h2>
                Built to move.
                <br />
                Designed to learn.
              </h2>
            </div>
            <p>
              Prototypes, integration work, and research
            </p>
          </div>
          <div className="robotics-project-grid">
            {roboticsProjects.map((project, index) => (
              <article
                className="robotics-project"
                key={project.id}
                id={project.id}
              >
                {roboticsMedia[project.id] ? (
                  <RoboticsGallery
                    items={roboticsMedia[project.id]}
                    title={project.title}
                  />
                ) : (
                  <div className="project-drawing">
                    <div className="project-drawing-label">
                      <span>
                        0{index + 1} / {project.category}
                      </span>
                      <span>ILLUSTRATION</span>
                    </div>
                    <EngineeringDrawing kind={project.kind} />
                  </div>
                )}
                <div className="robotics-project-body">
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="engineering-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <details>
                    <summary>
                      Engineering notes <span>+</span>
                    </summary>
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="capabilities-section">
          <div className="engineering-wrap engineering-section">
            <p className="eyebrow">The engineering toolkit</p>
            <h2>Across the whole system.</h2>
            <div className="capabilities-grid">
              {roboticsSkills.map((skill, index) => (
                <div key={skill.title}>
                  <span className="capability-number">0{index + 1}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="engineering-wrap engineering-section engineering-background">
          <div>
            <p className="eyebrow">Experience & approach</p>
            <h2>
              Hardware thinking.
              <br />
              Software depth.
            </h2>
            <p>
              Almost a decade across software and hardware development, with
              hands-on robotics and UAV project experience at Wicrypt Labs. My
              work culture is simple: point-blank focus.
            </p>
            <Link className="engineering-text-link" href="/about">
              More about me <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="engineering-role">
            <span className="eyebrow">Wicrypt Labs</span>
            <h3>RL & Robotics Engineer</h3>
            <p>
              Robotics and UAV development spanning aircraft controls, planetary
              gearing, PCB design, computer vision, and simulation.
            </p>
            <div className="role-divider" />
            <p className="eyebrow">A software foundation</p>
            <p>
              Hammer Games · DevOps Engineer
              <br />
              <small>Jul 2024 – Dec 2024</small>
            </p>
            <p>
              Loooty · Frontend Engineer
              <br />
              <small>Mar 2022 – Jan 2023</small>
            </p>
          </div>
        </section>
        <section className="engineering-wrap software-bridge">
          <div>
            <p className="eyebrow">The other side of my work</p>
            <h2>
              Good machines need
              <br />
              good software.
            </h2>
            <p>
              Full-stack applications, cloud infrastructure, and developer
              tooling. Explore the software behind my engineering foundation.
            </p>
          </div>
          <Link className="engineering-button" href="/software">
            Explore software <ArrowUpRight size={18} />
          </Link>
        </section>
      </div>
    </>
  );
}
