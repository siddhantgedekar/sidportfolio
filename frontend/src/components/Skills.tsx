export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "Java"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Flask", "RESTful APIs", "MongoDB", "PostgreSQL", "Socket.IO"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git/GitHub", "VS Code", "Postman", "Render", "Netlify", "Gunicorn"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/50 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {["Full-Stack Development", "API Integration", "Database Design", "WebSockets", "Cloud Deployment", "Problem Solving", "Debugging"].map((competency, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
