import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { CheckCircle2, ShieldCheck, Target, Users, Zap, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    { title: "Zero Trust Approach", icon: ShieldCheck, desc: "We verify everything and trust nothing. Security without compromise." },
    { title: "Rapid Response", icon: Zap, desc: "Seconds matter. Our control room guarantees a sub-10 second verification time." },
    { title: "Global Scale", icon: Globe, desc: "Protecting assets from India to across 15+ countries without latency." },
    { title: "Continuous Innovation", icon: Target, desc: "Our AI models train 24/7 on new vulnerabilities to stay ahead of threats." },
    { title: "Client Partnership", icon: Users, desc: "We don't just sell software; we act as an extension of your security team." },
    { title: "Certified Excellence", icon: Award, desc: "ISO and SOC2 compliant auditing frameworks baked into our core processes." },
  ];

  return (
    <>
      <SEOHead 
        title="About Us" 
        description="Founded in 2014, Sporada Secure is India's leading virtual security company protecting over 3500 clients globally."
      />
      <div className="min-h-screen bg-background pt-16 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">Your Trusted <span className="text-primary">eSurveillance Partner</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              What started as a BPO in 2014 has evolved into India's most advanced virtual security and AI video analytics company, processing millions of video events daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sporada Secure was founded with a singular mission: to eliminate the gaps inherent in physical guard systems. Humans get tired, but our **AI-backed surveillance grid** does not. We replace passive recording with **proactive deterrence**.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, our global Command Centers act as the central intelligence hub for over 3500+ clients worldwide, preventing incidents in real-time using a unified **eSurveillance framework**. Our transition from a BPO to a technology leader reflects our commitment to absolute operational transparency.
              </p>
              
              <div className="pt-6 flex gap-8">
                <div>
                  <div className="text-4xl font-black text-foreground">3500+</div>
                  <div className="text-primary font-medium mt-1 uppercase tracking-wider text-sm">Active Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-foreground">2014</div>
                  <div className="text-primary font-medium mt-1 uppercase tracking-wider text-sm">Year Founded</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700" />
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/30 bg-card/40 backdrop-blur-xl p-1 flex flex-col shadow-2xl">
                 {/* HUD UI Elements */}
                 <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono text-primary/80 uppercase tracking-widest font-bold">Grid_Status: ACTIVE</span>
                 </div>
                 <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/50">
                    LATENCY: &lt;10MS
                 </div>
                 
                 <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
                    {/* Scanning Line */}
                    <motion.div 
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-px bg-primary/20 shadow-[0_0_10px_rgba(37,99,235,0.5)] z-0 pointer-events-none" 
                    />
                    
                    <ShieldCheck className="w-20 h-20 text-primary mb-4 opacity-100 z-10 drop-shadow-[0_0_15px_rgba(var(--primary),0.4)]" />
                    <h3 className="text-xl font-black text-foreground z-10 tracking-tight uppercase">Unified Intelligence Grid</h3>
                    <div className="flex items-center gap-4 mt-4 z-10">
                       <div className="flex flex-col items-center">
                          <span className="text-[10px] text-muted-foreground uppercase font-bold">Uptime</span>
                          <span className="text-sm font-mono font-bold text-primary">99.9%</span>
                       </div>
                       <div className="w-px h-8 bg-border/50" />
                       <div className="flex flex-col items-center">
                          <span className="text-[10px] text-muted-foreground uppercase font-bold">Nodes</span>
                          <span className="text-sm font-mono font-bold text-primary">3500+</span>
                       </div>
                    </div>
                 </div>

                 {/* Bottom HUD bar */}
                 <div className="bg-primary/5 border-t border-primary/10 p-3 flex justify-between items-center text-[8px] font-mono text-muted-foreground px-6">
                    <span>CMD_CTR: COIMBATORE_HUB</span>
                    <span className="text-primary italic">SECURE_24/7_ENABLED</span>
                 </div>

                 {/* Decorative HUD corners */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />
              </div>
            </motion.div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that drive our engineering, operations, and client relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card/30 border-border/40 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
