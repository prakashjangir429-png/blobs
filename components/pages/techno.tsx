"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    ArrowRight,
    ChevronRight,
    BadgeCheck,
    ExternalLink,
} from "lucide-react";

export function TechHeroSection({ type, tech }: any) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const heroData = tech.hero;

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 28 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    });

    return (
        <>
            <style>{`
        .tech-hero-section {
          background-image:
            linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          background-color: #f8f9fc;
        }
        .tech-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 20px; border-radius: 50px;
          background: white;
          border: 1.5px solid rgba(26,63,160,0.15);
          box-shadow: 0 2px 10px rgba(26,63,160,0.07);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #1a3fa0;
        }
        .tech-hero-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a020;
          box-shadow: 0 0 0 3px rgba(232,160,32,0.25);
          animation: hero-pulse 2s ease infinite;
        }
        @keyframes hero-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(232,160,32,0.25); }
          50%     { box-shadow: 0 0 0 7px rgba(232,160,32,0.08); }
        }
        .gold-word { color: #e8a020; }
      `}</style>

            <section
                ref={ref}
                className="tech-hero-section relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
            >
                {/* Background decorative elements */}
                <div
                    className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(26,63,160,0.09) 0%, transparent 70%)",
                        filter: "blur(50px)",
                    }}
                />
                <div
                    className="absolute top-20 right-20 w-64 h-64 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(232,160,32,0.08) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#6b7a9e] mb-6">
                        <Link href="/" className="hover:text-[#1a3fa0] transition-colors">
                            Home
                        </Link>
                        <ChevronRight size={14} />
                        <Link
                            href={ type == "hireus" ? "/hireus" : "/technologies"}
                            className="hover:text-[#1a3fa0] transition-colors"
                        >
                            {type == "hireus" ? "Hire" : "Technologies"}
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-[#e8a020]">{tech.breadcrumb}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT — Text */}
                        <div>


                            {/* Heading */}
                            <motion.h1
                                {...fadeUp(0.08)}
                                className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-[#0f2a6b] leading-[1.25] mb-6"
                            >
                                <span className="gold-word">{heroData.title} </span> {" "}
                                {heroData.highlightedWord}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                {...fadeUp(0.14)}
                                className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-4 font-light"
                            >
                                {heroData.description}
                            </motion.p>

                            {/* Trust points */}
                            <motion.div
                                {...fadeUp(0.18)}
                                className="flex flex-wrap gap-3 mb-4"
                            >
                                {heroData.trustPoints.map((point: string, i: number) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                               bg-white border border-[#1a3fa0]/12 text-xs font-semibold
                               text-[#1a3fa0] shadow-sm"
                                    >
                                        <BadgeCheck size={12} className="text-[#e8a020]" />
                                        {point}
                                    </span>
                                ))}
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                {...fadeUp(0.22)}
                                className="flex flex-wrap gap-3"
                            >
                                <Link
                                    href={heroData.ctaLink}
                                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-white relative overflow-hidden
                             shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/35
                             hover:-translate-y-1 transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, #1a3fa0, #2952cc)",
                                    }}
                                >
                                    <span className="relative z-10">{heroData.ctaText}</span>
                                    <ArrowUpRight
                                        size={16}
                                        className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </Link>
                                <Link
                                    href={heroData.secondaryCtaLink}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-[#1a3fa0] bg-white
                             border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40
                             hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                >
                                    {heroData.secondaryCtaText}
                                    <ChevronRight size={16} />
                                </Link>
                            </motion.div>
                        </div>

                        {/* RIGHT — Image / Visual */}
                        <motion.div
                            {...fadeUp(0.12)}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-[480px]">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={heroData.heroImage || "/technologies/default-hero.jpg"}
                                        alt={tech.name}
                                        width={550}
                                        height={450}
                                        className="w-full object-cover"
                                        priority
                                    />
                                </div>
                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-[#1a3fa0]/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0] to-[#2952cc] flex items-center justify-center">
                                            <BadgeCheck className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#0f2a6b]">
                                                ISO 9001:2015
                                            </div>
                                            <div className="text-xs text-[#6b7a9e]">Certified Company</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}