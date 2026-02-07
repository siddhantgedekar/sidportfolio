import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "BlueStock",
      period: "July 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Developed stock-market website with user authentication, IPO listing features, and secure data storage",
        "Designed RESTful APIs for data handling and built responsive React.js components with state management"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      role: "Customer Service Associate",
      company: "Amazon",
      period: "July 2024 - May 2025",
      type: "Full-time",
      description: [
        "Resolved 50+ customer issues daily with 90%+ satisfaction score, developing problem-solving skills in high-pressure environment",
        "Diagnosed complex user scenarios and documented recurring system issues for escalation to technical teams"
      ],
      tech: ["Problem Solving", "Communication", "Documentation"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional journey building real-world solutions
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/50 border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Briefcase size={20} />
            Education
          </h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-lg">B.E. Computer Engineering</p>
              <p className="text-muted-foreground">Sinhgad Institute of Technology and Science</p>
            </div>
            <div className="text-muted-foreground mt-2 md:mt-0">
              <p>May 2023</p>
              <p className="font-semibold">CGPA: 7.63/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
