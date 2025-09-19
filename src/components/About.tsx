import profileImage from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { 
  Cpu, 
  Bot, 
  Zap, 
  Cog, 
  Brain, 
  Workflow,
  Code,
  Lightbulb,
  Target,
  Rocket
} from "lucide-react";

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [typewriterTexts, setTypewriterTexts] = useState({
    stage1: '',
    stage2: '',
    stage3: '',
    stage4: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  const stories = [
    {
      title: "My Journey in Tech",
      text: "Started with curiosity about how technology could solve real problems...",
      fullText: "Started with curiosity about how technology could solve real problems. From building my first website to discovering the power of automation platforms.",
      year: "2018",
      icon: Code
    },
    {
      title: "Discovering Automation",
      text: "Found the magic of workflows and process optimization...",
      fullText: "Found the magic of workflows and process optimization. Zapier opened my eyes to connecting different tools and creating seamless business processes.",
      year: "2020", 
      icon: Workflow
    },
    {
      title: "AI Revolution",
      text: "When GPT emerged, everything changed...",
      fullText: "When GPT emerged, everything changed. Suddenly, automation wasn't just about moving data - it was about intelligent decision-making and understanding context.",
      year: "2022",
      icon: Brain
    },
    {
      title: "Mastering AI Automation",
      text: "Today, I build systems that think and adapt...",
      fullText: "Today, I build systems that think and adapt. Combining n8n, Zapier, and AI to create automation that doesn't just work - it evolves with your business.",
      year: "2024",
      icon: Bot
    }
  ];

  const robotParts = [
    { icon: Cpu, position: { x: 50, y: 40 }, delay: 0 },
    { icon: Brain, position: { x: 50, y: 25 }, delay: 0.5 },
    { icon: Zap, position: { x: 35, y: 50 }, delay: 1 },
    { icon: Cog, position: { x: 65, y: 50 }, delay: 1.5 },
    { icon: Target, position: { x: 50, y: 65 }, delay: 2 },
    { icon: Rocket, position: { x: 50, y: 10 }, delay: 2.5 }
  ];

  const typewriterEffect = (text: string, speed: number = 50) => {
    return new Promise<void>((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section is visible
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (sectionHeight + windowHeight)
      ));
      
      setScrollProgress(progress);
      
      // Determine current stage based on progress
      const stageIndex = Math.floor(progress * stories.length);
      const clampedStage = Math.max(0, Math.min(stories.length - 1, stageIndex));
      
      if (clampedStage !== currentStage) {
        setCurrentStage(clampedStage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStage, stories.length]);

  // Typewriter effect for current stage
  useEffect(() => {
    if (currentStage >= 0 && currentStage < stories.length) {
      const story = stories[currentStage];
      const stageKey = `stage${currentStage + 1}` as keyof typeof typewriterTexts;
      
      // Reset text and start typewriter
      setTypewriterTexts(prev => ({ ...prev, [stageKey]: '' }));
      
      let i = 0;
      const timer = setInterval(() => {
        if (i <= story.fullText.length) {
          setTypewriterTexts(prev => ({ 
            ...prev, 
            [stageKey]: story.fullText.slice(0, i) 
          }));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [currentStage]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-[300vh] bg-background/50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles with scroll parallax */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float-particles"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${10 + (i * 8)}%`,
              transform: `translateY(${scrollProgress * -100}px)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Timeline and Story */}
            <div className="space-y-8">
              {/* Section Header */}
              <div className="text-primary text-sm font-medium tracking-wider">
                MY STORY
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 w-0.5 h-full bg-border/30">
                  <div 
                    className="w-full bg-gradient-primary transition-all duration-700"
                    style={{ 
                      height: `${(scrollProgress * 100)}%`,
                      maxHeight: '100%'
                    }}
                  />
                </div>
                
                {/* Timeline items */}
                <div className="space-y-16">
                  {stories.map((story, index) => {
                    const isActive = index <= currentStage;
                    const isCurrent = index === currentStage;
                    const IconComponent = story.icon;
                    
                    return (
                      <div 
                        key={index}
                        className={`relative flex items-start gap-6 transition-all duration-700 ${ 
                          isActive ? 'opacity-100' : 'opacity-30'
                        }`}
                      >
                        {/* Timeline node */}
                        <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? 'bg-primary border-primary shadow-glow' 
                            : 'bg-background border-border'
                        }`}>
                          <IconComponent 
                            size={20} 
                            className={isActive ? 'text-primary-foreground' : 'text-muted-foreground'} 
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                              isCurrent ? 'text-primary' : 'text-foreground'
                            }`}>
                              {story.title}
                            </h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {story.year}
                            </span>
                          </div>
                          
                          {/* Typewriter text */}
                          <p className="text-muted-foreground leading-relaxed">
                            {isCurrent 
                              ? typewriterTexts[`stage${index + 1}` as keyof typeof typewriterTexts]
                              : isActive ? story.fullText : story.text
                            }
                            {isCurrent && (
                              <span className="animate-pulse text-primary">|</span>
                            )}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Robot Assembly */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Robot Assembly Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {robotParts.map((part, index) => {
                      const IconComponent = part.icon;
                      const shouldShow = scrollProgress > (part.delay / 3);
                      const assemblyProgress = Math.max(0, (scrollProgress - part.delay / 3) * 3);
                      
                      return (
                        <div
                          key={index}
                          className={`absolute transition-all duration-1000 ${
                            shouldShow ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            left: `${part.position.x}%`,
                            top: `${part.position.y}%`,
                            transform: `translate(-50%, -50%) scale(${Math.min(1, assemblyProgress)}) rotate(${(1 - assemblyProgress) * 360}deg)`,
                          }}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            shouldShow 
                              ? 'bg-primary/20 border-2 border-primary/40 shadow-neural-glow' 
                              : 'bg-background border border-border'
                          }`}>
                            <IconComponent 
                              size={24} 
                              className={shouldShow ? 'text-primary' : 'text-muted-foreground'} 
                            />
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Central brain that appears last */}
                    <div 
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                        scrollProgress > 0.8 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse-gentle">
                        <Bot size={32} className="text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection lines between parts */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {robotParts.slice(0, -1).map((part, index) => {
                    const nextPart = robotParts[index + 1];
                    const shouldShow = scrollProgress > 0.6;
                    
                    return (
                      <line
                        key={index}
                        x1={`${part.position.x}%`}
                        y1={`${part.position.y}%`}
                        x2={`${nextPart.position.x}%`}
                        y2={`${nextPart.position.y}%`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeOpacity={shouldShow ? "0.3" : "0"}
                        className="transition-all duration-700 animate-neural-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                </svg>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="text-xs text-muted-foreground text-center">
                  <div className="w-32 h-1 bg-border/30 rounded-full mb-2">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                  Scroll Progress: {Math.round(scrollProgress * 100)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with CTA */}
      <div className="absolute bottom-0 w-full py-20 bg-gradient-to-t from-background to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-opacity duration-1000 ${
            scrollProgress > 0.9 ? 'opacity-100' : 'opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">Automate Your Success?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's transform your business operations with intelligent automation that works around the clock.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START YOUR AUTOMATION JOURNEY
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;