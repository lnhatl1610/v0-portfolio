"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Zap, Cpu, Brain } from "lucide-react"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const projects = [
    {
      title: "Movie Website",
      description: "A sleek and responsive movie browsing platform built with React, featuring dynamic search, filtering, and an intuitive user interface.",
      image: "/movie_web.png",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/lnhatl1610/movie_web",
    },
    {
      title: "Slider 3D",
      description: "Interactive 3D image slider built with HTML and CSS, offering smooth transitions and immersive visual effects.",
      image: "/slider_3d.png",
      tags: ["HTML", "CSS"],
      link: "https://slider-3d-gilt.vercel.app/",
    },
    {
      title: "Mobile App UI",
      description: "Clean and intuitive mobile interface design with focus on user experience and accessibility.",
      image: "/placeholder-ryh8g.png",
      tags: ["UI/UX", "Mobile Design", "Prototyping", "User Research"],
      link: "#",
    },
    {
      title: "Brand Identity",
      description: "Complete visual identity system including logo, typography, and brand guidelines.",
      image: "/brand-identity-logo-design-modern-minimal.jpg",
      tags: ["Branding", "Logo Design", "Typography", "Visual Identity"],
      link: "#",
    },
    {
      title: "Web Application",
      description: "Full-stack dashboard application with real-time data visualization and analytics.",
      image: "/dashboard-web-application-analytics-charts.jpg",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Chart.js"],
      link: "#",
    },
    {
      title: "Landing Page",
      description: "High-converting landing page with optimized performance and engaging animations.",
      image: "/landing-page-website-modern-design.jpg",
      tags: ["HTML/CSS", "JavaScript", "Performance", "SEO"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 transition-all-smooth">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient font-heading">MinhNhat</div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Home", ref: heroRef },
                { label: "About", ref: aboutRef },
                { label: "Work", ref: portfolioRef },
                { label: "Contact", ref: contactRef },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-muted-foreground hover:text-foreground transition-all-smooth hover:scale-105 font-body"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted parallax-slow"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full animate-parallax-float blur-sm" />
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-accent/15 rounded-full animate-parallax-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-secondary/10 rounded-full animate-parallax-float blur-sm"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-60 left-1/2 w-12 h-12 bg-accent/20 rounded-full animate-parallax-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-balance mb-8 font-heading leading-tight">

              <span className="text-primary block animate-text-glow">Embedded & IoT</span>
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 font-body leading-relaxed max-w-3xl mx-auto">
              Crafting beautiful digital experiences with modern design and cutting-edge technology that captivate and
              inspire
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection(portfolioRef)}
                className="group transition-all-smooth hover:scale-105 hover-lift font-body text-lg px-8 py-4"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform-smooth" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection(contactRef)}
                className="transition-all-smooth hover:scale-105 hover-lift font-body text-lg px-8 py-4"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-muted/20" data-animate id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.about ? "animate-fade-in-left" : "opacity-0"}`}>
              <h2 className="text-5xl font-bold mb-8 text-balance font-heading">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                I'm a fourth-year student at the Vietnam-Korea University of Information and Communication Technology, specializing in IoT and Embedded Systems. I am passionate about exploring connected devices, microcontrollers, and hardware-software integration to create innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
                In my free time, I enjoy experimenting with embedded projects, learning new technologies, contributing to open-source initiatives, and staying up-to-date with the latest trends in IoT and smart systems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg hover-lift">
                  <Code className="h-10 w-10 text-primary transition-transform hover:scale-110" />
                  <div>
                    <h3 className="font-semibold font-heading">Web Development</h3>
                    <p className="text-sm text-muted-foreground font-body">React, TypeScript, Tailwind CSS</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg hover-lift">
                  <Cpu className="h-10 w-10 text-primary transition-transform hover:scale-110" />
                  <div>
                    <h3 className="font-semibold font-heading">IoT & Embedded Systems</h3>
                    <p className="text-sm text-muted-foreground font-body">ESP32, Sensors</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg hover-lift">
                  <Brain className="h-10 w-10 text-primary transition-transform hover:scale-110" />
                  <div>
                    <h3 className="font-semibold font-heading">AI & Machine Learning</h3>
                    <p className="text-sm text-muted-foreground font-body">Python, TensorFlow, PyTorch</p>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Esp32"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 font-body hover-lift">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>

              <Button
                variant="outline"
                className="group transition-all-smooth hover:scale-105 hover-lift bg-transparent font-body"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible.about ? "animate-fade-in-right" : "opacity-0"}`}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl overflow-hidden hover-lift">
                <img
                  src="/professional-portrait-photo-modern-studio-lighting.jpg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover transition-all-smooth hover:scale-110"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full animate-parallax-float blur-sm" />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full animate-parallax-float"
                style={{ animationDelay: "3s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-24" data-animate id="portfolio">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible.portfolio ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-5xl font-bold mb-6 text-balance font-heading">Featured Work</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              A selection of projects that showcase my design and development skills across various industries and
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-lift ${isVisible.portfolio ? "animate-scale-in" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="gap-2 font-body hover-lift">
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </Button>
                    </a>

                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 font-body leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-body hover-lift">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 bg-muted/20" data-animate id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-5xl font-bold mb-6 text-balance font-heading">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-16 font-body max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'd love to hear about your project and explore how we can create
              something amazing together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "nhatphanminh1610@gmail.com",
                  link: "mailto:nhatphanminh1610@gmail.com",
                  delay: "0s",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "@yourprofile",
                  link: "https://www.linkedin.com/in/yourprofile",
                  delay: "0.2s",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "@lnhatl1610",
                  link: "https://github.com/lnhatl1610",
                  delay: "0.4s",
                },
              ]
                .map((contact, index) => (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    <Card
                      className={`p-8 transition-all duration-700 hover:scale-105 hover-lift ${isVisible.contact ? "animate-scale-in" : "opacity-0"
                        }`}
                      style={{ animationDelay: contact.delay }}
                    >
                      <contact.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2 font-heading text-lg">{contact.title}</h3>
                      <p className="text-muted-foreground font-body">{contact.value}</p>
                    </Card>
                  </a>

                ))}
            </div>

            <Button
              size="lg"
              className="group transition-all-smooth hover:scale-105 hover-lift font-body text-lg px-10 py-4"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform-smooth" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-body text-lg">
            © 2025 Creative Portfolio. Designed & developed with passion.
          </p>
        </div>
      </footer>
    </div>
  )
}
