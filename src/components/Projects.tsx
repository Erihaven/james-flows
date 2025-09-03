import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Zap, Database, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Lead Qualification System",
      description: "Built comprehensive AI bot using n8n + OpenAI + GoHighLevel that automatically scores inbound leads, syncs to CRM pipeline, and triggers Slack alerts for sales team.",
      technologies: ["n8n", "OpenAI API", "GoHighLevel", "Slack API"],
      outcomes: [
        "90% reduction in manual lead scoring time",
        "40% increase in qualified lead conversion",
        "Real-time sales team notifications"
      ],
      icon: <Bot className="h-6 w-6" />,
      category: "AI Automation",
      image: "https://via.placeholder.com/400x250/1e293b/60a5fa?text=AI+Lead+System"
    },
    {
      title: "Multi-CRM Sync Hub",
      description: "Real-time data synchronization between GoHighLevel, HubSpot, and Google Sheets through n8n, ensuring zero duplicate or stale data.",
      technologies: ["n8n", "HubSpot API", "GoHighLevel", "Google Sheets"],
      outcomes: [
        "100% data consistency",
        "Eliminated manual data entry",
        "Real-time bidirectional sync"
      ],
      icon: <Database className="h-6 w-6" />,
      category: "Data Integration",
      image: "https://via.placeholder.com/400x250/1e293b/22d3ee?text=CRM+Sync+Hub"
    },
    {
      title: "Smart Email Campaign",
      description: "AI-powered email automation with dynamic personalization using lead scraping, enrichment, and personalized outreach workflows.",
      technologies: ["n8n", "OpenAI API", "Email APIs", "Lead Enrichment"],
      outcomes: [
        "300% increase in response rates",
        "Automated lead research",
        "Dynamic personalization"
      ],
      icon: <Zap className="h-6 w-6" />,
      category: "Marketing Automation",
      image: "https://via.placeholder.com/400x250/1e293b/f59e0b?text=Email+Campaign"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-medium tracking-wider mb-4">MY WORK</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            RECENT PROJECT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world automation solutions that deliver measurable business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* View Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors group-hover:scale-110">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description.slice(0, 100)}...
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>

                {/* Key Outcome */}
                <div className="text-xs text-primary font-medium">
                  {project.outcomes[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;