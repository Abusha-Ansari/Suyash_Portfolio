import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Shield, ShoppingCart, CheckSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Import project images
import cybersecImage from '@/assets/project-cybersec.jpg'
import ecommerceImage from '@/assets/project-ecommerce.jpg'
import taskmanagerImage from '@/assets/project-taskmanager.jpg'

const projects = [
  {
    id: 1,
    title: 'CyberGuard Pro',
    description: 'A comprehensive cybersecurity monitoring dashboard that provides real-time threat detection, vulnerability assessment, and network analysis. Built with advanced security protocols and AI-powered threat intelligence.',
    image: cybersecImage,
    icon: Shield,
    tech: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    category: 'Cybersecurity',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'SecureCommerce',
    description: 'A secure e-commerce platform with advanced encryption, fraud detection, and secure payment processing. Implements OWASP security standards and includes comprehensive security testing.',
    image: ecommerceImage,
    icon: ShoppingCart,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'SSL/TLS'],
    category: 'Web Development',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow Manager',
    description: 'A collaborative project management application with real-time updates, team communication, and advanced project analytics. Features role-based access control and data encryption.',
    image: taskmanagerImage,
    icon: CheckSquare,
    tech: ['TypeScript', 'Next.js', 'Prisma', 'WebSocket', 'Redis', 'Docker'],
    category: 'Full-Stack',
    github: '#',
    demo: '#',
    featured: true,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-background-secondary" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Featured Projects
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
              Showcasing secure, scalable solutions that combine cutting-edge development with robust cybersecurity practices
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Project Image */}
                  <motion.div
                    className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                      <div className="bg-background rounded-xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.category} Project`}
                          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                          <div className="flex space-x-4">
                            <Button size="sm" className="btn-hero">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                            <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-amber to-accent-red text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    )}
                  </motion.div>

                  {/* Project Content */}
                  <motion.div
                    className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  >
                    {/* Category & Icon */}
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-background/50 backdrop-blur-sm border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <Button asChild className="btn-hero">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="btn-outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="btn-outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}