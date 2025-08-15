"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import AnimatedCard from "./animated-card"

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const education = [
    {
      degree: "BSc. Computer Science",
      institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
      location: "Kumasi, Ghana",
      period: "Expected September 2027",
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    },
    {
      degree: "W.A.S.S.C.E (General Science)",
      institution: "Mpraeso SHS",
      location: "Mpraeso, Ghana",
      period: "September 2018 – September 2021",
      icon: <BookOpen className="h-6 w-6 text-orange-500" />,
    },
  ]

  const certifications = [
    {
      title: "Best Student Blogger/Content Creator",
      issuer: "2023/24",
      date: "2023",
      icon: <Award className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Graphic Design Masterclass",
      issuer: "Udemy",
      date: "Ongoing",
      icon: <Award className="h-6 w-6 text-green-500" />,
    },
  ]

  const voluntaryActivities = [
    {
      title: "TechAble",
      description:
        "Volunteered as an Instructor for a 12-week intensive Digital Marketing Masterclass for the Disabled at Mastercard Foundation sponsored by IEEE.",
      details: [
        "Facilitated hands-on sessions on social media strategy, branding, and content marketing for beginners.",
        "Mentored students on using digital tools to enhance visibility and engagement for startups and personal brands.",
        "Contributed to curriculum development and participant evaluation while promoting practical learning outcomes.",
      ],
    },
  ]

  const leadershipExperience = [
    {
      title: "Vice President, Computer Science Society (CSS)- KNUST",
      description: "Currently leading student initiatives and fostering tech innovation at KNUST's premier computer science organization.",
      period: "August 2nd, 2025 - Present",
      details: [
        "Leading executive team meetings and strategic planning sessions for the society.",
        "Overseeing technical workshops, hackathons, and innovation challenges for computer science students.",
        "Representing CSS-KNUST at university-wide events and inter-departmental collaborations.",
        "Mentoring junior members and fostering a culture of innovation and excellence.",
      ],
    },
    {
      title: "Quiz President, Mpass_NSMQ TEAM",
      description: "Led the National Science and Math Quiz team, developing leadership skills and fostering a collaborative learning environment.",
      period: "2020-2021",
      details: [
        "Led the National Science and Math Quiz team at Mpraeso SHS.",
        "Developed leadership and team management skills.",
        "Fostered a collaborative learning environment.",
        "Coordinated team training and competition preparation.",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div style={{ opacity, y }}>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education & <span className="text-blue-500">Achievements</span>
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
              My academic journey, certifications, and community involvement
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                    delay={index * 0.1}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{item.degree}</h4>
                        <p className="text-gray-300">{item.institution}</p>
                        <p className="text-gray-400 text-sm">{item.location}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-12 text-white flex items-center gap-2">
                <Award className="h-6 w-6 text-orange-500" />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                    delay={index * 0.1}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                        <p className="text-gray-300">{item.issuer}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            {/* Voluntary Activities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                Voluntary Activities
              </h3>

              <div className="space-y-6">
                {voluntaryActivities.map((activity, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                    delay={index * 0.1}
                  >
                    <h4 className="font-semibold text-white text-lg mb-3">{activity.title}</h4>
                    <p className="text-gray-300 mb-4">{activity.description}</p>
                    <ul className="space-y-2">
                      {activity.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-12 text-white flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-500" />
                Leadership Experience
              </h3>

              <div className="space-y-6">
                {leadershipExperience.map((item, index) => (
                  <AnimatedCard
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                    delay={index * 0.1}
                  >
                    <h4 className="font-semibold text-white text-lg mb-3">{item.title}</h4>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
