"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Youtube } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import AnimatedCard from "./animated-card"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("portfolio")
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

  const techProjects = [
    {
      title: "CreateConnect",
      description: "A decentralized marketplace connecting creators with businesses for collaboration opportunities.",
      image: "/createconnect.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      link: "https://github.com/AmassTechHub/CreateConnect",
    },
    {
      title: "The Startup Genesis Podcast",
      description: "A podcast series featuring interviews with tech entrepreneurs and startup insights.",
      image: "/StartupGenesis.jpg",
      tags: ["Content Creation", "Audio Production", "Digital Marketing"],
      link: "https://www.youtube.com/@AmassTechHub",
    },
    {
      title: "PENSA KNUST Web Platform",
      description: "Digital platform for a university Christian fellowship's web and app needs.",
      image: "/pensaknust.JPG",
      tags: ["React", "Firebase", "Content Management", "Authentication"],
      link: "https://github.com/AmassTechHub",
    },
  ]

  const mediaProjects = [
    {
      title: "Brand Campaign",
      description: "Visual storytelling for a local business rebrand campaign.",
      image: "/brandcampaign.jpeg",
      tags: ["Videography", "Editing", "Color Grading"],
      link: "https://www.amasstechhub.com",
    },
    {
      title: "Product Photography",
      description: "High-quality product photography for an e-commerce store.",
      image: "/productphotography.jpeg",
      tags: ["Photography", "Lighting", "Post-processing"],
      link: "https://www.amasstechhub.com",
    },
    {
      title: "Event Coverage",
      description: "Comprehensive video and photo coverage for corporate events.",
      image: "/event coverage.jpeg",
      tags: ["Event", "Multi-camera", "Same-day Edits"],
      link: "https://www.amasstechhub.com",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          style={{ opacity, y }}
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
              My <span className="text-blue-500">Port</span>
              <span className="text-orange-500">folio</span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore my work across both tech and multimedia domains. Each project represents my commitment to quality
              and innovation.
            </motion.p>
          </div>

          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="tech" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Tech Projects
              </TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Media Work
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tech" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techProjects.map((project, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
                    delay={index * 0.1}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Project <ExternalLink size={14} className="ml-1" />
                      </motion.a>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <div className="flex justify-center gap-6 mt-12">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="https://github.com/Am-amass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="https://www.youtube.com/@AmassTechHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Youtube size={20} />
                    <span>YouTube</span>
                  </Link>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaProjects.map((project, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all group"
                    delay={index * 0.1}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-orange-900/30 text-orange-300 border border-orange-800/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-orange-400 hover:text-orange-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Project <ExternalLink size={14} className="ml-1" />
                      </motion.a>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="https://www.youtube.com/@AmassTechHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Youtube size={20} />
                    <span>YouTube Channel</span>
                  </Link>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
