"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Star, Quote, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

// SEO-optimized testimonials for Digitonix - IT Company in Jaipur
const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    company: "ShopVista E-Commerce",
    location: "Jaipur, Rajasthan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Digitonix transformed our outdated website into a high-converting e-commerce platform. Their Next.js development team delivered a blazing-fast, SEO-optimized store that increased our online sales by 340% in just 6 months. The best web development company in Jaipur we've worked with!`,
    rating: 5,
    service: "Web Development",
    metric: "340% Sales Growth",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "GreenLeaf Organics",
    location: "Delhi NCR",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `We hired Digitonix for digital marketing and SEO services, and the results were phenomenal. Our organic traffic grew by 520% and we now rank on page 1 for 45+ competitive keywords. Their data-driven approach to SEO and PPC is truly world-class.`,
    rating: 5,
    service: "Digital Marketing & SEO",
    metric: "520% Traffic Growth",
  },
  {
    name: "Arjun Patel",
    role: "Co-Founder",
    company: "FitTrack Pro",
    location: "Mumbai, Maharashtra",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: `The mobile app Digitonix built for us using React Native is absolutely stunning. Smooth performance, beautiful UI, and they delivered 2 weeks ahead of schedule. Our fitness app now has 50K+ downloads on both iOS and Android. Highly recommended!`,
    rating: 5,
    service: "Mobile App Development",
    metric: "50K+ Downloads",
  },
  {
    name: "Sneha Reddy",
    role: "Operations Head",
    company: "MedConnect Health",
    location: "Bangalore, Karnataka",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: `As a healthcare startup, we needed a secure, HIPAA-compliant platform. Digitonix's team delivered a custom software solution with flawless UI/UX design and rock-solid backend architecture. Their expertise in cloud solutions and cybersecurity is unmatched.`,
    rating: 5,
    service: "Custom Software Development",
    metric: "99.9% Uptime",
  },
  {
    name: "Vikram Singh",
    role: "Managing Director",
    company: "RoyalStay Hotels",
    location: "Udaipur, Rajasthan",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: `Digitonix redesigned our hotel booking website and implemented a comprehensive SEO strategy. Within 4 months, our direct bookings increased by 280% and we saved ₹15 lakhs annually in OTA commissions. Best IT company in Jaipur for hospitality tech!`,
    rating: 5,
    service: "Web Development & SEO",
    metric: "280% More Bookings",
  },
  {
    name: "Ananya Gupta",
    role: "Product Manager",
    company: "EduLearn Platform",
    location: "Pune, Maharashtra",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    text: `We partnered with Digitonix to build an AI-powered learning management system. Their developers integrated smart recommendation engines and real-time analytics that boosted student engagement by 180%. Their AI development capabilities are truly next-level.`,
    rating: 5,
    service: "AI-Powered Solutions",
    metric: "180% Engagement Boost",
  },
  {
    name: "Karan Joshi",
    role: "Founder",
    company: "QuickDeliver Logistics",
    location: "Ahmedabad, Gujarat",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: `From concept to deployment, Digitonix handled our entire logistics management software. The Flutter-based mobile app and React admin panel work flawlessly together. Their full-stack development team understood our business needs perfectly.`,
    rating: 5,
    service: "Full-Stack Development",
    metric: "60% Faster Operations",
  },
  {
    name: "Meera Nair",
    role: "Brand Manager",
    company: "Artisan Craft Co.",
    location: "Kochi, Kerala",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    text: `Digitonix created our complete brand identity and e-commerce website. The UI/UX design is gorgeous, the Shopify integration is seamless, and their digital marketing campaigns have been generating consistent 5X ROAS. A truly one-stop IT solutions partner!`,
    rating: 5,
    service: "UI/UX & E-Commerce",
    metric: "5X Return on Ad Spend",
  },
]

