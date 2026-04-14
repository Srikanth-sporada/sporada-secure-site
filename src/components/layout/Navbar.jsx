import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, X, Phone, MapPin, ScanFace } from "lucide-react";
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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background border-b border-border shadow-sm py-3"
          : "bg-background/40 backdrop-blur-md py-2"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }}
      >
        {/* Utility Bar (Commented by user) */}
        {/* ... (omitted for brevity) ... */}

        <div className="container mx-auto px-2 md:px-8 flex items-center justify-between relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/" className="flex items-center group" aria-label="Sporada Secure Home">
              <img
                src={headerLogo}
                alt="Sporada Secure"
                className="h-14  w-auto transition-transform duration-300 group-hover:scale-105 object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-secondary/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/40 relative">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-md  font-medium transition-all duration-300 rounded-full hover:text-primary ${isActive ? "text-primary" : "text-black"
                    }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative z-10"
                  >
                    {link.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-background shadow-sm border border-border/50 rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              <Link to="/contact">Get a Demo</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 text-foreground relative z-50 rounded-xl hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-0.5 bg-primary rounded-full" />
                <div className="w-4 h-0.5 bg-primary rounded-full opacity-80" />
                <div className="w-6 h-0.5 bg-primary rounded-full" />
              </div>
            )}
          </motion.button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="fixed inset-0 w-full h-screen bg-background z-40 overflow-hidden md:hidden"
            >
              {/* Cinematic Background - Mesh Gradient */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.15)_0%,transparent_50%)] animate-pulse" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(37,99,235,0.05),transparent)] bg-[length:100%_4px] animate-[scan_4s_linear_infinite]"
                />
              </div>

              <div className="relative z-10 flex flex-col h-full pt-28 pb-12 px-8 justify-between">
                <nav className="flex flex-col space-y-8">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path || (link.path !== "/" && location.pathname.startsWith(link.path));
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          to={link.path}
                          className="flex items-center space-x-5 group"
                        >
                          <span className={`text-[12px] font-mono tracking-widest transition-colors ${isActive ? "text-primary font-bold" : "text-foreground/70 font-bold group-hover:text-primary"}`}>
                            0{index + 1}
                          </span>
                          <div className="relative overflow-hidden">
                            <span className={`text-3xl font-bold tracking-tight transition-all duration-300 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary/70"
                              }`}>
                              {link.name}
                            </span>
                            {isActive && (
                              <motion.div
                                layoutId="mobileActive"
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-full"
                  >
                    <Button asChild size="lg" className="mt-4 h-12 w-full text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-[0_15px_40px_rgba(37,99,235,0.2)] transition-all duration-500 hover:scale-[1.01] border border-white/5">
                      <Link to="/contact">Get a Demo</Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-end border-t border-border/20 pt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold opacity-50">Shielding Assets</p>
                      <p className="text-[10px] font-mono text-muted-foreground/30">Sporada Secure v2.0</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
