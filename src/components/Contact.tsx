import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    
    setIsSubmitting(false)
    // Reset form
    ;(e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.morgan@email.com',
      href: 'mailto:alex.morgan@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-500',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:text-blue-400',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
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
              Get In Touch
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
              Ready to collaborate on your next project or discuss cybersecurity solutions? Let's connect!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Whether you're looking for a cybersecurity consultant, a full-stack developer, 
                  or just want to discuss the latest in tech security, I'm always excited to connect 
                  with fellow technology enthusiasts.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground ${color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="card-gradient p-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                    placeholder="Tell me about your project, security needs, or how we can work together..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}