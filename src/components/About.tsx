import profileImage from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-96 h-96 mx-auto relative">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={profileImage} 
                  alt="James Eduard Sajol" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -z-10 top-8 right-8 w-80 h-80 rounded-full border-2 border-primary/20"></div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <div className="text-primary text-sm font-medium tracking-wider mb-4">ABOUT US</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                I AM AVAILABLE FOR <span className="text-primary">UI</span>
                <br />
                <span className="text-primary">UX DESIGN</span> PROJECT
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm an AI Automation Specialist with extensive expertise in designing and deploying 
                end-to-end workflow automations that transform how businesses operate. My passion 
                lies in bridging the gap between complex technical systems and practical business solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">280+</div>
                  <div className="text-sm text-muted-foreground">Google Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">49+</div>
                  <div className="text-sm text-muted-foreground">Awards Winning</div>
                </div>
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
            <div className="bg-gradient-primary/5 p-6 rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Recent Achievement</h4>
              <p className="text-foreground/80 mb-4">
                Built comprehensive AI lead qualification system resulting in 90% reduction in manual scoring time.
              </p>
              <div className="text-sm text-primary font-medium">View Project →</div>
            </div>

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