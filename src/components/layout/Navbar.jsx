import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import headerLogo from "@/assets/sporada_secure_logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden lg:flex justify-end items-center px-8 py-2 bg-background border-b border-border/50 text-xs text-muted-foreground space-x-6 z-50 relative">
        <div className="flex items-center space-x-2">
          <Phone className="w-3 h-3 text-primary" />
          <span>+91-422-231-2363 / +91-739-975-0001</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-3 h-3 text-primary" />
          <span>Ramanathapuram, Coimbatore, India</span>
        </div>
      </div>

      <motion.header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img src={headerLogo} alt="Sporada Secure" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith(link.path) ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="default" className="shadow-lg shadow-primary/20">
              <Link to="/contact">Get a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 border-b border-border overflow-hidden"
            >
              <nav className="flex flex-col space-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-2 pb-4 border-b border-border/50 text-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link to="/contact">Get a Demo</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
