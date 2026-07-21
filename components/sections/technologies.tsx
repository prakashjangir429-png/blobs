import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import technologiesData from "@/data/technologies.json";
import Link from "next/link";


const animation = { duration: 30000, easing: (t: number) => t };

const continuous = (slider: any) => {
  let mouseOver = false;

  function start() {
    if (mouseOver) return;

    const next = () => {
      if (!slider.track.details) return;

      slider.animator.start([
        {
          distance: 1,
          duration: 20000,
          easing: (t: number) => t,
        },
      ]);
    };

    slider.on("animationEnded", next);
    slider.on("updated", next);

    next();
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseenter", () => {
      mouseOver = true;
      slider.animator.stop();
    });

    slider.container.addEventListener("mouseleave", () => {
      mouseOver = false;
      start();
    });

    start();
  });
};

export default function TechStackSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: true,
      rubberband: true,
      renderMode: "performance",
      mode: "free",

      slides: {
        origin: "auto",
        perView: "auto",
        spacing: 24,
      },

      breakpoints: {
        "(max-width:640px)": {
          slides: {
            origin: "auto",
            perView: 2,
            spacing: 16,
          },
        },
      },
    },
    [continuous]
  );

  return (
    <section className="bg-transprent py-6 overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        {technologiesData?.technologies.map((tech, i) => (
          <Link
            key={i}
            href={`technologies/${tech?.slug}`}
            className="keen-slider__slide !w-[180px] px-12 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={tech?.hero?.heroImage}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-base font-medium w-50"></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}