import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Crosshair, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Decor: Grid & Particles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[120px] opacity-50" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary uppercase tracking-wider mb-6 border border-primary/20">
              Transform Your Security Operations
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              India's Most Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                e-Surveillance Platform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Save up to 60% on security costs with AI-powered live video surveillance and cloud video analytics designed for scale and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-shadow">
              <Link to="/contact">Get a Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-14 px-8 text-base border-primary/30 hover:bg-primary/10 transition-colors bg-background/50 backdrop-blur-sm">
              <Link to="/solutions">View Solutions</Link>
            </Button>
          </motion.div>

          {/* Floating Stat Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-12"
          >
            {[
              { label: "1750+ Clients", icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
              { label: "15+ Countries", icon: <Globe className="w-4 h-4 text-accent" /> },
              { label: "875+ Incidents Prevented", icon: <Crosshair className="w-4 h-4 text-destructive" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 bg-card/60 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-lg"
              >
                {stat.icon}
                {stat.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
