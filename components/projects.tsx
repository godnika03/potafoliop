"use client"
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Machine Learning",
      description:
        "Modelado predictivo, regresión, clasificación y optimización de modelos supervisados y no supervisados.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Scikit-learn", "Regresión", "Clasificación", "Modelos supervisados", "Feature Engineering"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Deep Learning",
      description:
        "Diseño y entrenamiento de redes neuronales profundas para visión, NLP y series temporales.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["PyTorch", "TensorFlow", "CNN", "RNN / LSTM", "Transfer Learning"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Data Science",
      description:
        "Análisis exploratorio, limpieza de datos y visualización para obtener insights accionables.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Pandas", "NumPy", "Visualización de datos", "Análisis Exploratorio", "Estadística"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Desarrollo de Aplicaciones",
      description:
        "Diseño y construcción de aplicaciones web modernas con buenas prácticas y arquitectura limpia.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["REST APIs", "Autenticación", "Arquitectura cliente-servidor", "Testing", "Deploy"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "MLOps & Deploy",
      description:
        "Pipelines de entrenamiento, versionado de modelos y despliegue en producción de forma fiable.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Docker", "CI/CD", "Monitorización", "Versionado de datos", "APIs de modelos"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "IA Generativa",
      description:
        "Integración de LLMs, chatbots y flujos de trabajo inteligentes con APIs de inteligencia artificial.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["LLMs", "Prompt Engineering", "Chatbots", "Integración de APIs", "Automatización"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Scikit-learn": "bg-orange-500",
      Regresión: "bg-blue-500",
      Clasificación: "bg-emerald-500",
      "Modelos supervisados": "bg-purple-500",
      "Feature Engineering": "bg-cyan-500",
      PyTorch: "bg-red-500",
      TensorFlow: "bg-amber-500",
      CNN: "bg-indigo-500",
      "RNN / LSTM": "bg-teal-500",
      "Transfer Learning": "bg-pink-500",
      Pandas: "bg-emerald-600",
      NumPy: "bg-sky-500",
      "Visualización de datos": "bg-fuchsia-500",
      "Análisis Exploratorio": "bg-slate-500",
      Estadística: "bg-yellow-600",
      "REST APIs": "bg-blue-600",
      Autenticación: "bg-red-600",
      "Arquitectura cliente-servidor": "bg-zinc-600",
      Testing: "bg-green-600",
      Deploy: "bg-indigo-600",
      Docker: "bg-sky-700",
      "CI/CD": "bg-lime-600",
      Monitorización: "bg-rose-600",
      "Versionado de datos": "bg-stone-600",
      "APIs de modelos": "bg-cyan-600",
      LLMs: "bg-purple-600",
      "Prompt Engineering": "bg-amber-600",
      Chatbots: "bg-teal-600",
      "Integración de APIs": "bg-blue-700",
      Automatización: "bg-emerald-700",
    }
    return colors[tech] || "bg-gray-500"
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Advanced Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Áreas de especialización que combinan inteligencia artificial, ciencia de datos y desarrollo de aplicaciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative pl-4 border-l border-cyan-500/30 hover:border-cyan-400/80 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 ${getTechColor(tech)} text-white text-[11px] md:text-xs rounded-full font-medium uppercase tracking-wide hover:shadow-lg transition-all duration-300`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
