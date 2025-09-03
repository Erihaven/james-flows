import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              James Eduard Sajol
            </h3>
            <p className="text-muted-foreground">
              AI Automation Specialist transforming businesses through intelligent workflow solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:james.eduardsajol12@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                james.eduardsajol12@gmail.com
              </a>
              <a 
                href="tel:+639934211817"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                +63 9934211817
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} James Eduard Sajol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;