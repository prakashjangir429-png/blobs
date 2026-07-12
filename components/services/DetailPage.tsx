"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import servicesData from "@/data/services.json";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Cloud,
  Search,
  Target,
  ShoppingBag,
  Apple,
  Phone,
  Box,
  Laptop,
  Monitor,
  Share2,
  PenTool,
  Layout,
  Rocket,
  Clock,
  BadgeCheck,
  Users,
  Star,
  Briefcase,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Shield,
  Trophy,
  TrendingUp,
  Zap,
  Quote,
  ExternalLink,
  Play,
  MessageSquare,
  Headphones,
} from "lucide-react";
import { CTASection } from "@/components/pages/aboutus";
import DynamicIcon from "../DynamicIcon";

export default function ServiceDetailPage({service}) {

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      <HeroSection service={service} />

      {/* ── OVERVIEW SECTION ── */}
      <OverviewSection service={service}/>

      {/* ── FEATURES & BENEFITS ── */}
      <FeaturesSection service={service}/>

      {/* ── TECH STACK ── */}
      <TechStackSection service={service} />

      {/* ── PROCESS ── */}
      <ServiceProcessSection service={service}/>

      {/* ── WHY CHOOSE US FOR THIS SERVICE ── */}
      <WhyChooseServiceSection service={service} />

      {/* ── PRICING / PACKAGES ── */}
      <PricingSection service={service}/>

      {/* ── CASE STUDIES / PORTFOLIO ── */}
      <CaseStudiesSection service={service} />

      {/* ── FAQ ── */}
      <FAQSection service={service}  />

      {/* ── RELATED SERVICES ── */}
      <RelatedServicesSection service={service} />

      {/* ── CTA ── */}
      <CTASection service={service} />
    </div>
  );
}


