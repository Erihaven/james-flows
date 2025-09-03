const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm an AI Automation Specialist with extensive expertise in designing and deploying 
              end-to-end workflow automations that transform how businesses operate. My passion 
              lies in bridging the gap between complex technical systems and practical business solutions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              With deep experience in n8n, Zapier, and GoHighLevel, I specialize in creating 
              intelligent systems that handle everything from lead qualification and CRM synchronization 
              to AI-powered customer interactions and automated reporting workflows.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I've successfully built and deployed Retrieval-Augmented Generation (RAG) systems, 
              AI-powered sales agents, and complex integration solutions that have helped businesses 
              reduce manual work, accelerate insights, and scale their operations efficiently.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Specializations</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Workflow Automation & Process Optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  AI Agent Development & RAG Systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  CRM Integration & Data Synchronization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Lead Generation & Qualification
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cold Email Automation & Personalization
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">AI Automation Specialist</h4>
                  <p className="text-sm text-muted-foreground">n8n | Zapier Specialist</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Product Content Manager</h4>
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