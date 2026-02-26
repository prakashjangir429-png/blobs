'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function RainbowCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
<motion.div
  style={{
    translateX: smoothX,
    translateY: smoothY,
  }}
  className="pointer-events-none fixed top-0 left-0 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2 shadow rounded-full z-0 border-2 border-gray-400"
/>
  )
}