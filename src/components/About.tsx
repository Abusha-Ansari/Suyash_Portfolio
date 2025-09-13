import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Shield, Code, Target } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-background-secondary" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="bg-background rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Alex Morgan - Developer & Cybersecurity Student"
                    className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20"
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-secondary/20"
              >
                <Code className="w-8 h-8 text-secondary" />
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-heading font-semibold text-foreground mb-6">
                Passionate About Digital Security & Innovation
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science student with a specialized focus on cybersecurity and full-stack development. 
                My journey in technology began with a fascination for understanding how digital systems work—and more importantly, 
                how to protect them.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my degree while actively engaging in cybersecurity research, penetration testing, and building 
                secure web applications. I believe that the future of technology depends on creating robust, secure, and 
                user-friendly digital experiences.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: GraduationCap, title: "Computer Science Student", desc: "Specialized in Cybersecurity" },
                  { icon: Shield, title: "Security Focus", desc: "Penetration Testing & Defense" },
                  { icon: Code, title: "Full-Stack Developer", desc: "Modern Web Technologies" },
                  { icon: Target, title: "Goal-Oriented", desc: "Continuous Learning & Growth" },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}