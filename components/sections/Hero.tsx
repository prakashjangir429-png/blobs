"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, MessageCircle, Phone, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    tag: 'AI-Powered Solutions',
    title: ['Transform', 'Your Business With AI'],
    accent: 0, // which word gets gold color
    description: 'Harness the power of artificial intelligence to revolutionize your operations, accelerate growth, and stay ahead of the competition.',
    icon: Sparkles,
    image: "https://niotechone.com/wp-content/uploads/2024/06/banner-hire-developer-hire-wordpress-developer-in-india-software-development-company-in-usa-canada-and-india-niotechone-software-solution-pvt-ltd.png",
    stat: { value: '98%', label: 'Client Satisfaction' },
  },
  {
    tag: 'Elite Performance',
    title: ['Lightning Fast', 'Apps Built To Scale'],
    accent: 0,
    description: 'Experience unparalleled speed and efficiency with our cutting-edge technology stack, engineered for enterprise-grade performance.',
    icon: Zap,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    stat: { value: '500+', label: 'Projects Delivered' },
  },
  {
    tag: 'Bank-Level Security',
    title: ['Secure', 'Systems You Can Trust'],
    accent: 0,
    description: 'Enterprise-grade security protocols to keep your data safe, compliant, and protected against modern cyber threats.',
    icon: Shield,
    image: "https://www.truevalueinfosoft.com/assets/img/banner-1/img-banner-1.webp",
    stat: { value: '10+', label: 'Years Experience' },
  },
];

const floatingBadges = [
  { icon: '⚡', label: 'Fast Delivery', delay: 0 },
  { icon: '🏆', label: 'Award Winning', delay: 0.3 },
  { icon: '🔒', label: 'Secure & Safe', delay: 0.6 },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    let p = 0;
    progressRef.current = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) {
        clearInterval(progressRef.current!);
      }
    }, 50);

    intervalRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  const goTo = (idx: number) => {
    setCurrent(idx);
  };

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <>

      <section className="hero-section relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">

        {/* Background */}
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="orb w-[600px] h-[600px] top-[-15%] right-[-10%] z-0" style={{ background: 'rgba(232,160,32,0.12)' }} />
        <div className="orb w-[500px] h-[500px] bottom-[-10%] left-[-8%] z-0" style={{ background: 'rgba(26,63,160,0.1)' }} />
        <div className="orb w-[300px] h-[300px] top-[30%] left-[20%] z-0" style={{ background: 'rgba(41,82,204,0.06)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">

            {/* ─── LEFT: Text ─── */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tag */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tag-${current}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="hero-tag mb-4 w-fit"
                >
                  <Icon size={13} />
                  {slide.tag}
                </motion.div>
              </AnimatePresence>

              {/* Headline */}
              <div className="mb-3 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-${current}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h1 className="font-semibold text-[clamp(2.2rem,8vw,3.2rem)] text-[#0f2a6b]">
                      {slide.title.map((line, i) => (
                        <span key={i} className={`mr-3 ${i === slide.accent ? 'gold-word' : ''}`}>
                          {line}
                        </span>
                      ))}
                    </h1>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-8 font-light"
                >
                  {slide.description}
                </motion.p>
              </AnimatePresence>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="https://wa.me/" className="btn-primary">
                  <MessageCircle size={17} />
                  <span>WhatsApp Now</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <Phone size={17} />
                  <span>Contact Us</span>
                </Link>
              </motion.div>

              {/* Trust row */}
              <motion.div
                className="flex flex-wrap gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {['Free Consultation', 'No Hidden Costs', '24/7 Support'].map((t) => (
                  <div key={t} className="trust-item">
                    <div className="trust-check">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {t}
                  </div>
                ))}
              </motion.div>

              {/* Slide navigation dots */}
              <motion.div
                className="flex gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`slide-dot ${i === current ? 'active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                  >
                    {i === current && (
                      <motion.div
                        className="slide-dot-fill"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: progress / 100 }}
                        transition={{ duration: 0.05, ease: 'linear' }}
                      />
                    )}
                  </button>
                ))}
               
              </motion.div>
            </motion.div>

            {/* ─── RIGHT: Image ─── */}
            <motion.div
              className="relative w-full flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main image */}
              <div className="relative w-full max-w-[480px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${current}`}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.03, y: -10 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="aspect-[4/4]">
                      <img
                        src={slide.image}
                        alt={slide.tag}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative frame */}
                {/* <div className="absolute -inset-3 rounded-full border border-dashed opacity-30 -z-10" style={{ borderColor: '#1a3fa0' }} /> */}
                <div className="absolute -inset-6 rounded-[36px] border border-dashed opacity-10 -z-10" style={{ borderColor: '#e8a020' }} />

                {/* Stat bubble – top left */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`stat-${current}`}
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="stat-bubble -top-4 -left-4 sm:-left-8"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a3fa0, #2952cc)' }}>
                      <Icon size={18} color="white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg leading-none" style={{ fontFamily: 'Syne, sans-serif', color: '#0f2a6b' }}>
                        {slide.stat.value}
                      </p>
                      <p className="text-[11px] font-medium mt-0.5" style={{ color: '#9aa3bf' }}>
                        {slide.stat.label}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Floating badges – bottom right */}
                <motion.div
                  className="absolute -bottom-5 -right-4 sm:-right-6 flex flex-col gap-2 z-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {floatingBadges.map((b, i) => (
                    <motion.div
                      key={b.label}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border"
                      style={{ borderColor: 'rgba(26,63,160,0.08)', fontSize: '0.75rem', fontWeight: 600, color: '#0f2a6b' }}
                    >
                      <span>{b.icon}</span>
                      {b.label}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Animated gold ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"
                  style={{ width: '90%', height: '90%', border: '2px solid rgba(232,160,32,0.2)' }}
                  animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="scroll-hint hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(26,63,160,0.5)' }}>Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>
    </>
  );
}