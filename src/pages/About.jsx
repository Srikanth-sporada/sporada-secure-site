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
      <div className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">Your Trusted <span className="text-primary">eSurveillance Partner</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              What started as a BPO in 2014 has evolved into India's most advanced virtual security and AI video analytics company, processing millions of video events daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Sporada Secure was founded with a singular mission: to eliminate the gaps inherent in physical guard systems. Humans get tired, but our AI-backed surveillance grid does not.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, our state-of-the-art Command and Control Center in Coimbatore acts as the central hub for over 3500+ clients worldwide, preventing millions of dollars in asset loss, optimizing retail floorings, and ensuring total safety compliance without risking human lives.
              </p>
              
              <div className="pt-6 flex gap-8">
                <div>
                  <div className="text-4xl font-black text-white">3500+</div>
                  <div className="text-primary font-medium mt-1 uppercase tracking-wider text-sm">Active Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white">2014</div>
                  <div className="text-primary font-medium mt-1 uppercase tracking-wider text-sm">Year Founded</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 bg-card p-8 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <ShieldCheck className="w-24 h-24 mx-auto text-primary mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold text-foreground">Global Command Center</h3>
                  <p className="text-muted-foreground mt-2">Active 24/7/365</p>
                </div>
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
