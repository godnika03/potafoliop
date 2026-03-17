"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Frontend and backend experience with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces and memorable experiences with the help of AI",
    },
    {
      icon: Zap,
      title: "Optimization",
      description: "Focus on performance and development best practices",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I&apos;m a developer passionate about creating exceptional digital experiences. With over three years of experience, I specialize in developing modern web applications and designing interfaces that combine functionality with futuristic aesthetics.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My focus is on technological innovation, performance optimization, and creating solutions that make a difference in the digital world.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8 h-full hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
