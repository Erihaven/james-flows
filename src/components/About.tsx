import profileImage from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="w-64 sm:w-72 lg:w-80 max-w-[300px] aspect-square mx-auto relative">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-elevated">
                <img 
                  src={profileImage} 
                  alt="James Eduard Sajol" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -z-10 top-6 right-6 w-[85%] h-[85%] rounded-full border-2 border-primary/20"></div>
              <div className="absolute -z-10 -bottom-3 -right-3 w-16 h-16 bg-gradient-primary rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <div className="text-primary text-sm font-medium tracking-wider mb-4">ABOUT ME</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                I AM AVAILABLE FOR <span className="text-primary">AI AUTOMATION</span>
                <br />
                <span className="text-primary">PROJECTS</span>
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>My name is James, and I solve business problems with automation.</p>
                
                <p>I am a specialist in AI automation, dedicated to building streamlined, intelligent workflows that handle the repetitive tasks that slow your team down. My expertise lies in platforms like n8n (both cloud and self-hosted), complex Zapier integrations, and powerful marketing automation within GoHighLevel.</p>
                
                <p>I don't just connect apps; I create end-to-end systems that leverage AI (like OpenAI/GPT) to make decisions, analyze data, and interact with customers. My goal is to build automations that are not only powerful but also reliable and easy to maintain, giving you clarity and control over your operations.</p>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                GET IN TOUCH
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed About */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Expertise</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Automation Platforms</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    n8n (Cloud & Self-Hosted)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Zapier Advanced Workflows
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    GoHighLevel CRM Automation
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300">
                <h4 className="text-lg font-semibold mb-4 text-foreground">AI & Integration</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    OpenAI API & GPT Models
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    RAG Systems Development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    REST APIs & Webhooks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-card border border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Experience</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground">AI Automation Specialist</h5>
                  <p className="text-sm text-muted-foreground">n8n | Zapier Expert</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">Product Content Manager</h5>
                  <p className="text-sm text-muted-foreground">MoneyHero Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;