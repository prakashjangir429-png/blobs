"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const contentSlides = [
  {
    title: 'Innovate with AI',
    description: 'Harness the power of artificial intelligence to transform your business operations and drive sustainable growth.',
    icon: Sparkles,
    // Removed trailing spaces in URL
    image: "https://niotechone.com/wp-content/uploads/2024/06/banner-hire-developer-hire-wordpress-developer-in-india-software-development-company-in-usa-canada-and-india-niotechone-software-solution-pvt-ltd.png",
  },
  {
    title: 'Lightning Fast Performance',
    description: 'Experience unparalleled speed and efficiency with our cutting-edge technology stack optimized for scale.',
    icon: Zap,
    // Ensure this local image exists, otherwise use a placeholder
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security protocols to keep your data safe, compliant, and protected against modern threats.',
    icon: Shield,
    image: "https://www.truevalueinfosoft.com/assets/img/banner-1/img-banner-1.webp",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = contentSlides[currentSlide];
  const SlideIcon = slide.icon;

  // Animation variants for smoother coordination
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9, rotateY: -10 },
    animate: { opacity: 1, scale: 1, rotateY: 0 },
    exit: { opacity: 0, scale: 1.1, rotateY: 10 },
  };

  return (
    <section className="relative min-h-screen w-full bg-gray-50 flex items-center overflow-hidden pt-20 pb-10 lg:pt-28">
      
      {/* Background Decorative Elements (Static to prevent layout shift) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 mt-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content - Text */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm mb-6 w-fit"
            >
              <SlideIcon size={18} className="text-[#FD5D07]" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {slide.title}
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="relative mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900"
                >
                  {slide.title.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className={`inline-block mr-3 ${index === 0 ? 'text-[#FD5D07]' : 'text-gray-900'}`}
                    >
                      {word}
                    </span>
                  ))}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description - Fixed Height Container to prevent jumping */}
            <div className="relative mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl"
                >
                  {slide.description} {slide.description} {slide.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group relative px-5 py-2.5 rounded-full border-2 border-[#FD5D07] text-gray-900 font-bold text-base overflow-hidden cursor-pointer"
              >
                <Link href="/" className="relative z-10 flex items-center gap-2">
                  <span>Whatsapp Now</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-[#FD5D07] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   Whatsapp Now <ArrowRight size={18} />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="group relative px-5 py-3 rounded-full bg-gray-900 text-white font-bold text-base overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/" className="relative z-10 flex items-center gap-2">
                  <span>Connect Us</span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* Fixed Aspect Ratio Container to prevent height jumping */}
            <div className="relative w-full max-w-[550px] aspect-[4/3] lg:aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative w-full h-full rounded-3xl p-6">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    /> 
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Decorative Blob behind image (Absolute to not affect flow) */}
              <motion.div
                animate={{ 
                  y: [0, 30, 0], 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/40 to-blue-200/40 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}