import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Glowing orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-primary text-lg font-medium tracking-wider">JAMES SAJOL</div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                HAY! I'M <span className="text-primary">JAMES</span>
                <br />
                I'M A <span className="bg-gradient-primary bg-clip-text text-transparent">AI AUTOMATION</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforming business operations through intelligent workflow automation, 
                AI-powered agents, and seamless system integrations.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow"
                onClick={() => scrollToSection('contact')}
              >
                GET IN TOUCH
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              {/* Social Links */}
              <div className="flex items-center gap-3 ml-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Github className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative lines */}
              <div className="absolute -top-10 -right-10 w-40 h-40">
                <div className="grid grid-cols-8 gap-1 opacity-20">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div key={i} className="w-1 h-8 bg-primary/30"></div>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={profileImage} 
                  alt="James Eduard Sajol - AI Automation Specialist" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-80 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Brands/Logos Section */}
        <div className="mt-20 pt-12 border-t border-border/20">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-muted-foreground">n8n</div>
            <div className="text-lg font-semibold text-muted-foreground">Zapier</div>
            <div className="text-lg font-semibold text-muted-foreground">GoHighLevel</div>
            <div className="text-lg font-semibold text-muted-foreground">OpenAI</div>
            <div className="text-lg font-semibold text-muted-foreground">HubSpot</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;