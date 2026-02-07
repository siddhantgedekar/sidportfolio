import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Song from "../assets/you're_dancing_with_nonexistant.mp3";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Siddhant Gedekar
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Full-Stack Web Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science graduate specializing in React, Flask, and modern deployment architectures. 
          Built and deployed 4 production applications including real-time messaging platforms and API-driven web apps.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a 
            href="https://github.com/siddhantgedekar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/siddhant-gedekar-395155210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="mailto:siddhantgedekar18@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            <Mail size={20} />
            Email
          </a>
          <a 
            href="/Siddhant_Gedekar_Resume.pdf" 
            download
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Download size={20} />
            Resume
          </a>
        </div>

        <div className="flex gap-4 justify-center text-sm text-muted-foreground">
          <span>📧 siddhantgedekar18@gmail.com</span>
          <span>📱 +91-8767508433</span>
        </div>
        <div className="song flex justify-center mt-6">
          <audio className="mt-6" autoPlay loop controls>
            <source src={Song} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  )
}
