import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const contentSlides = [
  {
    title: 'Innovate with AI',
    description: 'Harness the power of artificial intelligence to transform your business operations and drive growth.',
    icon: Sparkles,
    image: "https://niotechone.com/wp-content/uploads/2024/06/banner-hire-developer-hire-wordpress-developer-in-india-software-development-company-in-usa-canada-and-india-niotechone-software-solution-pvt-ltd.png",
  },
  {
    title: 'Lightning Fast Performance',
    description: 'Experience unparalleled speed and efficiency with our cutting-edge technology stack.',
    icon: Zap,
    image: "./v1.png",

  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security protocols to keep your data safe and your business compliant.',
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

  return (
    <section className="min-h-screen relative bg-no-repeat bg-fit flex items-center overflow-hidden pt-28">

      
      {/* https://img.freepik.com/premium-vector/abstract-grey-hitech-geometric-corporate-background_249611-5900.jpg */}
      <div className="max-w-7xl relative mx-auto px-4 w-full relative z-10">

          
        <div className="grid lg:grid-cols-2 gap-1 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <SlideIcon size={16} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-900">
                {slide.title}
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-[2.7rem] font-bold leading-tight text-gray-900">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1 }}
                className=" mb-4 max-w-xl leading-relaxed"
              >
                {slide.title.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-2 ${index === 0 ? 'text-[#FD5D07]' : 'text-gray-900'}`}
                  >
                    {word}
                  </span>
                ))}
              </motion.p>
            </h1>

            {/* Description with slide transition */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl text-gray-800 font-medium mb-8 max-w-2xl leading-relaxed"
              >
                {slide.description}  {slide.description}  {slide.description}  {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block group px-4 py-2.5 rounded-3xl border-2 border-amber-500 text-gray-900 shadow-xl font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden"
              >
                <Link
                  href={"/"}
                  className=""
                >
                  <span className="relative z-10">Whatsapp Now</span>
                  <div className="absolute inset-0  bg-gray-900 rounded-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block group px-4 py-2.5 shadow-xl rounded-3xl border-amber-500 border-2 text-gray-900 font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-300 relative overflow-hidden"
              >
                <Link
                  href={"/"}
                  className=""
                >
                  <span className="relative z-10">Connect us</span>
                  <div className="absolute inset-0 bg-gray-900 rounded-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-10">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                      ? 'w-10 gradient-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[550px] mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateY: 15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                {/* Image */}
                <div className="relative w-full ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-12 -left-4 bg-white/20 backdrop-blur-sm rounded-xl p-2 shadow-xl border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-display font-semibold text-lg text-gray-700">{slide.title}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative floating blobs behind the image */}
         
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
