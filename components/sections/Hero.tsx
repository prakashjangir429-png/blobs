"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, MessageCircle, Phone, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';



const floatingBadges = [
  { icon: '⚡', label: 'Fast Delivery', delay: 0 },
  { icon: '🏆', label: 'Award Winning', delay: 0.3 },
  { icon: '🔒', label: 'Secure & Safe', delay: 0.6 },
];

export function Hero({ slides }) {
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
    }, 10000);
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

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">

            {/* ─── LEFT: Text ─── */}
            <div
              className="flex flex-col justify-center"
            >
              {/* Tag */}
              <AnimatePresence mode="wait">
                <div
                  key={`tag-${current}`}
            
                  className="hero-tag mb-4 w-fit"
                >
                  {slide.tag}
                </div>
              </AnimatePresence>

              {/* Headline */}
              <div className="mb-3 relative">
                <AnimatePresence mode="wait">
                  <div
                    key={`title-${current}`}
                  >
                    <h1 className="font-semibold text-[clamp(2rem,8vw,2.6rem)] text-[#0f2a6b]">
                      {slide.title.map((line, i) => (
                        <span key={i} className={`mr-3 ${i === slide.accent ? 'gold-word' : ''}`}>
                          {line}
                        </span>
                      ))}
                    </h1>
                  </div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <p
                  key={`desc-${current}`}
                 
                  className="text-[#4a5578] text-base sm:text-lg leading-relaxed mb-8 font-medium"
                >
                  {slide.description}
                </p>
              </AnimatePresence>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-2 mb-8"
                
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
              </div>

              {/* Trust row */}
              <div
                className="flex flex-wrap gap-5"
               
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
              </div>

              {/* Slide navigation dots */}
              <div
                className="flex gap-2 mt-8"
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`slide-dot ${i === current ? 'active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                  >
                    {i === current && (
                      <div
                        className="slide-dot-fill"
                      />
                    )}
                  </button>
                ))}

              </div>
            </div>

            {/* ─── RIGHT: Image ─── */}
            <div
              className="relative w-full flex justify-center lg:justify-end"
            >
              {/* Main image */}
              <div className="relative w-full max-w-[480px]">
                <AnimatePresence mode="wait">
                  <div
                    key={`img-${current}`}
                  >
                    <div className="">
                      <img
                        src={slide.image}
                        alt={slide.tag}
                        className="w-full scale-110 h-full object-cover"
                      />
                    </div>
                  </div>
                </AnimatePresence>

                <div className="absolute -inset-6 rounded-[36px] border border-dashed opacity-10 -z-10" style={{ borderColor: '#e8a020' }} />

              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="scroll-hint hidden md:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(26,63,160,0.5)' }}>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
}