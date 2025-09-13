import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "./TypingEffect";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-visible hero-bg pt-8 md:pt-16 lg:pt-24 pb-20 lg:pb-32"
    >
      <ParticleBackground />

      <div className="container px-4 relative z-10 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Hi there! 👋 I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
    text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 lg:mb-8
    leading-[1.4] md:leading-[1.5] lg:leading-[1.7]
    text-black dark:bg-gradient-to-r dark:from-primary dark:to-secondary dark:bg-clip-text dark:text-transparent
  "
          >
            Suyash Gargote
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 h-16 flex items-center justify-center"
          >
            <TypingEffect
              text="Passionate Developer & Cybersecurity Enthusiast"
              speed={100}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting secure digital experiences through innovative development
            and robust cybersecurity practices. Let's build something amazing
            together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-hero group"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-outline group"
            >
              Let's Connect
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/SuyashGargote",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/suyash-gargote-a1585b251",
                label: "LinkedIn",
              },
              { icon: Mail, href: "https://suyashgargote26@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-background-secondary/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 lg:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
