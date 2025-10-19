import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_tn5kg3d",    // ← replace with your EmailJS service ID
        "template_qm0jwza",   // ← replace with your EmailJS template ID
        formRef.current,
        "KbJBx9UGAI0YzVpZp"     // ← replace with your EmailJS public key
      );

      console.log("EmailJS success:", result.text);
      toast({
        title: "✅ Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "❌ Message failed to send.",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Communication-themed animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Message bubbles */}
        <div className="absolute top-1/4 left-16 w-8 h-6 bg-primary/10 rounded-full animate-message-float"></div>
        <div className="absolute top-1/3 right-20 w-6 h-4 bg-primary/15 rounded-full animate-message-float-reverse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-7 bg-primary/8 rounded-full animate-message-float-slow"></div>
        
        {/* Connection lines */}
        <svg className="absolute top-1/2 left-1/3 w-40 h-2 opacity-10">
          <line x1="0" y1="1" x2="160" y2="1" stroke="currentColor" strokeWidth="1" className="text-primary animate-connect-line" strokeDasharray="4,4" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-32 h-2 opacity-15">
          <line x1="0" y1="1" x2="128" y2="1" stroke="currentColor" strokeWidth="1" className="text-primary animate-connect-line-reverse" strokeDasharray="6,6" />
        </svg>
        
        {/* Email/communication icons */}
        <div className="absolute top-20 right-1/4 opacity-8 animate-comm-float">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <div className="absolute bottom-20 left-1/5 opacity-10 animate-comm-float-reverse">
          <Send className="h-4 w-4 text-primary" />
        </div>
        
        {/* Signal waves */}
        <div className="absolute top-1/3 left-1/2 opacity-5">
          <div className="w-8 h-8 border border-primary/20 rounded-full animate-signal-wave"></div>
          <div className="absolute top-2 left-2 w-4 h-4 border border-primary/30 rounded-full animate-signal-wave-delay"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with intelligent automation? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a 
                      href="mailto:james.eduardsajol12@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      james.eduardsajol12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a 
                      href="tel:+639934211817"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +63 9934211817
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Philippines (Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary/5 p-8 rounded-xl border border-primary/10">
              <h4 className="text-xl font-bold mb-4 text-foreground">What to Expect</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Free consultation call
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Custom automation strategy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Transparent project timeline
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your automation needs..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;