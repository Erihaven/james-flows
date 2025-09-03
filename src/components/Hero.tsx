import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          James Eduard Sajol
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          AI Automation Specialist
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transforming business operations through intelligent workflow automation, 
          AI-powered agents, and seamless system integrations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-elevated"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-muted-foreground mb-16">
          <a 
            href="mailto:james.eduardsajol12@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-4 w-4" />
            james.eduardsajol12@gmail.com
          </a>
          <a 
            href="tel:+639934211817" 
            className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            +63 9934211817
          </a>
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