"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Star, Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Nikita",
    score: "SAT 1500 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `When I visited Gateway Abroad Jaipur, my quest for SAT coaching stopped. You can tell from the first class itself that these people are genuinely interested in you doing well and achieving a good score.`,
    rating: 5,
  },
  {
    name: "Vansh",
    score: "SAT 1550 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `I joined Gateway Abroad for SAT prep and it was the best decision. Strategies explained for math and verbal sections along with practice tests were excellent. Happy to recommend them!`,
    rating: 5,
  },
  {
    name: "Yatti",
    score: "SAT 1490 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `Outstanding guidance from the faculty of Gateway Abroad. Their ability to explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!`,
    rating: 5,
  },
  {
    name: "Rohan",
    score: "SAT 1480 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `The personalized attention and structured curriculum helped me improve my score dramatically. The practice tests were exactly like the real exam. Truly world-class coaching!`,
    rating: 5,
  },
  {
    name: "Priya",
    score: "SAT 1520 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `Gateway Abroad transformed my preparation strategy. The faculty's deep knowledge and genuine care for students makes all the difference. Couldn't have achieved this without them.`,
    rating: 5,
  },
  {
    name: "Arjun",
    score: "SAT 1510 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `Best decision I made was joining here. The structured approach and constant motivation kept me on track. The faculty goes above and beyond to ensure student success.`,
    rating: 5,
  },
  {
    name: "Sneha",
    score: "SAT 1535 Scorer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s",
    text: `From strategy to execution, everything was perfect. The mock tests were incredibly accurate and the feedback was always constructive. My score improved by 200 points!`,
    rating: 5,
  },
]

function AutoPlayPlugin(slider: any) {
  let timeout: any
  let mouseOver = false

  function clearNextTimeout() { clearTimeout(timeout) }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => { slider.next() }, 2800)
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
    slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
    nextTimeout()
  })
  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

function TestimonialCard({ name, score, image, text, rating }: any) {
  return (
    <div className="relative mt-4 px-2 py-3 h-full">
      <div
        className="relative bg-white rounded-2xl p-5 h-full flex flex-col overflow-hidden
                   border border-[#e8edf8] transition-all duration-300
                   hover:-translate-y-1.5 hover:border-[#1a3fa0]/20"
      >
        {/* Gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
          style={{ background: "linear-gradient(90deg, #1a3fa0, #e8a020)" }} />

        {/* Quote icon */}
        <div
          className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(232,160,32,0.1)" }}
        >
          <Quote size={16} style={{ color: "#e8a020" }} />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-4">
          {[...Array(rating || 5)].map((_, i) => (
            <Star key={i} size={13} className="fill-[#e8a020] text-[#e8a020]" />
          ))}
        </div>

        {/* Text */}
        <p className="text-[#4a5578] text-sm leading-relaxed flex-1 mb-5">
          "{text}"
        </p>

        {/* Divider */}
        <div className="w-full h-px mb-4"
          style={{ background: "linear-gradient(90deg, rgba(26,63,160,0.1), transparent)" }} />

        {/* Author row */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-11 h-11 rounded-full flex-shrink-0 p-[2px]"
            style={{ background: "linear-gradient(135deg, #1a3fa0, #e8a020)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src={image}
                alt={name}
                width={44}
                height={44}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#0f2a6b] leading-tight">
              {name}
            </h3>
          </div>

          {/* Verified badge */}
          <div className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full"
               style={{ background: "rgba(26,63,160,0.06)" }}>
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path d="M1.5 3.5l1.4 1.4L5.5 2" stroke="white" strokeWidth="1.3"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[9px] font-bold text-[#1a3fa0]">Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1.15, spacing: 0 },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2.1, spacing: 0 } },
        "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 0 } },
        "(min-width: 1280px)": { slides: { perView: 4.1, spacing: 0 } },
      },
      defaultAnimation: { duration: 5000, easing: t => t },
    },
    [AutoPlayPlugin]
  )

  return (
    <section
      ref={ref}
      className="w-full py-12 relative overflow-hidden bg-[#f8f9fc]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {/* Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,63,160,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,160,32,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[#1a3fa0]/15 shadow-sm mb-5"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a3fa0]">
                Client Reviews
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="text-3xl sm:text-[2.6rem] font-extrabold text-[#0f2a6b] leading-tight mb-3"
            >
              <span className="text-[#e8a020]">What</span> our
              customers say
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12, transformOrigin: "left" }}
              className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#e8a020] to-[#f0b832] mb-4 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-[#4a5578] text-base sm:text-lg font-light max-w-lg"
            >
              Hear how our clients achieved their goals with{" "}
              <span className="font-semibold text-[#0f2a6b]">personalized IT solutions</span>{" "}
              and best-in-class strategies.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Slider — full bleed */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-4 sm:px-6 relative z-10"
      >
        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {testimonials.map((item, index) => (
            <div key={index} className="keen-slider__slide pb-6">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, #f8f9fc, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-20"
        style={{ background: "linear-gradient(-90deg, #f8f9fc, transparent)" }} />

    </section>
  )
}