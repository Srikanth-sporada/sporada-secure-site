import { Link } from "react-router-dom";
import { navLinks } from "@/data/navigation";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import footerLogo from "@/assets/sporada_secure_logo_white.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={footerLogo} alt="Sporada Secure" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              India's Most Trusted e-Surveillance Platform. Save up to 60% on security costs with AI-powered live video surveillance and advanced cloud analytics.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Col */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Top Solutions</h3>
            <ul className="space-y-3">
              {solutions.slice(0, 5).map((sol) => (
                <li key={sol.id}>
                  <Link to={`/solutions/${sol.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {sol.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>687/7, Trichy Road, Ramanathapuram, Coimbatore – 641045, Tamil Nadu, India</span>
              </li>
              <li className="flexitems-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+91-422-231-2363</span>
                  <span>+91-739-975-0001</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>sales@sporadasecure.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sporada Secure. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
