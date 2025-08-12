"use client"

import { ArrowRight, Code, Film, Download } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import MagneticButton from "./magnetic-button"
import { motion } from "framer-motion"
import ThreeBackground from "./three-background"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/20" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.span
                className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              >
                <Code size={16} /> AmassTechHub
              </motion.span>
              <motion.span
                className="px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.3)" }}
              >
                <Film size={16} /> Amass Multimedia
              </motion.span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Theophilus Amankwah
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              "I've always wanted to be part of Technology. The options were either I watch it happen or be part of it,
              and so I couldn't settle for less..."
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagneticButton className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-6 text-lg rounded-md">
                Let's Work Together <ArrowRight className="ml-2 inline" size={18} />
              </MagneticButton>
              <MagneticButton className="border border-gray-700 text-white hover:bg-gray-800 px-6 py-6 text-lg rounded-md">
                <a href="/THEOPHILUS-AMANKWAH-CV.pdf" download className="flex items-center">
                  Download CV <Download className="ml-2 inline" size={18} />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