const serviceColors: Record<string, { bg: string; text: string; border: string }> = {
  "Web Development": { bg: "rgba(26,63,160,0.08)", text: "#1a3fa0", border: "rgba(26,63,160,0.15)" },
  "Digital Marketing & SEO": { bg: "rgba(232,160,32,0.1)", text: "#b07010", border: "rgba(232,160,32,0.2)" },
  "Mobile App Development": { bg: "rgba(41,82,204,0.08)", text: "#2952cc", border: "rgba(41,82,204,0.15)" },
  "Custom Software Development": { bg: "rgba(15,42,107,0.08)", text: "#0f2a6b", border: "rgba(15,42,107,0.15)" },
  "Web Development & SEO": { bg: "rgba(26,63,160,0.08)", text: "#1a3fa0", border: "rgba(26,63,160,0.15)" },
  "AI-Powered Solutions": { bg: "rgba(232,160,32,0.1)", text: "#b07010", border: "rgba(232,160,32,0.2)" },
  "Full-Stack Development": { bg: "rgba(41,82,204,0.08)", text: "#2952cc", border: "rgba(41,82,204,0.15)" },
  "UI/UX & E-Commerce": { bg: "rgba(240,184,50,0.1)", text: "#b07010", border: "rgba(240,184,50,0.2)" },
}

function AutoPlayPlugin(slider: any) {
  let timeout: any
  let mouseOver = false
  let dragStarted = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver || dragStarted) return
    timeout = setTimeout(() => {
      slider.next()
    }, 3500)
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
  slider.on("dragStarted", () => {
    dragStarted = true
    clearNextTimeout()
  })
  slider.on("dragEnded", () => {
    dragStarted = false
    nextTimeout()
  })
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

