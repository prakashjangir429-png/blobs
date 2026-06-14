"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Calendar, CheckCircle } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 overflow-hidden bg-white"
      aria-label="Contact Digitonix - Best IT Company in Jaipur for Web Development & Digital Marketing"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Digital transformation and IT solutions"
          fill
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,42,107,0.95) 0%, rgba(26,63,160,0.92) 50%, rgba(41,82,204,0.88) 100%)",
          }}
        />
      </div>

      {/* Animated background orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(232,160,32,0.4) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(240,184,50,0.3) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md
                       border border-white/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8a020] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8a020]" />
            </span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Let's Build Together
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Ready to Transform Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e8a020, #f0b832)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Presence?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Partner with Digitonix, the{" "}
            <span className="font-semibold text-white">leading IT company in Jaipur</span>, for
            world-class{" "}
            <span className="font-semibold text-white">web development</span>,{" "}
            <span className="font-semibold text-white">mobile apps</span>, and{" "}
            <span className="font-semibold text-white">digital marketing</span> solutions. Join 500+
            businesses achieving measurable growth.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10"
          >
            {[
              { icon: CheckCircle, text: "Free Consultation" },
              { icon: Calendar, text: "Quick Turnaround" },
              { icon: MessageCircle, text: "24/7 Support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <item.icon size={16} className="text-[#e8a020]" />
                <span className="text-sm font-medium text-white">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg
                           shadow-2xl transition-all duration-300 group relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #e8a020, #f0b832)",
                  boxShadow: "0 20px 40px -10px rgba(232,160,32,0.5)",
                }}
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #f0b832, #e8a020)" }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md
                           text-white border-2 border-white/30 font-bold text-lg
                           hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
              >
                <span>View Our Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {/* Email */}
              <motion.a
                href="mailto:nitishnirala390@gmail.com"
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 hover:border-white/20
                           transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(232,160,32,0.2), rgba(240,184,50,0.2))" }}
                >
                  <Mail className="w-5 h-5 text-[#e8a020]" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">
                    Email Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#e8a020] transition-colors">
                    nitishnirala390@gmail.com
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+918789891001"
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 hover:border-white/20
                           transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(26,63,160,0.3), rgba(41,82,204,0.3))" }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">
                    Call Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#e8a020] transition-colors">
                    +91 87898 91001
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                           border border-white/10 hover:bg-white/10 hover:border-white/20
                           transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(232,160,32,0.2), rgba(240,184,50,0.2))" }}
                >
                  <MapPin className="w-5 h-5 text-[#e8a020]" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">
                    Visit Us
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#e8a020] transition-colors">
                    Jaipur, Rajasthan, India
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0f2a6b] bg-gradient-to-br from-[#1a3fa0] to-[#2952cc]
                               flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="font-medium">500+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8a020">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="font-medium ml-1">4.9/5 Rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}