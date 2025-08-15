"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  delay?: number
}

export default function AnimatedCard({ children, className, hoverEffect = true, delay = 0 }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      {children}

      {hoverEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}
