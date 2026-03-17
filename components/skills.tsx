"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMongodb,
  SiWordpress,
  SiFigma,
  SiFramer,
} from "react-icons/si"

type Skill = {
  name: string
  category: string
  level: number
  icon: ReactNode
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all")

  const skills: Skill[] = [
    { name: "HTML", category: "frontend", level: 95, icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", category: "frontend", level: 90, icon: <SiCss className="text-[#1572B6]" /> },
    { name: "Tailwind CSS", category: "frontend", level: 88, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "JavaScript", category: "frontend", level: 88, icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "React", category: "frontend", level: 85, icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", category: "frontend", level: 82, icon: <SiNextdotjs className="text-[#000000]" /> },
    { name: "TypeScript", category: "frontend", level: 80, icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Vite", category: "frontend", level: 75, icon: <SiVite className="text-[#646CFF]" /> },
    { name: "Python", category: "backend", level: 85, icon: <SiPython className="text-[#3776AB]" /> },
    { name: "Node.js", category: "backend", level: 85, icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Git", category: "backend", level: 80, icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", category: "backend", level: 85, icon: <SiGithub className="text-[#181717]" /> },
    { name: "MongoDB", category: "backend", level: 78, icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "WordPress", category: "backend", level: 85, icon: <SiWordpress className="text-[#21759B]" /> },
    { name: "Figma", category: "design", level: 88, icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "Framer Motion", category: "design", level: 75, icon: <SiFramer className="text-[#0055FF]" /> },
  ]

  const categories = [
    { id: "all", name: "All", color: "from-cyan-400 to-purple-400" },
    { id: "frontend", name: "Frontend", color: "from-blue-400 to-cyan-400" },
    { id: "backend", name: "Backend", color: "from-purple-400 to-pink-400" },
    { id: "design", name: "Design", color: "from-green-400 to-blue-400" },
  ]

  const filteredSkills = activeFilter === "all" ? skills : skills.filter((skill) => skill.category === activeFilter)

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I master to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-black/40 text-gray-300 border border-gray-600 hover:border-cyan-400"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
                }}
                className="group relative"
              >
                <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform-gpu">
                  <div className="text-center">
                    <div className="mb-3 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
