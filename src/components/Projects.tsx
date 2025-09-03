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
      icon: <Bot className="h-8 w-8" />,
      category: "AI Automation"
    },
    {
      title: "Multi-CRM Synchronization Hub",
      description: "Developed real-time data sync system connecting GoHighLevel, HubSpot, and Google Sheets through n8n, ensuring zero duplicate or stale data across platforms.",
      technologies: ["n8n", "HubSpot API", "GoHighLevel", "Google Sheets API"],
      outcomes: [
        "100% data consistency across 3 CRMs",
        "Eliminated manual data entry",
        "Real-time bidirectional sync"
      ],
      icon: <Database className="h-8 w-8" />,
      category: "Data Integration"
    },
    {
      title: "Intelligent Cold Email Campaign",
      description: "Created AI-powered email automation with dynamic personalization using lead scraping, enrichment, and personalized outreach workflows in n8n.",
      technologies: ["n8n", "OpenAI API", "Email APIs", "Lead Enrichment"],
      outcomes: [
        "300% increase in email response rates",
        "Fully automated lead research",
        "Dynamic content personalization"
      ],
      icon: <Zap className="h-8 w-8" />,
      category: "Marketing Automation"
    },
    {
      title: "Revenue Analytics Dashboard",
      description: "Built automated reporting system that tracks leads, conversions, and revenue across multiple channels, providing real-time insights for business decisions.",
      technologies: ["n8n", "Google Sheets", "Data Visualization", "APIs"],
      outcomes: [
        "Real-time revenue tracking",
        "Automated daily/weekly reports",
        "70% faster decision making"
      ],
      icon: <TrendingUp className="h-8 w-8" />,
      category: "Analytics"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world automation solutions that deliver measurable business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 overflow-hidden group"
            >
              {/* Project Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Outcomes</h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center gap-3 text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-8 pb-8">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Automate Your Business?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you build intelligent automation solutions that drive real results.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;