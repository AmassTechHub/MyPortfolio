"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  category: "tech" | "media"
}

export default function SkillGraph() {
  const skills: Skill[] = [
    // Tech Skills
    { name: "JavaScript", level: 90, category: "tech" },
    { name: "React.js", level: 88, category: "tech" },
    { name: "Node.js", level: 85, category: "tech" },
    { name: "HTML/CSS", level: 92, category: "tech" },
    { name: "Python", level: 80, category: "tech" },
    { name: "Java", level: 75, category: "tech" },
    { name: "Tailwind CSS", level: 90, category: "tech" },
    { name: "PostgreSQL", level: 82, category: "tech" },
    { name: "Git/GitHub", level: 85, category: "tech" },
    { name: "Firebase", level: 78, category: "tech" },

    // Media Skills
    { name: "Video Editing", level: 92, category: "media" },
    { name: "Graphics Design", level: 88, category: "media" },
    { name: "Content Creation", level: 90, category: "media" },
    { name: "Digital Marketing", level: 85, category: "media" },
    { name: "Social Media Management", level: 88, category: "media" },
    { name: "Adobe Premiere Pro", level: 90, category: "media" },
    { name: "Adobe After Effects", level: 85, category: "media" },
    { name: "Photoshop/Illustrator", level: 82, category: "media" },
    { name: "Figma", level: 80, category: "media" },
    { name: "Podcast Production", level: 78, category: "media" },
  ]

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-400">Tech Skills</h3>
          <div className="space-y-6">
            {skills
              .filter((skill) => skill.category === "tech")
              .map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-orange-400">Media Skills</h3>
          <div className="space-y-6">
            {skills
              .filter((skill) => skill.category === "media")
              .map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div
        className={cn(
          "h-2 w-full rounded-full bg-gray-700 overflow-hidden",
          skill.category === "tech" ? "bg-blue-900/30" : "bg-orange-900/30",
        )}
      >
        <motion.div
          className={cn("h-full rounded-full", skill.category === "tech" ? "bg-blue-500" : "bg-orange-500")}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  )
}
