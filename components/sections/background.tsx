'use client'

import { motion } from 'framer-motion'

export default function AnimatedRadialGlow() {
  return (
    <motion.div
      animate={{
        backgroundPosition: [
          "50% 50%",
          "60% 40%",
          "40% 60%",
          "50% 50%",
        ],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        fixed bottom-[10vh] left-1/2 -translate-x-1/2
        w-[150vw] h-[150vw]
        rounded-full
        opacity-50
        blur-[120px]
        pointer-events-none
        z-0
       bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.7)_0%,_rgba(255,127,0,0.7)_14%,_rgba(255,255,0,0.7)_28%,_rgba(0,255,0,0.7)_42%,_rgba(0,0,255,0.7)_56%,_rgba(75,0,130,0.7)_70%,_rgba(148,0,211,0.7)_85%)]
        bg-[length:200%_200%]
      "
    />
  )
}