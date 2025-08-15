"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Youtube, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import MagneticButton from "./magnetic-button"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact")
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // EmailJS implementation
      const emailjs = await import("@emailjs/browser")
      
      const result = await emailjs.send(
        "service_gcqsm4o", // Your EmailJS service ID
        "template_aqs650g", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "amankwaahtheophilus@gmail.com", // Your email address
        },
        "mLCG_9iQMIxc5FLKF" // Your EmailJS public key
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/Am-amass",
      color: "hover:text-gray-300",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://www.youtube.com/@AmassTechHub",
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/theophilus-amankwah-kvngamass/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/amasstechhub/",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Get In <span className="text-blue-500">Touch</span>
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
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">amankwaahtheophilus@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+233 243 521 850</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">Kumasi, Ghana</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors",
                        link.color,
                      )}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                  />
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500 min-h-[150px]"
                  />
                </motion.div>
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </MagneticButton>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-green-900/30 border border-green-700 rounded-md text-green-400"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-700 rounded-md text-red-400"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
