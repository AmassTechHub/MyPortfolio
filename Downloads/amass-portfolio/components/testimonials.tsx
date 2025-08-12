"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Testimonials() {
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
      const element = document.getElementById("testimonials")
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      content:
        "Theophilus built our entire web platform from scratch. His technical expertise and attention to detail exceeded our expectations. He's not just a developer but a true problem solver.",
      image: "/sarah-johnson.jpg",
      type: "tech",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "The video production quality from Amass Multimedia was exceptional. Theophilus has a unique eye for storytelling that helped our brand message resonate with our audience.",
      image: "/michael-chen.jpg",
      type: "media",
    },
    {
      name: "Ama Serwaa",
      role: "Event Coordinator",
      content:
        "Working with Theophilus for our event coverage was seamless. He captured moments we didn't even know were happening. The final edit brought tears to our eyes.",
      image: "/ama-serwaa.jpg",
      type: "media",
    },
    {
      name: "David Osei",
      role: "Tech Entrepreneur",
      content:
        "The mentorship I received from Theophilus through AmassTechHub transformed my approach to software development. His guidance was practical and immediately applicable.",
      image: "/david-osei.jpg",
      type: "tech",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Client <span className="text-blue-500">Testi</span>
              <span className="text-orange-500">monials</span>
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
              What clients and collaborators say about working with me and my brands.
            </motion.p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    className="p-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={cn(
                        "bg-gray-800/50 border hover:shadow-lg transition-shadow duration-300",
                        testimonial.type === "tech" ? "border-blue-900/30" : "border-orange-900/30",
                      )}
                    >
                      <CardContent className="p-6">
                        <Quote
                          className={cn(
                            "h-8 w-8 mb-4",
                            testimonial.type === "tech" ? "text-blue-400" : "text-orange-400",
                          )}
                        />
                        <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "w-12 h-12 rounded-full overflow-hidden border-2",
                              testimonial.type === "tech" ? "border-blue-500" : "border-orange-500",
                            )}
                          >
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600" />
              <CarouselNext className="static transform-none bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
