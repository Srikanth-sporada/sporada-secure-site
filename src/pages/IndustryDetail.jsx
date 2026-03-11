import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

export default function IndustryDetail() {
  const { slug } = useParams();
  
  const industry = industries.find(ind => ind.slug === slug);
  
  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  const relatedSolutions = solutions.filter(sol => industry.solutions.includes(sol.name));

  return (
    <>
      <SEOHead 
        title={`${industry.name} Security Solutions`} 
        description={`Tailored video analytics and e-surveillance solutions for ${industry.name}. Solve challenges like: ${industry.challenges.join(", ")}.`}
      />
      <div className="min-h-screen bg-background">
        
        {/* Industry Hero */}
        <div className="relative pt-32 pb-24 border-b border-border/40 overflow-hidden text-center px-4">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
              Industry Solution
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Security for <span className="text-primary">{industry.name}</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{industry.shortDescription}</p>
          </motion.div>
        </div>

        {/* Challenges & Why Sporada */}
        <div className="py-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-8">Key <span className="text-destructive">Vulnerabilities</span></h2>
              <ul className="space-y-6">
                {industry.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0 mt-1">
                      <Icons.AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{challenge}</h4>
                      <p className="text-muted-foreground mt-1">Standard alarm systems fail to address this specific threat. Our AI is tuned perfectly for it.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-8">How Sporada <span className="text-primary">Helps</span></h2>
              <ul className="space-y-6">
                {["100% false-alarm filtering before dispatch", "Proactive audio deterrents stop crimes mid-act", "Automated compliance auditing and shift reporting", "Sub-10 second response times via centralized control room"].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-lg text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 rounded-2xl bg-card border border-primary/20 shadow-[0_0_30px_rgba(37,99,235,0.05)]">
                 <h3 className="font-bold text-xl mb-2">Ready to secure your {industry.name} facilities?</h3>
                 <p className="text-muted-foreground mb-6">Speak with an industry specialist today to customize your AI models.</p>
                 <Button asChild size="lg" className="w-full sm:w-auto">
                   <Link to="/contact">Request Demo</Link>
                 </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Solutions */}
        <div className="py-24 bg-card/50 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Recommended <span className="text-accent">Solutions</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedSolutions.map((sol, i) => {
                 const IconComponent = Icons[sol.icon] || Icons.Shield;
                 return (
                  <motion.div key={sol.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={`/solutions/${sol.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group">
                      <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-8">
                          <IconComponent className="w-10 h-10 text-primary mb-6" />
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{sol.name}</h3>
                          <p className="text-muted-foreground mb-6 line-clamp-2">{sol.description}</p>
                          <span className="text-primary font-semibold flex items-center text-sm">
                            Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
