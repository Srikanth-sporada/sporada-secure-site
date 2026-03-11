import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";
import * as Icons from "lucide-react";

export default function SolutionDetail() {
  const { slug } = useParams();
  
  const solution = solutions.find(sol => sol.slug === slug);
  
  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  const relatedIndustries = industries.filter(ind => solution.industries.includes(ind.slug));
  const HeroIcon = Icons[solution.icon] || Icons.Shield;

  return (
    <>
      <SEOHead 
        title={`${solution.name} | Advanced AI Surveillance`} 
        description={solution.description}
      />
      <div className="min-h-screen bg-background">
        
        {/* Solution Hero */}
        <div className="relative pt-32 pb-24 border-b border-border/40 overflow-hidden text-center px-4 bg-card/20">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl mb-8 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
               <HeroIcon className="w-10 h-10 text-primary" />
            </div>
            <span className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm">{solution.category} Engine</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">{solution.name}</h1>
            <p className="text-2xl text-foreground font-medium mb-6">{solution.tagline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">{solution.description}</p>
            
            <Button size="lg" asChild className="h-14 px-8 shadow-xl shadow-primary/20 text-base">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Features Split */}
        <div className="py-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-8">Technical <span className="text-primary">Capabilities</span></h2>
                <div className="space-y-6">
                  {solution.features.map((feature, i) => (
                    <Card key={i} className="bg-card/30 border-border/50 backdrop-blur-sm shadow-none">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <Check className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground">{feature}</h4>
                          <p className="text-muted-foreground mt-1 text-sm">Powered by our custom proprietary deep-learning video analytics models, running at the edge or in the cloud.</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
             </motion.div>

             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform -rotate-3" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card p-12 flex flex-col items-center justify-center text-center shadow-xl">
                  <ShieldCheck className="w-24 h-24 text-primary opacity-20 mb-8 absolute top-8 left-8" />
                  <Icons.Cpu className="w-24 h-24 text-accent mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Edge + Cloud Hybrid</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deploy {solution.name} seamlessly directly to your existing NVR/DVR arrays via our plug-and-play secure bridge, requiring absolutely zero rip-and-replace of your hardware.
                  </p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Serving Industries */}
        {relatedIndustries.length > 0 && (
          <div className="py-24 bg-card/40 border-t border-border/40 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12">Designed for these <span className="text-primary">Industries</span></h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {relatedIndustries.map((ind, i) => {
                   const IndIcon = Icons[ind.icon] || Icons.Briefcase;
                   return (
                     <motion.div key={ind.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                       <Link to={`/industries/${ind.slug}`}>
                         <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-background border border-border hover:border-primary/50 hover:bg-card transition-all cursor-pointer shadow-sm group">
                           <IndIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                           <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{ind.name}</span>
                         </div>
                       </Link>
                     </motion.div>
                   )
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
