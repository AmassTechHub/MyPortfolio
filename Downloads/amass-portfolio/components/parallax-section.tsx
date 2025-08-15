"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ParallaxSection({
  children,
  className,
  baseVelocity = 0.2,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform based on direction
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100, -100] : direction === "down" ? [-100, 100] : [0, 0],
  )

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [100, -100] : direction === "right" ? [-100, 100] : [0, 0],
  )

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y: yTransform,
          x: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
