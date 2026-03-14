import { Link } from "react-router-dom";
import { navLinks } from "@/data/navigation";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import footerLogo from "@/assets/sporada_square.png";
import favicon from "@/assets/favicon.png";
import termsPdf from "@/assets/Termsandconditions.pdf";
import refundPdf from "@/assets/refund&cancellation.pdf";
import privacyPdf from "@/assets/Privacy-Policy-Template.pdf";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/60 py-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-2 text-center sm:text-left">

          {/* Brand Col */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-flex justify-center sm:justify-start">
              <img src={footerLogo} alt="Sporada Secure" className="h-32 sm:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              India's Most Trusted e-Surveillance Platform. Save up to 60% on security costs with AI-powered live video surveillance and advanced cloud analytics.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-start sm:justify-start space-x-3 text-sm text-muted-foreground max-w-xs mx-auto sm:mx-0">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 text-center" />
                <span className="text-start" >687/7, Trichy Road, Ramanathapuram, Coimbatore – 641045, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start justify-start sm:justify-start space-x-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>+91-422-231-2363</span>
                  <span>+91-739-975-0001</span>
                </div>
              </li>
              <li className="flex items-center justify-start sm:justify-start space-x-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>sales@sporadasecure.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="border-t border-border/40 pt-4 flex flex-col items-center space-y-6 text-xs text-muted-foreground text-center">

          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <a href="https://facebook.com/sporadasecure" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com/sporadasecure" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com/company/sporada-secure" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://instagram.com/sporadasecure" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://youtube.com/@sporadasecure" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-destructive transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              <span className="sr-only">YouTube</span>
            </a>
          </div>

          <p className="text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()}
            <span className="flex items-center gap-1 font-bold text-primary">
              Sporada Secure
              <img src={favicon} alt="sporada secure" className="w-4 h-4" aria-hidden="true" />
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href={privacyPdf} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href={termsPdf} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href={refundPdf} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