function HeroSection({ service }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const heroData = service.hero;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <>
      <style>{`
        .about-hero-section {
          background-image:
            linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          background-color: #f8f9fc;
        }
        .about-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 20px; border-radius: 50px;
          background: white;
          border: 1.5px solid rgba(26,63,160,0.15);
          box-shadow: 0 2px 10px rgba(26,63,160,0.07);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #1a3fa0;
        }
        .about-hero-tag-dot {
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
        className="about-hero-section relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
      >
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(26,63,160,0.09) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="max-w-7xl px-4 mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#e8a020]">{service.breadcrumb}</span>
          </div>
          <div className="grid lg:grid-cols-7 gap-12 items-center">
            <div className="lg:col-span-4">
              <motion.h1
                {...fadeUp(0.08)}
                className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-[#0f2a6b] leading-[1.25] mb-6"
              >
                <span className="gold-word">{heroData.title} </span>{" "}
                {heroData.highlightedWord}
              </motion.h1>

              {/* Description */}
              <motion.p
                {...fadeUp(0.14)}
                className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-4 font-light"
              >{heroData.description}
              </motion.p>

              {/* Trust points */}
              {/* <motion.div
                {...fadeUp(0.18)}
                className="flex flex-wrap gap-3 mb-4"
              >
                {heroData.trustPoints.map((stat: string, i: number) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                               bg-white border border-[#1a3fa0]/12 text-xs font-semibold
                               text-[#1a3fa0] shadow-sm"
                  >
                    <BadgeCheck size={12} className="text-[#e8a020]" />
                    {stat}
                  </span>
                ))}
              </motion.div> */}

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.22)}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-white relative overflow-hidden
                             shadow-lg shadow-[#1a3fa0]/25 hover:shadow-[#1a3fa0]/35
                             hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #1a3fa0, #2952cc)",
                  }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowUpRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                             font-semibold text-sm text-[#1a3fa0] bg-white
                             border border-[#1a3fa0]/20 hover:border-[#1a3fa0]/40
                             hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  View Our Work
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — Image / Visual */}
            <motion.div
              {...fadeUp(0.12)}
              className="relative lg:col-span-3 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[480px]">
                <div className="relative overflow-hidden">
                  <Image
                    src={heroData.heroImage || "/home/b1.png"}
                    alt={service.name || ""}
                    width={550}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export function OverviewSection({service}) {
  const overView = service.overview;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-7 gap-12 items-center">
          <motion.div
            className="lg:col-span-4"
          >
            <span className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-3 block">
              {overView.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-6">
              {overView.title}{" "}
              <span className="text-[#e8a020]">{overView.highlightedWord}</span> {overView.subtitle}
            </h2>
            <p className="text-[#4a5578] leading-relaxed mb-6">
              {overView.description}
            </p>
            <p className="text-[#4a5578] leading-relaxed mb-6">
             {overView.description2}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overView?.keyPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#e8a020] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#3a4a72]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#1a3fa0]/20 hover:from-[#E8A020]/20 to-[#2952cc]/05 lg:col-span-3 p-8"
          >
            <h3 className="text-xl font-bold text-[#0f2a6b] mb-4">
              Key Benefits
            </h3>
            {overView?.benefits?.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#e8a020]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0f2a6b] text-base">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-[#6b7a9e]">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection({service}) {
  const data = service.features;

  return (
    <section
      className="py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
           {data.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
           {data.title}{" "}
            <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group bg-gradient-to-br from-[#1a3fa0]/20 hover:from-[#E8A020]/20 to-[#2952cc]/05 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-4">
                <DynamicIcon name={feature.icon} className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2a6b] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4a5578] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection({service}) {
  const data = service.techStack;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            {data.title} <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
          <p className="text-[#4a5578] max-w-4xl mx-auto">
           {data.description}
          </p>
        </motion.div>

        <div className="flex flex-wrap overflow-x-auto justify-center gap-3 pb-4">
          {data?.technologies?.map((tech, idx) => (
            <motion.div
              key={idx}
              className="px-5 py-3 bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 rounded-full border border-[#1a3fa0]/10 text-sm font-semibold text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceProcessSection({service}) {
  const data = service.process;

  return (
    <section className="py-20 bg-[#0f2a6b] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            {data.title} <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {data?.steps?.map((step, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-white/8 absolute top-4 right-4 group-hover:text-[#e8a020]/15 transition-colors">{step.step}</div>
          
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseServiceSection({service}) {
  const data = service.whyChoose ;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            {data.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            {data.title}{" "}
            <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.reasons?.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br hover:from-[#1a3fa0]/20 from-[#E8A020]/20 to-[#2952cc]/05 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mb-3">
                <DynamicIcon name={reason.icon} className="w-5 h-5 text-[#1a3fa0]" />
              </div>
              <h3 className="font-bold text-[#0f2a6b] mb-1">{reason.title}</h3>
              <p className="text-sm text-[#4a5578]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection({service}) {
  const data = service.pricing ;

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            {data.title} <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data?.plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-white p-6 ${plan.popular
                ? "border-[#e8a020] bg-gradient-to-br from-[#E8A020]/20 to-[#2952cc]/05 border-2 scale-105 shadow-2xl ring-2 ring-[#e8a020]/20"
                : "border-[#1a3fa0]/08 bg-gradient-to-br from-[#1a3fa0]/20 hover:from-[#E8A020]/20 to-[#2952cc]/05"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform  bg-[#e8a020] text-white px-4 py-1.5 rounded-bl-xl text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-[#0f2a6b] mb-2">{plan.name}</h3>
              <p className="text-lg font-bold text-[#1a3fa0] mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium text-[#4a5578]">
                    <Check className="w-5 h-5 mt-1 text-[#e8a020] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block w-full py-3 shadow-xl rounded-xl font-semibold text-center transition-all duration-300 ${plan.popular
                  ? "bg-[#e8a020] text-white hover:bg-[#f0b832]"
                  : "bg-[#f4f6fb] text-[#1a3fa0] hover:bg-[#1a3fa0] hover:text-white"
                  }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection({service}) {
  const data = service.caseStudies ;
  const caseStudies = [1, 2, 3];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1a3fa0]/15 text-xs font-bold uppercase tracking-widest text-[#1a3fa0] mb-4">
            {data.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            {data.title} <span className="text-[#e8a020]">{data.highlightedWord}</span>
          </h2>
          <p className="text-[#4a5578] max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.studies.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-gradient-to-br from-[#1a3fa0]/20 hover:from-[#E8A020]/20 to-[#2952cc]/05 overflow-hidden border border-[#1a3fa0]/08 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={item.imageUrl || `https://images.unsplash.com/photo-${1460925895917 + idx}?auto=format&fit=crop&w=800&q=80`}
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-[#e8a020] font-semibold uppercase tracking-wider">
                  Case Study {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#0f2a6b] mt-1 mb-2">
                 {item.title}
                </h3>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3fa0] hover:text-[#e8a020] transition-colors"
                >
                  Read Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({service}) {
  const data = service.faq ;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "linear-gradient(rgba(26,63,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,160,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundColor: "#f8f9fc",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Frequently Asked{" "}
            <span className="text-[#e8a020]">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {data?.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-[#1a3fa0]/08 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#0f2a6b]">{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 text-[#1a3fa0] transition-transform duration-300 ${openIndex === idx ? "rotate-90" : ""
                    }`}
                />
              </button>
              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-4"
                >
                  <p className="text-[#4a5578] text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RELATED SERVICES
───────────────────────────────────────────── */
export function RelatedServicesSection({service}) {
  const data = service.relatedServices ;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2a6b] mb-3">
            Related <span className="text-[#e8a020]">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5 mx-auto">
          {data?.services.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="group bg-[#f8f9fc] rounded-2xl p-6 border border-[#1a3fa0]/08 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3fa0]/10 to-[#2952cc]/05 flex items-center justify-center mx-auto mb-3">
                <DynamicIcon name={service.icon} className="w-6 h-6 text-[#1a3fa0]" />
              </div>
              <h3 className="font-bold text-[#0f2a6b] mb-2">{service.title}</h3>
              <span className="text-sm text-[#1a3fa0] font-semibold group-hover:text-[#e8a020] transition-colors">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
