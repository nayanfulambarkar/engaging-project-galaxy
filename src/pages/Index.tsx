import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Calendar, Star, ArrowDown } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "Traffic Lights Automation System",
    techStack: ["Python", "OpenCV", "YOLO", "ESP32", "Raspberry Pi"],
    description: "AI-based traffic control system that reduced congestion by 25%, with an 80% model accuracy for vehicle detection and traffic flow optimization.",
    features: [
      "Real-time vehicle count detection", 
      "Dynamic signal timing adjustment based on traffic density", 
      "Integration with embedded systems for real-world deployment", 
      "Comprehensive data analytics dashboard"
    ],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    githubLink: "https://github.com/nayanfulambarkar/traffic-automation",
    details: "Developed for Smart India Hackathon 2024, this project leverages computer vision and machine learning to create an intelligent traffic management system. The solution significantly reduces waiting times at intersections and improves overall traffic flow efficiency."
  },
  {
    id: "project2",
    title: "MentorConnect Platform",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Google Calendar API", "Jitsi Meet", "Firebase"],
    description: "A comprehensive mentorship platform connecting students with industry professionals for guidance, featuring secure authentication, real-time communication, and automated scheduling.",
    features: [
      "Secure user authentication and role-based access", 
      "Real-time chat and video conferencing integration", 
      "Automated calendar booking and reminder system", 
      "Personalized mentor matching algorithm"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoLink: "https://mentor-connect.example.com",
    githubLink: "https://github.com/nayanfulambarkar/mentor-connect"
  },
  {
    id: "project3",
    title: "E-Commerce Dashboard",
    techStack: ["React", "Tailwind CSS", "Chart.js", "Firebase", "Redux"],
    description: "A responsive admin dashboard for e-commerce platforms with comprehensive analytics, inventory management, and order processing functionality.",
    features: [
      "Interactive sales and revenue analytics", 
      "Inventory tracking and management", 
      "Order processing workflow", 
      "Customer data management"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demoLink: "https://ecommerce-dashboard.example.com"
  }
];

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML/CSS", level: 80, color: "bg-green-500" },
      { name: "JavaScript", level: 70, color: "bg-yellow-500" },
      { name: "React", level: 60, color: "bg-orange-500" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "MySQL", level: 60, color: "bg-yellow-500" },
      { name: "JDBC, XAMPP", level: 50, color: "bg-orange-500" }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 75, color: "bg-green-500" },
      { name: "JavaScript", level: 70, color: "bg-yellow-500" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "Supervised/Unsupervised Learning", level: 50, color: "bg-orange-500" },
      { name: "Reinforcement Learning", level: 40, color: "bg-red-500" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code, Eclipse, NetBeans", level: 75, color: "bg-green-500" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Team Leadership, Communication, Time Management", level: 80, color: "bg-green-500" }
    ]
  }
];

const certifications = [
  {
    title: "Smart India Hackathon 2024 Participation",
    organization: "Government of India",
    date: "2024",
    description: "Developed an AI-powered traffic management prototype that won recognition for innovation and practical application."
  },
  {
    title: "Google Cloud Certification",
    organization: "Google",
    date: "2023",
    description: "Completed comprehensive training in cloud computing fundamentals and Google Cloud Platform services."
  }
];

const experiences = [
  {
    title: "Frontend Web Development Intern",
    company: "Skill Savvy Interns",
    duration: "May 2023 - August 2023",
    description: "Developed responsive web interfaces for client projects, focusing on UI/UX improvements. Delivered 3 solo projects, enhancing frontend performance and user experience."
  },
  {
    title: "MERN Stack Intern",
    company: "UptoSkills",
    duration: "March 2025 - Present",
    description: "Currently working on full-stack web development projects using MongoDB, Express, React, and Node.js. Developing scalable and efficient web applications with modern development practices."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-secondary font-medium">Frontend Developer & AI Enthusiast</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-secondary">Nayan Fulambarkar</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Creating responsive and user-friendly web applications with a passion for AI integration.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
                >
                  View Projects
                </a>
              </div>

              <div className="pt-4">
                <SocialLinks />
              </div>
            </div>

            <div className="relative animate-slide-in-right hidden md:block">
              <div className="aspect-square rounded-2xl bg-muted/50 border shadow-xl overflow-hidden"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-secondary transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse hidden md:block">
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm mb-1">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate frontend developer with a strong foundation in React, JavaScript, HTML, and CSS. My journey in web development has equipped me with the skills to create responsive, user-friendly interfaces that deliver exceptional user experiences.
              </p>
              
              <p>
                In addition to my frontend expertise, I'm deeply interested in artificial intelligence and machine learning. I have knowledge in Supervised/Unsupervised Learning and Reinforcement Learning, which allows me to bring innovative AI solutions to web applications.
              </p>
              
              <p>
                My approach combines technical proficiency with creative problem-solving, ensuring that the solutions I build are not only functionally robust but also aesthetically pleasing and intuitive to use.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="skill-card">
                <h3 className="text-lg font-semibold mb-3">Education</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-sm text-muted-foreground">Walchand Institute of Technology, Solapur, 2022-2026</p>
                  </div>
                </div>
              </div>
              
              <div className="skill-card">
                <h3 className="text-lg font-semibold mb-3">Languages</h3>
                <div className="space-y-1 text-sm">
                  <p>English (Professional)</p>
                  <p>Hindi (Native)</p>
                  <p>Marathi (Native)</p>
                </div>
              </div>
              
              <div className="skill-card">
                <h3 className="text-lg font-semibold mb-3">Interests</h3>
                <div className="space-y-1 text-sm">
                  <p>Web Development</p>
                  <p>Artificial Intelligence</p>
                  <p>Open Source Contribution</p>
                  <p>UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">Experience</h2>
          
          <div className="space-y-8 max-w-3xl">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-border">
                  <div className="absolute -left-1.5 -top-1.5 h-4 w-4 rounded-full border-2 border-secondary bg-background"></div>
                </div>
                
                <div className="bg-card p-5 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center mt-1 mb-3 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-1" /> {exp.company}
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" /> {exp.duration}
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="space-y-6">
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <ProgressBar
                      key={index}
                      label={skill.name}
                      value={skill.level}
                      colorClass={skill.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">Certifications & Accomplishments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.organization} • {cert.date}
                    </p>
                    <p className="text-sm">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg">
                I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Connect With Me</h3>
                <SocialLinks vertical={true} />
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Nayan Fulambarkar. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <SocialLinks iconSize={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
