import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Expand } from "lucide-react";
import type { ProjectMedia } from "@/data/robotics-media";

export default function RoboticsGallery({
  items,
  title,
}: {
  items: ProjectMedia[];
  title: string;
}) {
  const [selected, setSelected] = useState(0);
  const item = items[selected];
  return (
    <section
      className="robotics-gallery"
      aria-label={`${title} photos and videos`}
    >
      <div className="gallery-stage">
        {item.type === "video" ? (
          <video
            key={item.src}
            controls
            playsInline
            preload="none"
            poster={item.poster}
            aria-label={item.caption}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support video.{" "}
            <a href={item.src}>Open the video</a>.
          </video>
        ) : (
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full-size image: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(max-width: 760px) 100vw, 560px"
              className="gallery-image"
              unoptimized
            />
            <span className="gallery-expand">
              <Expand size={14} /> Full size
            </span>
          </a>
        )}
      </div>
      <div className="gallery-caption">
        <p aria-live="polite">{item.caption}</p>
        <span>
          {selected + 1} / {items.length}
        </span>
      </div>
      {items.length > 1 && (
        <div className="gallery-navigation">
          <button
            type="button"
            aria-label={`Previous media for ${title}`}
            onClick={() =>
              setSelected((selected - 1 + items.length) % items.length)
            }
          >
            <ChevronLeft size={18} />
          </button>
          <div className="gallery-thumbnails">
            {items.map((media, index) => (
              <button
                type="button"
                key={media.src}
                aria-label={`${media.type === "video" ? "Video" : "Photo"}: ${
                  media.caption
                }`}
                aria-pressed={index === selected}
                onClick={() => setSelected(index)}
              >
                <Image
                  src={media.poster || media.src}
                  alt=""
                  width={76}
                  height={54}
                  unoptimized
                  loading="lazy"
                />
                {media.type === "video" && (
                  <Play size={13} aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={`Next media for ${title}`}
            onClick={() => setSelected((selected + 1) % items.length)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
