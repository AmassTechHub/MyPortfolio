"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar, Code, Film, Briefcase, GraduationCap, Instagram, Users } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  category: "tech" | "media" | "education"
}

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2025",
      title: "Project Manager at CreateConnect Labs",
      description:
        "Leading a cross-functional development team building a decentralized creator marketplace with React, Node.js, PostgreSQL, and Tailwind CSS.",
      icon: <Briefcase className="h-5 w-5" />,
      category: "tech",
    },
    {
      year: "2025",
      title: "Assistant Web & App Head at PENSA-KNUST",
      description:
        "Overseeing development and technical needs of the department's web/app platforms while mentoring junior developers.",
      icon: <Code className="h-5 w-5" />,
      category: "tech",
    },
    {
      year: "2024",
      title: "Social Media Manager at Computer Science Society",
      description:
        "Managing and growing the society's social presence through strategic content and branding for student engagement.",
      icon: <Instagram className="h-5 w-5" />,
      category: "media",
    },
    {
      year: "2023",
      title: "Founded AmassTechHub",
      description:
        "Launched AmassTechHub as a comprehensive tech innovation platform offering web development, consulting, and digital marketing services.",
      icon: <Code className="h-5 w-5" />,
      category: "tech",
    },
    {
      year: "2022",
      title: "Established Amass Multimedia",
      description:
        "Created Amass Multimedia to provide professional videography, photography, and content creation services for brands.",
      icon: <Film className="h-5 w-5" />,
      category: "media",
    },
    {
      year: "2021",
      title: "Quiz President, Mpass_NSMQ TEAM",
      description:
        "Led the National Science and Math Quiz team at Mpraeso SHS, developing leadership and team management skills.",
      icon: <GraduationCap className="h-5 w-5" />,
      category: "education",
    },
  ]

  return (
    <div className="relative w-full py-10">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-gray-600 to-orange-500 transform -translate-x-1/2"></div>

      {/* Timeline events */}
      <div className="relative">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={cn("mb-12 flex flex-col md:flex-row", index % 2 === 0 ? "md:flex-row-reverse" : "")}
          >
            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 pl-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-6 rounded-lg shadow-lg max-w-md border",
                  event.category === "tech"
                    ? "bg-blue-900/10 border-blue-900/30"
                    : event.category === "media"
                      ? "bg-orange-900/10 border-orange-900/30"
                      : "bg-gray-800 border-gray-700",
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{event.year}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.description}</p>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className={cn(
                    "mt-4 text-sm flex items-center gap-1",
                    event.category === "tech"
                      ? "text-blue-400 hover:text-blue-300"
                      : event.category === "media"
                        ? "text-orange-400 hover:text-orange-300"
                        : "text-gray-400 hover:text-white",
                  )}
                >
                  Learn more
                </button>
              </motion.div>
            </div>

            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center z-10",
                  event.category === "tech"
                    ? "bg-blue-500"
                    : event.category === "media"
                      ? "bg-orange-500"
                      : "bg-gray-500",
                )}
              >
                {event.icon}
              </motion.div>
            </div>

            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>

      {/* Modal for event details */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "relative max-w-lg w-full p-8 rounded-xl shadow-2xl",
                selectedEvent.category === "tech"
                  ? "bg-gradient-to-br from-blue-900/90 to-gray-900 border border-blue-800/50"
                  : selectedEvent.category === "media"
                    ? "bg-gradient-to-br from-orange-900/90 to-gray-900 border border-orange-800/50"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700",
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer",
                  selectedEvent.category === "tech"
                    ? "bg-blue-800 hover:bg-blue-700"
                    : selectedEvent.category === "media"
                      ? "bg-orange-800 hover:bg-orange-700"
                      : "bg-gray-700 hover:bg-gray-600",
                )}
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </div>

              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                  selectedEvent.category === "tech"
                    ? "bg-blue-500"
                    : selectedEvent.category === "media"
                      ? "bg-orange-500"
                      : "bg-gray-500",
                )}
              >
                {selectedEvent.icon}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">{selectedEvent.year}</span>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-white">{selectedEvent.title}</h2>
              <p className="text-gray-300 mb-6">{selectedEvent.description}</p>

              <div className="border-t border-gray-700 pt-6 mt-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Key Achievements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Successfully delivered projects ahead of schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Implemented innovative solutions that increased efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Received recognition for exceptional work quality</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
