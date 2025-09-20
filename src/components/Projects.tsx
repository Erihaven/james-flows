import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Bot, Zap, Database, TrendingUp } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = [
    {
      title: "RAG Supabase AI Agent",
      description: "Built comprehensive RAG (Retrieval-Augmented Generation) AI agent workflow using Supabase vector search, OpenAI embeddings, and automated chat processing pipeline.",
      technologies: ["Supabase", "OpenAI API", "Vector Search", "RAG Pipeline"],
      outcomes: [
        "90% reduction in manual data processing",
        "Intelligent document retrieval system",
        "Real-time chat agent responses"
      ],
      icon: <Bot className="h-6 w-6" />,
      category: "AI Automation",
      image: "/src/assets/rag-supabase-agent.png"
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
    <section id="projects" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Tech-themed animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 opacity-10 animate-tech-float">
          <Bot className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-1/3 right-16 opacity-15 animate-tech-float-reverse">
          <Database className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-10 animate-tech-float-slow">
          <Zap className="h-7 w-7 text-primary" />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-12 animate-tech-float">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        
        {/* Binary code effect */}
        <div className="absolute top-1/4 right-20 text-primary/10 font-mono text-xs animate-binary-scroll">
          01001001<br/>10110100<br/>11010011
        </div>
        <div className="absolute bottom-1/3 left-16 text-primary/8 font-mono text-xs animate-binary-scroll-reverse">
          11001010<br/>01110110<br/>10101001
        </div>
        
        {/* Circuit-like connections */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5" width="200" height="200">
          <path d="M10,10 L50,50 L90,10 L130,50 L170,10 L190,30" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-primary animate-draw-line"
                strokeDasharray="5,5" />
        </svg>
      </div>
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
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
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

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {selectedProject.icon}
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Outcomes</h3>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Similar Solution
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;