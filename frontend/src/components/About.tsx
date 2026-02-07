export default function About() {
  const stats = [
    { label: "Projects Deployed", value: "4+" },
    { label: "Technologies", value: "10+" },
    { label: "GitHub Repos", value: "Active" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-semibold">Computer Science graduate</span> passionate about building 
              full-stack web applications that solve real problems. I specialize in modern web technologies 
              like React, Flask, and cloud deployment platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey includes developing production-ready applications ranging from 
              <span className="text-foreground font-semibold"> real-time chat platforms</span> to 
              <span className="text-foreground font-semibold"> AI-powered web applications</span>, 
              all deployed and accessible to users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking an <span className="text-foreground font-semibold">Associate Software Engineer</span> role 
              where I can leverage my hands-on development experience and contribute to meaningful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
