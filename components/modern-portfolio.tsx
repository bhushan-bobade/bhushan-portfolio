"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { inter } from "@/app/fonts"
import { AnimatedAvatar } from "./animated-avatar"

export function ModernPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "SQL",
    "NoSQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "REST APIs",
    "Prisma",
    "Firebase",
    
  ]

  const projects = [
    {
      title: "Finova",
      description: "Integrated platform for multi-account tracking, budgeting, and analytics",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Gemini AI"],
      github: "https://github.com/bhushan-bobade/finova",
      live: "https://finova-beryl.vercel.app/",
    },
    {
      title: "AI Trip Planner",
      description: "An AI-powered travel planning application that generates personalized day-by-day itineraries.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "OpenAI API"],
      github: "https://github.com/bhushan-bobade/Ai-Trip-Planner-App",
      live: "https://ai-trip-planner-app-theta.vercel.app/",
    },
    
    {
      title: "Document Tracking System",
      description: "A comprehensive Document Tracking System using the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Multer"],
      github: "https://github.com/bhushan-bobade", 
    }, 
  ]

  const experience = [
    {
      title: "Software Development Intern",
      company: "Nebula Technology",
      period: "June 2022 - December 2022",
      location: "Pune, Maharashtra",
      achievements: [
        "Led development and maintenance of web applications, achieving a 20% improvement in overall efficiency.",
        "Executed 100+ SQL queries for seamless data retrieval and manipulation.",
        "Worked on Java, SQL technologies, and the Firebase platform to drive innovation and achieve exceptional results.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-white text-4xl font-normal tracking-wide relative stylized-bb-logo flex items-center">
                <span className="inline-block transform -rotate-2">B</span>
                <span className="inline-block transform rotate-1 ml-1">B</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/10 px-3 py-2 rounded-lg font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <AnimatedAvatar />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white font-sans">Hi, I&apos;m </span>
            <span
              className={`${inter.className} text-4xl md:text-6xl bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block font-bold tracking-tight`}
            >
              Bhushan 
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 font-sans">
            <span className="text-white">just another </span>
            <span className="text-gray-400 font-semibold italic">Software Developer</span>
          </p>

          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            A recent graduate passionate about full-stack development and eager to make an impact in the tech industry.
          </p>

          <div className="flex justify-center items-center">
            <Button 
              className="relative animate-border-glow bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              asChild
            >
            <a 
              href="https://drive.google.com/file/d/1CAMo3xmd7oJ2vu3L9bD2-RsdMpc0Xn-t/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >              
              Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl font-sans">About Me</h2>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4 font-sans">Full Stack Developer</h3>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed font-sans text-lg">
                Hi! I&apos;m Bhushan Bobade, a passionate Full Stack Developer with a proven ability to craft innovative and
                efficient solutions in web development. As a recent graduate in Computer Science and Engineering from
                G.H. Raisoni College of Engineering and Management, Pune, I bring a blend of academic excellence and
                hands-on experience to every project.
              </p>
              <p className="text-white/80 leading-relaxed font-sans text-lg">
                My journey in tech began with a strong foundation in Computer Science and Engineering, and I&apos;ve since
                expanded my expertise through hands-on experience in internships and personal projects. I&apos;m particularly
                enthusiastic about technologies like React, Node.js, and Java, and I&apos;m always eager to learn and adapt
                to new tools and frameworks.
              </p>
            </div>
            <div className="flex justify-center space-x-8 mt-8">
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-white/80 text-base font-sans">Pune, India</span>
              </div> */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl font-sans">Work Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                    <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-12">
                    <p className="text-gray-400 text-sm mb-2 font-sans">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                      {exp.title} - {exp.company}
                    </h3>
                    <p className="text-gray-400 mb-4 font-sans">{exp.location}</p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed font-sans">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl font-sans">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group rounded-xl"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 font-sans">{project.title}</h3>
                  <p className="text-white/70 mb-4 font-sans">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-white/10 text-white/80 hover:bg-white/20 rounded-full px-3 py-1 text-sm font-medium border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 font-sans"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>

                    {project.live && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 font-sans"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </a>
                    </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl font-sans">Skills</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-4 py-2 text-lg font-medium border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer font-sans rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl md:text-5xl font-sans">Get in Touch</h2>
          </div>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-sans">
            Feel free to reach out through any of these platforms
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:bhushanbobade2023@gmail.com"
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-2 font-sans">Email</h3>
              <p className="text-white/60 text-sm font-sans">Send me a message</p>
            </a>

            <a
              href="https://www.linkedin.com/in/bhushan-bobade18/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-2 font-sans">LinkedIn</h3>
              <p className="text-white/60 text-sm font-sans">Connect with me</p>
            </a>

            <a
              href="https://github.com/bhushan-bobade"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <Github className="h-8 w-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-2 font-sans">GitHub</h3>
              <p className="text-white/60 text-sm font-sans">View my code</p>
            </a>

            <a
              href="https://x.com/bhushannbobade"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <svg
                className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <h3 className="text-white font-semibold text-lg mb-2 font-sans">Twitter</h3>
              <p className="text-white/60 text-sm font-sans">Follow me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 font-sans"> Made with 💗 by Bhushan Bobade</p>
        </div>
      </footer>
    </div>
  )
}
