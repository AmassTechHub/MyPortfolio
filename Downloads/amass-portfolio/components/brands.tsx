"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Code, Film, Laptop, Lightbulb, MessageSquare, Mic, Camera, Video, Instagram, Edit } from "lucide-react"
import { motion } from "framer-motion"
import MagneticButton from "./magnetic-button"
import AnimatedCard from "./animated-card"

export default function Brands() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("brands")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const techServices = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Web & App Development",
      description: "Custom websites and applications using React, Node.js, Express, and PostgreSQL.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Project Management",
      description: "Leading development teams and managing end-to-end product development cycles.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Digital Marketing & SEO",
      description: "Strategies to increase online visibility and drive targeted traffic.",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Tech Mentorship & Content",
      description: "Educational content through 'The Startup Genesis Podcast' and tutorial series.",
    },
  ]

  const mediaServices = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Videography",
      description: "Professional video production for events, promos, and interviews.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography",
      description: "High-quality photography for personal, brand, and product shoots.",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Social Media Content",
      description: "Engaging content creation optimized for various social platforms.",
    },
    {
      icon: <Edit className="h-6 w-6" />,
      title: "Video Editing & Graphics",
      description: "Professional editing using Premiere Pro, After Effects, and graphic design.",
    },
  ]

  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My <span className="text-blue-500">Brands</span> & What I <span className="text-orange-500">Do</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AmassTechHub */}
            <AnimatedCard className="rounded-xl overflow-hidden border border-blue-900/50 bg-gradient-to-br from-blue-900/10 via-gray-900 to-gray-900">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="h-8 w-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-blue-400">AmassTechHub</h3>
                </div>
                <p className="text-gray-300 mb-8 italic">Your one-stop tech innovation hub.</p>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {techServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-blue-900/10 border border-blue-900/30 hover:bg-blue-900/20 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="mt-1 text-blue-400">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <MagneticButton className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md">
                    Start a Tech Project
                  </MagneticButton>
                </div>
              </div>
            </AnimatedCard>

            {/* Amass Multimedia */}
            <AnimatedCard
              className="rounded-xl overflow-hidden border border-orange-900/50 bg-gradient-to-br from-orange-900/10 via-gray-900 to-gray-900"
              delay={0.2}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Film className="h-8 w-8 text-orange-500" />
                  <h3 className="text-2xl font-bold text-orange-400">Amass Multimedia</h3>
                </div>
                <p className="text-gray-300 mb-8 italic">Bringing stories to life through visuals.</p>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {mediaServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-orange-900/10 border border-orange-900/30 hover:bg-orange-900/20 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="mt-1 text-orange-400">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <MagneticButton className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md">
                    Book a Shoot
                  </MagneticButton>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  )
}