function TestimonialCard({
  name,
  role,
  company,
  location,
  image,
  text,
  rating,
  service,
  metric,
  index,
}: any) {
  const colors = serviceColors[service] || serviceColors["Web Development"]

  return (
    <div className="relative px-2 my-2 sm:px-3 h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="relative bg-white rounded-2xl p-6 h-full flex flex-col overflow-hidden
                   border border-[#e8edf8] transition-all duration-500
                   hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(26,63,160,0.15)]
                   hover:border-[#1a3fa0]/20 group"
      >
        {/* Gradient top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ background: "linear-gradient(90deg, #1a3fa0, #e8a020)" }}
        />

        {/* Background decorative quote */}
        <div className="absolute -top-2 -right-2 opacity-[0.03] pointer-events-none">
          <Quote size={120} style={{ color: "#1a3fa0" }} />
        </div>

        {/* Top row: Service tag + Rating */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
            style={{
              background: colors.bg,
              color: colors.text,
              borderColor: colors.border,
            }}
          >
            {service}
          </span>

          <div className="flex items-center gap-0.5">
            {[...Array(rating || 5)].map((_, i) => (
              <Star key={i} size={12} className="fill-[#e8a020] text-[#e8a020]" />
            ))}
          </div>
        </div>

        {/* Testimonial text */}
        <div className="relative flex-1 mb-1">
          <Quote
            size={16}
            className="absolute -top-1 -left-1 flex-shrink-0"
            style={{ color: "#e8a020" }}
          />
          <p className="text-[#4a5578] text-[13px] sm:text-sm leading-relaxed pl-4">
            {text}
          </p>
        </div>

        {/* Result metric badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl mb-5 w-fit"
          style={{ background: "linear-gradient(135deg, rgba(26,63,160,0.06), rgba(232,160,32,0.06))" }}
        >
          <span className="text-[11px] font-bold text-[#0f2a6b] tracking-wide">
            {metric}
          </span>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,63,160,0.12), rgba(232,160,32,0.12), transparent)",
          }}
        />

        {/* Author row */}
        <div className="flex items-center gap-3">
          {/* Avatar with gradient ring */}
          <div
            className="w-10 h-10 rounded-full flex-shrink-0 p-[2.5px] transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #1a3fa0, #e8a020)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s"}
                alt={`${name} - ${company} client review`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <h3 className="text-sm font-bold text-[#0f2a6b] leading-tight truncate">
              {name}
            </h3>
            {/* <p className="text-[11px] text-[#6b7a9e] leading-tight truncate">
              {role}, {company}
            </p> */}
            <p className="text-[10px] text-[#9aa3bf] leading-tight truncate">
              📍 {location}
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1.1, spacing: 0 },
      breakpoints: {
        "(min-width: 480px)": { slides: { perView: 1.5, spacing: 0 } },
        "(min-width: 640px)": { slides: { perView: 2.1, spacing: 0 } },
        "(min-width: 1024px)": { slides: { perView: 3.15, spacing: 0 } },
        "(min-width: 1280px)": { slides: { perView: 3.6, spacing: 0 } },
        "(min-width: 1536px)": { slides: { perView: 4.1, spacing: 0 } },
      },
      defaultAnimation: { duration: 600 },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
    },
    [AutoPlayPlugin]
  )

  return (
    <section
      ref={ref}
      className="w-full py-16  relative overflow-hidden bg-[#f8f9fc]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.025) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
      aria-label="Client testimonials and reviews for Digitonix - Best IT Company in Jaipur"
    >

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
                         border border-[#1a3fa0]/15 mb-5"
            >
              
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a3fa0]">
                Client Testimonials
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="text-3xl sm:text-4xl mb-3 xl:text-[2.4rem] font-semibold text-[#0f2a6b] leading-[1.18]"
            >
              Trusted by{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #1a3fa0, #2952cc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                500+ Businesses
              </span>
              <br />
              Across{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e8a020, #f0b832)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                India & Beyond
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-[#4a5578] text-base sm:text-lg font-light leading-relaxed"
            >
              Real results from real clients. See how our{" "}
              <span className="font-semibold text-[#0f2a6b]">
                web development
              </span>
              ,{" "}
              <span className="font-semibold text-[#0f2a6b]">
                mobile app development
              </span>
              ,{" "}
              <span className="font-semibold text-[#0f2a6b]">
                SEO & digital marketing
              </span>{" "}
              services help startups and enterprises achieve measurable growth.
            </motion.p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0"
          >
            {[
              { value: "4.9", label: "Avg Rating", sub: "Google & Clutch" },
              { value: "500+", label: "Projects", sub: "Delivered" },
              { value: "120+", label: "Reviews", sub: "5-Star Rated" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-3 sm:px-4">
                <div
                  className="text-2xl sm:text-3xl font-extrabold leading-none mb-1"
                  style={{
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #e8a020, #f0b832)"
                        : "linear-gradient(135deg, #1a3fa0, #0f2a6b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-[#0f2a6b] uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#9aa3bf]">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative z-10"
      >
        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {testimonials.map((item, index) => (
            <div key={index} className="keen-slider__slide pb-8">
              <TestimonialCard {...item} index={index} />
            </div>
          ))}
        </div>
        {/* Arrow navigation */}
        <div className="hidden sm:flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => slider.current?.prev()}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center
                       bg-white border border-[#e8edf8] text-[#1a3fa0]
                       hover:border-[#1a3fa0]/30 hover:shadow-md
                       transition-all duration-300 hover:-translate-x-0.5"
          >
            <ArrowRight size={18} className="rotate-180" />
          </button>
          <button
            onClick={() => slider.current?.next()}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center
                       text-white border-0
                       hover:shadow-lg transition-all duration-300 hover:translate-x-0.5"
            style={{ background: "linear-gradient(135deg, #1a3fa0, #2952cc)" }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      {/* Side gradient fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, #f8f9fc, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 pointer-events-none z-20"
        style={{ background: "linear-gradient(-90deg, #f8f9fc, transparent)" }}
      />
    </section>
  )
}