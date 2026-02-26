"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

const testimonials = [
  {
    name: "Nikita",
    score: "SAT 1500 SCORER",
    image: "/students/nikita.jpg",
    text: `When I visited Gateway Abroad Jaipur, my quest for SAT coaching stopped. You can tell from the first class itself that these people are genuinely interested in you doing well and achieving a good score in the SAT.`,
  },
  {
    name: "Vansh",
    score: "SAT 1550 SCORER",
    image: "/students/vansh.jpg",
    text: `I joined Gateway Abroad for the prepping of SAT exam and I think it was the best decision. Strategies that were explained to me for math and verbal sections along with practice tests were in abundance. Happy to recommend them to anyone for SAT prep!!`,
  },
  {
    name: "Yatti",
    score: "SAT 1490 SCORER",
    image: "/students/yatti.jpg",
    text: `I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!`,
  },
]

export default function TopScorers() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.1,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 40 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 50 },
      },
    },
  })

  return (
    <section className="bg-[#f4f6f9] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#0f2b52]">
            Top <span className="text-red-500">Scorers</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Hear how Gateway Abroad students achieved their goals with
            personalized coaching and data-driven strategies.
          </p>
        </div>

        {/* Horizontal Timeline Line */}
        <div className="absolute top-[250px] left-0 w-full h-[4px] bg-gray-300 z-0"></div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider relative z-10">
          {testimonials.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, score, image, text }: any) {
  return (
    <div className="relative mt-16">
      
      {/* Avatar */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
        <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-red-500 overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-[30px] border-[4px] border-gray-300 p-10 pt-20 shadow-sm">
        
        <h3 className="text-2xl font-bold text-red-500 mb-2">
          {name}
        </h3>

        <p className="tracking-[0.3em] text-xs text-[#0f2b52] font-semibold mb-6">
          {score}
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          {text}
        </p>
      </div>
    </div>
  )
}