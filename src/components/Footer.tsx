import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex.morgan@email.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="container px-4 mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                Alex Morgan
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Passionate Developer & Cybersecurity Enthusiast dedicated to creating secure, 
                innovative digital solutions. Always learning, always building.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <p>alex.morgan@email.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-border/50 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Alex Morgan. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}