"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Code, Film, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"
import InteractiveTimeline from "./interactive-timeline"
import ParallaxSection from "./parallax-section"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
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

  const roles = [
    {
      title: "Software Engineer",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      description: "Building innovative web and mobile solutions with modern technologies.",
    },
    {
      title: "Content Creator",
      icon: <Film className="h-6 w-6 text-orange-500" />,
      description: "Producing educational tech content and creative multimedia projects.",
    },
    {
      title: "Project Manager",
      icon: <Users className="h-6 w-6 text-green-500" />,
      description: "Leading development teams and managing end-to-end product development.",
    },
    {
      title: "Tech Entrepreneur",
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      description: "Founding and growing tech ventures that educate, inspire, and drive change.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              About <span className="text-blue-500">Me</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ParallaxSection direction="left" baseVelocity={0.1} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-800 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-gray-900 to-orange-900/40 flex items-center justify-center">
                  <img
                    src="/AMASS.jpg"
                    alt="Theophilus Amankwah"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            </ParallaxSection>

            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Passionate Tech Entrepreneur & Creative
              </motion.h3>

              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm Theophilus Amankwah, a creative and results-driven Computer Science student at Kwame Nkrumah
                University of Science and Technology (KNUST), passionate about software engineering, digital content
                creation, and technology entrepreneurship. As the founder of AmassTechHub, I lead a growing platform
                committed to digital empowerment through tutorials, startup insights, and impactful tech content.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I specialize in full-stack development, graphics and video production, and social media strategy. With a
                strong belief in innovation and purpose-driven technology, I enjoy blending media and code to build
                solutions that educate, inspire, and drive real change. Currently, I'm leading a development team at
                CreateConnect Labs, working on real-world software projects and exploring YouTube automation for
                scalable educational content.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="mt-1">{role.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{role.title}</h4>
                      <p className="text-sm text-gray-400">{role.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                My Journey
              </motion.h3>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
            </div>

            <InteractiveTimeline />
          </div>
        </div>
      </div>
    </section>
  )
}
