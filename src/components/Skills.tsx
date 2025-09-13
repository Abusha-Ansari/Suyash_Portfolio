import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code, Shield, Globe, Cloud } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
}

const skillsData = {
  programming: [
    { name: 'Python', level: 90, category: 'programming' },
    { name: 'JavaScript', level: 85, category: 'programming' },
    { name: 'TypeScript', level: 80, category: 'programming' },
    { name: 'C/C++', level: 75, category: 'programming' },
    { name: 'Java', level: 70, category: 'programming' },
    { name: 'Go', level: 65, category: 'programming' },
  ],
  cybersecurity: [
    { name: 'Wireshark', level: 85, category: 'cybersecurity' },
    { name: 'Metasploit', level: 80, category: 'cybersecurity' },
    { name: 'Nmap', level: 90, category: 'cybersecurity' },
    { name: 'Burp Suite', level: 75, category: 'cybersecurity' },
    { name: 'Kali Linux', level: 85, category: 'cybersecurity' },
    { name: 'OWASP', level: 80, category: 'cybersecurity' },
  ],
  web: [
    { name: 'React', level: 90, category: 'web' },
    { name: 'Node.js', level: 85, category: 'web' },
    { name: 'Next.js', level: 80, category: 'web' },
    { name: 'Express.js', level: 85, category: 'web' },
    { name: 'MongoDB', level: 75, category: 'web' },
    { name: 'PostgreSQL', level: 80, category: 'web' },
  ],
  cloud: [
    { name: 'AWS', level: 80, category: 'cloud' },
    { name: 'Docker', level: 85, category: 'cloud' },
    { name: 'Kubernetes', level: 70, category: 'cloud' },
    { name: 'CI/CD', level: 75, category: 'cloud' },
    { name: 'Git', level: 90, category: 'cloud' },
    { name: 'Linux', level: 85, category: 'cloud' },
  ],
}

const categories = [
  { id: 'programming', name: 'Programming Languages', icon: Code, color: 'from-primary to-primary-hover' },
  { id: 'cybersecurity', name: 'Cybersecurity Tools', icon: Shield, color: 'from-secondary to-secondary-hover' },
  { id: 'web', name: 'Web Technologies', icon: Globe, color: 'from-accent-amber to-accent-red' },
  { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-purple-500 to-pink-500' },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})

  useEffect(() => {
    if (isInView) {
      // Animate skill bars with delay
      Object.values(skillsData).flat().forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: skill.level
          }))
        }, index * 100)
      })
    }
  }, [isInView])

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
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
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto"
            >
              A comprehensive toolkit spanning cybersecurity, web development, and cloud technologies
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => {
              const categorySkills = skillsData[category.id as keyof typeof skillsData]
              const IconComponent = category.icon

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.8 }}
                  className="card-gradient p-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        
                        <div className="skill-bar">
                          <motion.div
                            className={`skill-progress bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedSkills[skill.name] || 0}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Always learning and exploring new technologies in the ever-evolving landscape of cybersecurity and development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}