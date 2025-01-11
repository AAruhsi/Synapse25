"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import image5 from "./assets/Group.png";
import carasoul1 from "./assets/Carasoul1.png";
import carasoul2 from "./assets/Carasoul2.png";
import carasoul3 from "./assets/Carasoul3.png";
import carasoul4 from "./assets/Carasoul4.png";
import { Almendra_SC } from "next/font/google";

const almendra = Almendra_SC({
  subsets: ["latin"],
  weight: "400",
});
gsap.registerPlugin(ScrollTrigger);

const pages = [
  { name: "Nature", image: carasoul1 },
  { name: "City", image: carasoul2 },
  { name: "Technology", image: carasoul3 },
  { name: "Space", image: carasoul4 },
];

export default function PerformersCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+300vw",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <main className="container min-h-screen">
      <section className="">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="flex h-screen w-[400vw] bg-black">
            {pages.map((page) => (
              <div
                key={page.name}
                className="h-full w-screen flex flex-col items-center justify-center  relative"
              >
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src={page.image}
                    alt={page.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h2
                  className={`text-8xl  text-white absolute bottom-20 z-10 ${almendra.className}`}
                >
                  {page.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 sm:w-full">
          <Image
            src={image5}
            alt="Merge Effect Image"
            className="h-36 w-full object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
