import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Communication Platform",
      description: "Engineered full-stack chat application with bi-directional messaging via WebSocket implementation. Designed PostgreSQL database schema for user authentication and message persistence.",
      tech: ["React.js", "Flask", "PostgreSQL", "Socket.IO", "Render"],
      highlights: [
        "WebSocket implementation for real-time messaging",
        "PostgreSQL database design",
        "Deployed on Render with concurrent user support"
      ],
      github: "https://github.com/siddhantgedekar/react-flask-chat-app.git",
      live: "https://worldchat-front.onrender.com/"
    },
    {
      title: "AI-Powered Conversational Web Application",
      description: "Built responsive web application with Google's Gemini LLM for intelligent conversational responses. Deployed backend on Render (Gunicorn) and frontend on Netlify with environment variable security.",
      tech: ["Python (Flask)", "JavaScript", "Google Gemini API", "Render", "Netlify"],
      highlights: [
        "Google Gemini LLM integration",
        "Session management for context",
        "Markdown rendering for code blocks"
      ],
      github: "https://github.com/siddhantgedekar/ai-portfolio.git",
      live: "https://wondersofsid.netlify.app/"
    },
    {
      title: "IPO Tracking Web Application",
      description: "Developed full-stack MERN application with CRUD functionality, user authentication, and REST API integration for real-time IPO data.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      highlights: [
        "Complete CRUD operations",
        "User authentication system",
        "Real-time IPO data via REST API"
      ],
      github: "https://github.com/siddhantgedekar/capes.github.io.git",
      live: "https://your-ipo-app.netlify.app"
    },
    {
      title: "Driver Drowsiness Detection System",
      description: "Designed machine learning model achieving 85% accuracy in real-time driver drowsiness detection using eye-tracking algorithms.",
      tech: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
      highlights: [
        "85% detection accuracy",
        "Eye-tracking algorithms",
        "Location-based alert system"
      ],
      github: "https://github.com/siddhantgedekar/drowsiness-detection",
      live: null
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production-ready applications built from concept to deployment
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
