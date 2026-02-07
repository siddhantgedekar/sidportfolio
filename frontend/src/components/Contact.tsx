import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently seeking opportunities as an Associate Software Engineer. 
          If you're looking for a motivated developer who loves building real solutions, let's connect!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a 
            href="mailto:siddhantgedekar18@gmail.com"
            className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <Mail className="mx-auto mb-3 text-primary" size={32} />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm text-muted-foreground break-all">siddhantgedekar18@gmail.com</p>
          </a>

          <a 
            href="tel:+918767508433"
            className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <Phone className="mx-auto mb-3 text-primary" size={32} />
            <p className="font-semibold mb-1">Phone</p>
            <p className="text-sm text-muted-foreground">+91-8767508433</p>
          </a>

          <a 
            href="https://github.com/siddhantgedekar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <Github className="mx-auto mb-3 text-primary" size={32} />
            <p className="font-semibold mb-1">GitHub</p>
            <p className="text-sm text-muted-foreground">@siddhantgedekar</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/siddhant-gedekar-395155210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <Linkedin className="mx-auto mb-3 text-primary" size={32} />
            <p className="font-semibold mb-1">LinkedIn</p>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </a>
        </div>

        <div className="p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to hire?</h3>
          <p className="text-muted-foreground mb-6">
            Download my resume or send me an email to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:siddhantgedekar18@gmail.com"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              <Send size={20} />
              Send Message
            </a>
            <a 
              href="/Siddhant_Gedekar_Resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
