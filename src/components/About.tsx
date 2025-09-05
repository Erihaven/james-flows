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
                Turn Your Business Operations into Your <span className="text-primary">Competitive Advantage</span>
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                <p>I solve expensive business problems with intelligent automation. I specialize in designing and building end-to-end systems on platforms like n8n and Zapier, supercharged with AI (OpenAI/GPT), to handle the complex, repetitive tasks that drain your team's productivity.</p>
                
                <p>My focus is on creating automations that are not only powerful but also reliable and easy to maintain, giving you clarity and control over your operations so you can focus on growth.</p>
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
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Expertise</h3>
            
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Automation Platforms</h4>
                <ul className="space-y-3 text-foreground/80 flex-grow">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    n8n (Cloud & Self-Hosted)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    Zapier Advanced Workflows
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    GoHighLevel CRM Automation
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                <h4 className="text-lg font-semibold mb-4 text-foreground">AI & Integration</h4>
                <ul className="space-y-3 text-foreground/80 flex-grow">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    OpenAI API & GPT Models
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    RAG Systems Development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    REST APIs & Webhooks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-card p-6 rounded-xl shadow-card border border-border/50 h-full flex flex-col">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Experience</h4>
              <div className="space-y-4 flex-grow">
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