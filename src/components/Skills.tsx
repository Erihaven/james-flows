import { Bot, Zap, Database, Globe, Workflow, Brain } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-medium tracking-wider mb-4">SERVICES</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            DESIGN <span className="text-primary">SERVICES</span> I AM PROVIDING
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Workflow className="h-8 w-8" />,
              title: "Workflow Automation",
              description: "End-to-end process automation using n8n, Zapier, and custom integrations."
            },
            {
              icon: <Brain className="h-8 w-8" />,
              title: "AI Agent Development", 
              description: "Smart AI agents with RAG systems for customer service and lead qualification."
            },
            {
              icon: <Database className="h-8 w-8" />,
              title: "CRM Integration",
              description: "Seamless data sync between multiple CRM platforms and business tools."
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Marketing Automation",
              description: "Intelligent email campaigns, lead generation, and conversion optimization."
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Skills Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
            {[
              {
                category: "Automation Platforms",
                skills: [
                  { name: "n8n", level: 95 },
                  { name: "Zapier", level: 90 },
                  { name: "GoHighLevel", level: 88 }
                ]
              },
              {
                category: "AI & APIs",
                skills: [
                  { name: "OpenAI API", level: 92 },
                  { name: "REST APIs", level: 85 },
                  { name: "Webhooks", level: 90 }
                ]
              },
              {
                category: "Data & CRM",
                skills: [
                  { name: "HubSpot", level: 85 },
                  { name: "Google Workspace", level: 95 },
                  { name: "Data Sync", level: 90 }
                ]
              },
              {
                category: "Development",
                skills: [
                  { name: "Docker", level: 75 },
                  { name: "Self-hosting", level: 80 },
                  { name: "Redis", level: 70 }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card border border-border/50 h-full flex flex-col">
                <h4 className="text-lg font-semibold text-foreground mb-4">{category.category}</h4>
                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 h-full flex flex-col">
              <h4 className="text-lg font-semibold text-foreground mb-4">Specializations</h4>
              <div className="space-y-3 flex-grow">
                {[
                  "Lead Qualification Bots",
                  "CRM Data Synchronization", 
                  "Email Campaign Automation",
                  "Workflow Optimization",
                  "API Integration"
                ].map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;