"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { Experience } from "@/lib/definitions";
import React, { useEffect, useRef, useState } from "react";
import { div } from "motion/react-client";
import Image from "next/image";
import TechBadge from "./techBadges";

export const Timeline = ({ data }: { data: Experience[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === element) {
          setHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  return (
    <div className="text-white w-full" ref={containerRef}>
      <h1 className="flex text-white p-4 justify-center text-3xl font-bold">
        My Experiences
      </h1>
      <div className="relative max-w-7xl mx-auto pb-20" ref={ref}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-100 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full z-40">
              <div className="h-10 absolute left-3 md:left-3 w-10  bg-background border flex items-center justify-center rounded-3xl z-40">
                <div className="h-4 w-4 bg-black rounded-full border z-40" />
              </div>
              <h3 className="text-gray-300 hidden md:block md:pl-20 md:text-3xl font-bold text-muted-foreground/50 ">
                {item.date}
              </h3>
            </div>
            <div>
              <p className="mb-8 font-bold text-xl md:text-3xl">{item.title}</p>
              <p className="mb-8 text-muted-foreground">{item.description}</p>
              <div className="flex flex-wrap gap-2 items-center ">
                {item.badges.map((i) => (
                  <TechBadge key={i} tech={i} />
                ))}
              </div>
              {item.img_url && (
                <Image
                  src={item.img_url}
                  alt={item.img_url}
                  width={400}
                  height={400}
                  onLoad={() => {
                    if (ref.current) {
                      const rect = ref.current.getBoundingClientRect();
                      setHeight(rect.height);
                    }
                  }}
                  className="w-full aspect-video object-cover shadow-md my-6 rounded-xl"
                />
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#555555] via-[#777777] to-transparent shadow-[0_0_8px_#A855F7] blur-[0.3px] from-[0%] via-[20%] z-0"
          />
        </div>
      </div>
    </div>
  );
};
