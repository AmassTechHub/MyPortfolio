"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.h3
              className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Theophilus Amankwah
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering your digital journey — one line of code or frame at a time.
            </motion.p>
            <div className="flex gap-4">
              {[
                {
                  icon: <Github className="h-4 w-4" />,
                  href: "https://github.com/Am-amass",
                  label: "GitHub",
                  hoverColor: "hover:text-white",
                },
                {
                  icon: <Youtube className="h-4 w-4" />,
                  href: "https://www.youtube.com/@AmassTechHub",
                  label: "YouTube",
                  hoverColor: "hover:text-red-500",
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  href: "https://www.linkedin.com/in/theophilus-amankwah-kvngamass/",
                  label: "LinkedIn",
                  hoverColor: "hover:text-blue-500",
                },
                {
                  icon: <Instagram className="h-4 w-4" />,
                  href: "https://www.instagram.com/amasstechhub/",
                  label: "Instagram",
                  hoverColor: "hover:text-pink-500",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#brands" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">My Brands</h4>
            <ul className="space-y-2">
              {[
                { name: "AmassTechHub", href: "https://www.amasstechhub.com", color: "text-blue-400 hover:text-blue-300" },
                { name: "Amass Multimedia", href: "https://www.amasstechhub.com", color: "text-orange-400 hover:text-orange-300" },
                {
                  name: "GitHub Projects",
                  href: "https://github.com/Am-amass",
                  color: "text-gray-400 hover:text-white",
                },
                {
                  name: "YouTube Channel",
                  href: "https://www.youtube.com/@AmassTechHub",
                  color: "text-gray-400 hover:text-white",
                },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                    className={link.color + " transition-colors"}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Theophilus Amankwah. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
