"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef } from "react"
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
  {
    name: "Yatti",
    score: "SAT 1490 SCORER",
    image: "/students/yatti.jpg",
    text: `I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!`,
  }, {
    name: "Yatti",
    score: "SAT 1490 SCORER",
    image: "/students/yatti.jpg",
    text: `I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!`,
  }, {
    name: "Yatti",
    score: "SAT 1490 SCORER",
    image: "/students/yatti.jpg",
    text: `I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!`,
  }, {
    name: "Yatti",
    score: "SAT 1490 SCORER",
    image: "/students/yatti.jpg",
    text: `I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!`,
  },


]

function AutoPlayPlugin(slider: any) {
  let timeout: any
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return

    timeout = setTimeout(() => {
      slider.next()
    }, 0) // slide every 2.5s
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })

    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })

    nextTimeout()
  })

  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

export default function TopScorers() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 1.1,
        spacing: 0,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 3.1, spacing: 5 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 4.2, spacing: 5 },
        },
      },
      defaultAnimation: {
        duration: 6500,
        easing: (t) => t, // smooth linear animation
      },
    },
    [AutoPlayPlugin]
  )

  return (
    <section className="bg-[#f4f6f9]/30 relative z-1 backdrop-blur-sm py-18 overflow-hidden">
      <div className="mx-auto px-6">

        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-[2.5rem] font-bold text-gray-800">
            <span className="text-[#FD5D07]">What</span> our customers say
          </h2>
          <p className="text-gray-700 font-medium text-lg mt-2 max-w-3xl">
            Hear how our clients achieved their goals with
            personalized IT solutions and best strategies.
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
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
    <div className="relative mt-3 p-2 py-4">

      {/* Card */}
      <div className="bg-white shadow-lg rounded-[30px] border-[2px] border-[#FD5D07] p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-14 h-14 border-2 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTni2_UQfY9kvI719Jrf5DInG1KNr0Qny_b5A&s"}
                alt={name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">
              {name}
            </h3>

            <p className="tracking-[0.3em] text-xs text-[#0f2b52] font-semibold">
              {score}
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          "{text}"
        </p>
      </div>
    </div>
  )
}