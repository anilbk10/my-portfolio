import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Code2, Briefcase, Download, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Tech Minimalism
 * - Clean geometric layouts with strategic asymmetry
 * - Emphasis on whitespace and breathing room
 * - Deep slate blue (#1e3a5f) primary with vibrant cyan (#00d9ff) accents
 * - Smooth hover effects and scroll-triggered animations
 */

export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Hotel Booking Web App",
      description: "A full stack project using the MVC framework. Web application designed to streamline the process of listing and reviewing hotels. Users can explore various hotel listings, leave reviews, and interact with other users.",
      tech: ["Node.js", "Express.js", "MongoDB", "Passport.js"],
      link: "https://hotelhub-86n8.onrender.com/listings",
      github: "https://github.com/anilbk10",
      icon: Briefcase,
    },
    {
      title: "Nepal Forms Assistant",
      description: "A Chrome extension that automates the filling of Nepali government forms by utilizing stored user data. Leverages JavaScript, HTML/CSS, and Bootstrap for the frontend, with Flask backend supporting form detection and bilingual support.",
      tech: ["JavaScript", "Chrome API", "Flask", "Bootstrap"],
      link: "https://github.com/anilbk10/ease_form",
      github: "https://github.com/anilbk10/ease_form",
      icon: Code2,
    },
        {
      title: "AWS Solutions Architect Practice Exam",
      description: "A React-based quiz application designed to help users practice for the AWS Certified Solutions Architect – Associate exam. Features AWS Solutions Architect–style practice questions with a clean, earthy theme for a comfortable learning experience. Perfect for self-study and exam revision.",
      tech: ["React", "Vite", "JavaScript"],
      link: "https://github.com/anilbk10/Solutions-Architect-Practice-Exam",
      github: "https://github.com/anilbk10/Solutions-Architect-Practice-Exam",
      icon: Award,
    },
    {
      title: "IMS System",
      description: "Inventory Management System built with modern technologies. A comprehensive solution for managing inventory operations efficiently with a user-friendly interface.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
      link: "https://github.com/anilbk10",
      github: "https://github.com/anilbk10",
      icon: Briefcase,
    },

  ];

  const otherProjects = [
    { name: "BST visualizer", icon: "🌳" },
    { name: "Path Finder", icon: "🗺️" },
    { name: "Music Player", icon: "🎵" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold font-poppins text-primary">Anil BK</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="text-sm font-medium hover:text-accent transition-colors">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:text-accent transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/40 z-1" />
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-primary leading-tight">
                Anil BK
              </h1>
              <p className="text-2xl md:text-3xl font-poppins font-semibold text-accent mt-2">
                Third Year Computer Engineering Student
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
I focus on designing and developing efficient, scalable, and user-centric software solutions using modern technologies, with an emphasis on functionality, performance, and clean user experience.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                View My Projects
              </Button>
              <a href="https://github.com/anilbk10" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="relative w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border-2 border-accent/30 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="w-24 h-24 text-accent mx-auto mb-4" />
                <p className="text-primary font-semibold">Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold font-poppins text-primary mb-8">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-primary mb-3">Background</h3>
                  <p className="text-foreground/80 leading-relaxed">
                  I’m a Third Year Computer Engineering student at Pulchowk Campus, IOE, passionate about developing efficient and user-centric software solutions. My interests include modern web development, machine learning, and cloud computing, with a focus on building scalable, reliable, and visually refined applications.                  
                  </p>
                </div>

                {/* <div>
                  <h3 className="text-xl font-semibold font-poppins text-primary mb-3">My Approach</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    I focus on creating simple, efficient, and user-friendly solutions. I use modern tools like the MERN stack to build applications that solve real problems while maintaining clean, maintainable code.
                  </p>
                </div> */}
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold font-poppins text-primary mb-4">Education Timeline</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold text-foreground">Bachelor's in Computer Engineering</p>
                      <p className="text-accent text-sm">Pulchowk Campus, Lalitpur • 2023 - Present</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">+2 (Computer Science)</p>
                      <p className="text-muted-foreground text-sm">Siddhartha Secondary School, Butwal • 2020 - 2022</p>
                    </div>
                    <div className="border-l-4 border-primary/50 pl-4">
                      <p className="font-semibold text-foreground">Schooling</p>
                      <p className="text-muted-foreground text-sm">Sarada Secondary School, Arghakhanchi • 2007 - 2020</p>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold font-poppins text-primary mb-4">Contact Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <a href="mailto:abk33916@gmail.com" className="text-foreground hover:text-accent transition-colors">abk33916@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent">📱</span>
                      <span className="text-foreground">9867525552</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold font-poppins text-primary mb-12">Education Details</h2>
          
          <Card className="border-2 border-primary/20 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold font-poppins text-primary">B.E in Computer Engineering</h3>
                <p className="text-accent font-semibold mt-1">Pulchowk Campus, Lalitpur, IOE</p>
                <p className="text-muted-foreground mt-2">2023 - Currently Pursuing</p>
                
                <div className="mt-6">
                  <p className="font-semibold text-primary mb-3">Focus Areas</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-foreground/80">Web Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-foreground/80">Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-foreground/80">Cloud Computing</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-foreground/80">Problem Solving</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold font-poppins text-primary mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">Technology Stack</h3>
              <div className="space-y-6">
                     <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Programming Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">C++</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Java</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">C</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">MERN Stack</span>

                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">MongoDB</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Express.js</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Node.js</span>
                    

                  </div>
                </div>

           
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Frontend</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">HTML/CSS</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Bootstrap</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Tailwind CSS</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">Backend & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Nest.js</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">Node.js</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Express.js</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">MongoDB</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Flask</span>
                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">Attributes & Soft Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
                  <span className="text-accent text-2xl">→</span>
                  <div>
                    <p className="font-semibold text-foreground">Problem-Solving Skills</p>
                    <p className="text-sm text-muted-foreground mt-1">Strong ability to analyze and solve complex technical challenges</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
                  <span className="text-accent text-2xl">→</span>
                  <div>
                    <p className="font-semibold text-foreground">Team-Oriented & Collaborative</p>
                    <p className="text-sm text-muted-foreground mt-1">Effective collaborator who works well in team environments</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
                  <span className="text-accent text-2xl">→</span>
                  <div>
                    <p className="font-semibold text-foreground">Good Communication Skills</p>
                    <p className="text-sm text-muted-foreground mt-1">Clear communicator who can explain technical concepts effectively</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border hover:shadow-md transition-shadow">
                  <span className="text-accent text-2xl">→</span>
                  <div>
                    <p className="font-semibold text-foreground">Quick Learner</p>
                    <p className="text-sm text-muted-foreground mt-1">Passionate about learning new technologies and frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold font-poppins text-primary mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="border-2 border-primary/20 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
                    <IconComponent className="w-16 h-16 text-accent/50 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold font-poppins text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-accent mb-2">TECH STACK</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-secondary text-primary rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5">
                          View <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                          GitHub <Github className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold font-poppins text-primary mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((proj, index) => (
                <Card key={index} className="border-2 border-primary/20 p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="text-5xl mb-4">{proj.icon}</div>
                  <h4 className="font-semibold text-primary">{proj.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2">Check my GitHub for more details</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold font-poppins text-primary mb-12">Certifications & Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* AWS Certified Solutions Architect */}
            <Card 
              onClick={() => setSelectedCertificate('aws')}
              className="border-2 border-accent p-6 bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col h-full gap-4">
                <img src="/images/aws.jpeg" alt="AWS Certified Solutions Architect Certificate" className="w-full h-40 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Award className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-poppins text-primary">AWS Certified Solutions Architect – Associate</h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">Amazon Web Services (AWS)</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3">Issued: July 19, 2025</p>
                  <p className="text-foreground text-sm leading-relaxed">This industry-standard certification validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on the AWS platform. It demonstrates a deep understanding of cloud security, networking, and storage best practices.</p>
                </div>
              </div>
            </Card>
                       {/* Delta Full Stack Web Development */}
            <Card 
              onClick={() => setSelectedCertificate('delta')}
              className="border-2 border-primary/20 p-6 bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col h-full gap-4">
                <img src="/images/delta.png" alt="Delta Full Stack Web Development Certificate" className="w-full h-40 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-poppins text-primary">Delta (Full Stack Web Development)</h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">Apna College</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3">Comprehensive Program</p>
                  <p className="text-foreground text-sm leading-relaxed">A comprehensive Full Stack Web Development program covering both front-end and back-end technologies. The curriculum focused on building end-to-end web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) and modern web standards like HTML5 and CSS3.</p>
                </div>
              </div>
            </Card>
         

            {/* Samsung Coding & Programming */}
            <Card 
              onClick={() => setSelectedCertificate('samsung')}
              className="border-2 border-accent p-6 bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col h-full gap-4">
                <img src="/images/sic.jpeg" alt="Samsung Innovation Campus Certificate" className="w-full h-40 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Code2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-poppins text-primary">Coding & Programming</h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">Samsung Innovation Campus</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3">Issued: June 26, 2025</p>
                  <p className="text-foreground text-sm leading-relaxed">Completed an intensive six-month technical program focused on core coding and programming disciplines. This collaboration between Samsung and the Institute of Engineering (Pulchowk Campus) emphasizes practical problem-solving and software development skills.</p>
                </div>
              </div>
            </Card>

   

               {/* Supervised Machine Learning */}
            <Card 
              onClick={() => setSelectedCertificate('ml')}
              className="border-2 border-primary/20 p-6 bg-white hover:shadow-lg transition-shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col h-full gap-4">
                <img src="/images/supervised.png" alt="Supervised Machine Learning Certificate" className="w-full h-40 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-poppins text-primary">Supervised Machine Learning: Regression and Classification</h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">DeepLearning.AI & Stanford University (via Coursera)</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs mb-3">Issued: May 22, 2025</p>
                  <p className="text-foreground text-sm leading-relaxed">Authorized by Stanford University and led by Andrew Ng, this course covers the foundational concepts of Machine Learning. Gained hands-on experience building machine learning models using Python, specifically focusing on supervised learning techniques like linear regression and logistic classification.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold font-poppins text-primary mb-8">Get In Touch</h2>
          
          <p className="text-lg text-foreground/80 mb-12">
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out through any of these channels!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:abk33916@gmail.com"
              className="group p-6 bg-white border-2 border-primary/20 rounded-lg hover:border-accent hover:shadow-lg transition-all"
            >
              <Mail className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-primary mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">abk33916@gmail.com</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/anilbk1"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white border-2 border-primary/20 rounded-lg hover:border-accent hover:shadow-lg transition-all"
            >
              <Linkedin className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-primary mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">anilbk1</p>
            </a>

            <a 
              href="https://github.com/anilbk10"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white border-2 border-primary/20 rounded-lg hover:border-accent hover:shadow-lg transition-all"
            >
              <Github className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-primary mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">anilbk10</p>
            </a>
          </div>

          <div className="bg-secondary/50 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold font-poppins text-primary mb-4">Quick Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">9867525552</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Pulchowk, Lalitpur, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container text-center">
          <p className="mb-2">© 2026 Anil BK. All rights reserved.</p>
          <p className="text-sm opacity-80">Designed with care | Built with React & TailwindCSS</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/anilbk10" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anilbk1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abk33916@gmail.com" className="hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg z-10 bg-white"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            {selectedCertificate === 'aws' && (
              <div className="p-6">
                <img src="/images/aws.jpeg" alt="AWS Certificate" className="w-full h-auto rounded-lg mb-6" />
                <h2 className="text-3xl font-bold font-poppins text-primary mb-3">AWS Certified Solutions Architect – Associate</h2>
                <p className="text-lg text-accent font-semibold mb-4">Amazon Web Services (AWS)</p>
                <p className="text-muted-foreground mb-4">Issued: July 19, 2025</p>
                <p className="text-foreground text-lg leading-relaxed">
                  This industry-standard certification validates technical expertise in designing and deploying scalable, highly available, and fault-tolerant systems on the AWS platform. It demonstrates a deep understanding of cloud security, networking, and storage best practices.
                </p>
              </div>
            )}

            {selectedCertificate === 'ml' && (
              <div className="p-6">
                <img src="/images/supervised.png" alt="Machine Learning Certificate" className="w-full h-auto rounded-lg mb-6" />
                <h2 className="text-3xl font-bold font-poppins text-primary mb-3">Supervised Machine Learning: Regression and Classification</h2>
                <p className="text-lg text-accent font-semibold mb-4">DeepLearning.AI & Stanford University (via Coursera)</p>
                <p className="text-muted-foreground mb-4">Issued: May 22, 2025</p>
                <p className="text-foreground text-lg leading-relaxed">
                  Authorized by Stanford University and led by Andrew Ng, this course covers the foundational concepts of Machine Learning. Gained hands-on experience building machine learning models using Python, specifically focusing on supervised learning techniques like linear regression and logistic classification.
                </p>
              </div>
            )}

            {selectedCertificate === 'samsung' && (
              <div className="p-6">
                <img src="/images/sic.jpeg" alt="Samsung Certificate" className="w-full h-auto rounded-lg mb-6" />
                <h2 className="text-3xl font-bold font-poppins text-primary mb-3">Coding & Programming</h2>
                <p className="text-lg text-accent font-semibold mb-4">Samsung Innovation Campus</p>
                <p className="text-muted-foreground mb-4">Issued: June 26, 2025</p>
                <p className="text-foreground text-lg leading-relaxed">
                  Completed an intensive six-month technical program focused on core coding and programming disciplines. This collaboration between Samsung and the Institute of Engineering (Pulchowk Campus) emphasizes practical problem-solving and software development skills.
                </p>
              </div>
            )}

            {selectedCertificate === 'delta' && (
              <div className="p-6">
                <img src="/images/delta.png" alt="Delta Certificate" className="w-full h-auto rounded-lg mb-6" />
                <h2 className="text-3xl font-bold font-poppins text-primary mb-3">Delta (Full Stack Web Development)</h2>
                <p className="text-lg text-accent font-semibold mb-4">Apna College</p>
                <p className="text-foreground text-lg leading-relaxed">
                  A comprehensive Full Stack Web Development program covering both front-end and back-end technologies. The curriculum focused on building end-to-end web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) and modern web standards like HTML5 and CSS3.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
