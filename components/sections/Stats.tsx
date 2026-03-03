'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

interface StatItem {
  number: string | number
  label: string
  suffix?: string
}

interface StatsProps {
  stats: StatItem[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const targetNumber = typeof stat.number === 'string'
      ? parseInt(stat.number.replace(/[^0-9]/g, ''))
      : stat.number

    const duration = 2000
    const steps = 60
    const increment = targetNumber / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetNumber) {
        setCount(targetNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, stat.number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center border-2 p-5 bg-white shoadow-xl relative z-1"
    >
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-neutral-600 mb-2">
        {count}{stat.suffix || '+'}
      </div>
      <p className="text-[#FD5D07] text-base">{stat.label}</p>
    </motion.div>
  )
}
