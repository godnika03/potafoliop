"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { SiTiktok } from "react-icons/si"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID"
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"

    setIsSending(true)
    setStatus("idle")

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      setStatus("success")
      formRef.current?.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    } finally {
      setIsSending(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "leongil2708@gmail.com",
      href: "mailto:leongil2708@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+1 829 977 8029",
      href: "https://www.youtube.com/",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santo Domingo, Rep. Dom",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/godnika03", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/cesar-gil-237135352", label: "LinkedIn" },
    { icon: SiTiktok, href: "https://tiktok.com/@leongxl.xfv", label: "TikTok" },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Contact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Do you have a project in mind? I&apos;d love to hear your ideas and collaborate with you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">send me a message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">affair</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Subject of the message"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center space-x-2"
                  disabled={isSending}
                >
                  <Send size={20} />
                  <span>{isSending ? "sending..." : "send message"}</span>
                </motion.button>

                {status === "success" && (
                  <p className="text-sm text-green-400 text-center">
                    Your message has been sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact information</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow me</h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group"
                  >
                    <social.icon
                      size={24}
                      className="text-cyan-400 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Disponible para proyectos</span>
              </div>
              <p className="text-gray-300 mt-2">Actualmente acepto nuevos proyectos y colaboraciones</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
