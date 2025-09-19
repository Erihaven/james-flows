import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Neural network nodes data
  const networkNodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  // Neural network connections
  const networkConnections = networkNodes.slice(0, 8).map((node, i) => {
    const targetNode = networkNodes[(i + 1) % networkNodes.length];
    return {
      x1: node.x,
      y1: node.y,
      x2: targetNode.x,
      y2: targetNode.y,
    };
  });

  return (
    <section className="relative min-h-[100vh] bg-gradient-hero overflow-hidden">
      {/* Neural Network Background Layer - Slower parallax */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        {/* Neural Network Nodes */}
        {networkNodes.map((node) => (
          <div
            key={node.id}
            className="absolute bg-primary rounded-full shadow-neural-glow animate-pulse-gentle"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDelay: `${node.delay}s`,
            }}
          />
        ))}
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {networkConnections.map((connection, i) => (
            <line
              key={i}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${connection.x2}%`}
              y2={`${connection.y2}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.3"
              className="animate-neural-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Data Grid Layer - Medium parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),.08)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),.08)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
      </div>

      {/* Floating Data Particles - Fast parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.7}px)`
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-data"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Fastest parallax (foreground) */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`
        }}
      >
        <div className="min-h-[calc(100vh-8rem)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-sm font-medium text-primary">Welcome to AI Automation</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    Hi, I'm <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">James</span>
                  </h1>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground">
                    AI Automation Specialist
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I build intelligent workflows with n8n & Zapier and power them with AI to eliminate busywork, slash operational costs, and make your business run like clockwork.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6"
                  onClick={() => scrollToSection('contact')}
                >
                  GET IN TOUCH
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative neural network accent */}
                <div className="absolute -top-16 -right-16 w-48 h-48 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="3" fill="hsl(var(--primary))" />
                    <circle cx="72" cy="48" r="2" fill="hsl(var(--primary))" />
                    <circle cx="120" cy="24" r="2.5" fill="hsl(var(--primary))" />
                    <circle cx="96" cy="96" r="3" fill="hsl(var(--primary))" />
                    <line x1="24" y1="24" x2="72" y2="48" stroke="hsl(var(--primary))" strokeWidth="1" />
                    <line x1="72" y1="48" x2="120" y2="24" stroke="hsl(var(--primary))" strokeWidth="1" />
                    <line x1="72" y1="48" x2="96" y2="96" stroke="hsl(var(--primary))" strokeWidth="1" />
                  </svg>
                </div>

                {/* Profile Image */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-elevated border-2 border-primary/20">
                  <img 
                    src={profileImage} 
                    alt="James Eduard Sajol - AI Automation Specialist" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
                </div>

                {/* Floating neural accent */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-primary rounded-full opacity-60 blur-2xl animate-pulse-gentle"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands/Logos Section */}
        <div className="mt-32 pt-16 border-t border-border/20">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-xl font-semibold text-muted-foreground">n8n</div>
            <div className="text-xl font-semibold text-muted-foreground">Zapier</div>
            <div className="text-xl font-semibold text-muted-foreground">GoHighLevel</div>
            <div className="text-xl font-semibold text-muted-foreground">OpenAI</div>
            <div className="text-xl font-semibold text-muted-foreground">HubSpot</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;