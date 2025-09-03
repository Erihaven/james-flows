import { Bot, Zap, Database, Globe, Workflow, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation Platforms",
      icon: <Workflow className="h-8 w-8" />,
      skills: [
        { name: "n8n", level: "Expert", description: "Cloud & Self-Hosted, Advanced nodes, Custom scripts" },
        { name: "Zapier", level: "Advanced", description: "Workflow migration, Quick automations" },
        { name: "GoHighLevel", level: "Advanced", description: "CRM automation, Pipelines, Onboarding workflows" }
      ]
    },
    {
      title: "AI & Integration",
      icon: <Brain className="h-8 w-8" />,
      skills: [
        { name: "OpenAI API", level: "Expert", description: "GPT models, Custom AI agents inside n8n" },
        { name: "REST APIs", level: "Advanced", description: "GraphQL, Webhooks, OAuth2, JWT" },
        { name: "AI Agents", level: "Expert", description: "RAG systems, Lead qualification bots" }
      ]
    },
    {
      title: "CRM & Data",
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: "HubSpot", level: "Advanced", description: "CRM automation, Content management" },
        { name: "Google Workspace", level: "Expert", description: "Sheets, Docs, Gmail automations" },
        { name: "Data Sync", level: "Expert", description: "Real-time CRM sync, No duplicate data" }
      ]
    },
    {
      title: "Content & Deployment",
      icon: <Globe className="h-8 w-8" />,
      skills: [
        { name: "ContentStack", level: "Advanced", description: "Headless CMS, Content workflows" },
        { name: "Docker", level: "Intermediate", description: "Containerization, Self-hosting" },
        { name: "Raspberry Pi", level: "Advanced", description: "Self-hosted n8n, Redis integration" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Core Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for building intelligent automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 bg-gradient-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Automated Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">System Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Manual Work Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;