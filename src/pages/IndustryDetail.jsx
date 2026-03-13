import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, AlertCircle, Sparkles, ArrowRight, Zap, Target, MinusCircle, ShieldAlert } from "lucide-react";
import * as Icons from "lucide-react";

export default function IndustryDetail() {
  const { slug } = useParams();
  
  const industry = industries.find(ind => ind.slug === slug);
  
  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  const relatedSolutions = solutions.filter(sol => industry.solutions.includes(sol.slug));
  const HeroIcon = Icons[industry.icon] || Icons.Shield;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEOHead 
        title={industry.seoTitle || `${industry.name} Security Solutions | Sporada Secure`} 
        description={industry.seoDescription || industry.shortDescription}
      />
      <div className="min-h-screen bg-background">
        
        {/* Industry Hero */}
        <div className="relative pt-32 pb-16 border-b border-border/40 overflow-hidden text-center px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 shadow-xl ring-4 ring-primary/5">
               <HeroIcon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-[10px] bg-accent/10 px-4 py-1 rounded-full border border-accent/20">Operational Sector</span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">{industry.heroTitle || `Security for ${industry.name}`}</h1>
            
            {/* Animated Tagline List */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl">
              {(industry.heroTaglines || []).map((tag, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[10px] md:text-xs font-bold bg-secondary/50 border border-border/50 px-3 py-1 rounded-md text-muted-foreground flex items-center gap-2"
                >
                  <Sparkles className="w-3 h-3 text-primary/50" /> {tag}
                </motion.span>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">{industry.shortDescription}</p>
          </motion.div>
        </div>

        {/* Overview & Strategic Value */}
        <div className="py-16 container mx-auto px-4 md:px-8">
           <div className="max-w-4xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Sector <span className="text-primary font-black">Intelligence</span> Overview</h2>
                <p className="text-lg text-foreground italic font-medium leading-relaxed border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl">
                  {industry.overview}
                </p>
              </div>
              <div className="md:col-span-5 bg-card/40 border border-border/60 p-8 rounded-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                 <div className="relative z-10">
                    <div className="text-4xl font-black text-primary mb-1">{industry.costSaving || "60%"}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Operational Savings Potentials</div>
                    <p className="text-xs leading-relaxed text-muted-foreground italic">Based on actual deployments where 24/7 AI monitoring replaced standard manual guarding rosters.</p>
                 </div>
                 <Target className="absolute -bottom-4 -right-4 w-24 h-24 text-primary/5 group-hover:scale-110 transition-transform duration-500" />
              </div>
           </div>
        </div>

        {/* Industry Challenges Section */}
        <div className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-black mb-3 text-destructive uppercase tracking-tight">Vulnerabilities & <span className="text-foreground">Critical Challenges</span></h2>
               <p className="text-muted-foreground text-sm">Identifying the specific threats and operational gaps in the {industry.name} sector.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(industry.challenges || []).map((challenge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card/40 border border-destructive/20 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-destructive/5 transition-all"
                >
                  <ShieldAlert className="w-8 h-8 text-destructive/40 group-hover:text-destructive mb-4 transition-colors" />
                  <h4 className="font-black text-foreground mb-2">{challenge.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Do (Strategic Mapping) */}
        <div className="py-16 container mx-auto px-4 md:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black mb-3">Our <span className="text-primary uppercase">Tactical Response</span></h2>
              <p className="text-muted-foreground text-sm">How Sporada AI strategically counters these vulnerabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {(industry.whatWeDo || []).map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 bg-card/60 border border-border/80 rounded-2xl group hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        {/* Healthcare Specific: keyFeatures Grid */}
        {industry.keyFeatures && (
          <div className="py-16 bg-background border-y border-border/40">
             <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">Clinical & <span className="text-primary">Operational Modules</span></h2>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold">16+ Specialized AI Sensors for Healthcare</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                   {industry.keyFeatures.map((feat, i) => (
                     <div key={i} className="p-3 rounded-lg bg-card border border-border/60 text-center flex flex-col items-center justify-center group hover:border-primary/40 hover:bg-primary/5 transition-all aspect-square md:aspect-auto md:h-24">
                        <Icons.Activity className="w-4 h-4 text-primary/30 group-hover:text-primary mb-2 transition-colors" />
                        <span className="text-[10px] md:text-xs font-bold leading-tight px-2">{feat}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {/* Education Specific: COVID SOP Package */}
        {industry.covidSopPackage && (
          <div className="py-16 container mx-auto px-4 md:px-8">
             <div className="max-w-4xl mx-auto bg-primary/10 border-2 border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                   <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-4">Integrated Module</div>
                      <h3 className="text-3xl font-black mb-4">{industry.covidSopPackage.title}</h3>
                      <p className="text-muted-foreground mb-6">Automated compliance tracking for safety protocols within educational premises.</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                         {industry.covidSopPackage.features.map((pkg, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs font-bold">
                              <ShieldCheck className="w-4 h-4 text-primary" /> {pkg}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="shrink-0 w-full md:w-auto">
                      <Button asChild size="lg" className="h-14 px-10 rounded-xl font-bold w-full shadow-xl shadow-primary/20">
                         <Link to="/contact">Request Integration Plan</Link>
                      </Button>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* Deployment Benefits Grid */}
        <div className="py-16 bg-secondary/20 border-t border-border/40">
           <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black uppercase italic tracking-tight">Sector <span className="text-emerald-500">Stability Benefits</span></h2>
                <p className="text-muted-foreground text-sm">Long-term value metrics calculated across 500+ site deployments.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {(industry.benefits || []).map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 bg-background border border-border/60 rounded-xl group hover:border-emerald-500/40 transition-all text-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500/40 group-hover:text-emerald-500 mx-auto mb-2 transition-colors" />
                    <span className="text-[10px] md:text-xs font-bold text-foreground leading-tight px-2">{benefit}</span>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>

        {/* Core Solution Connectivity */}
        <div className="py-16 container mx-auto px-4 md:px-8">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-black">Strategic <span className="text-primary italic">AI Stack</span></h2>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Recommended Solutions for {industry.name}</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedSolutions.map((sol, i) => {
                 const SolIcon = Icons[sol.icon] || Icons.Shield;
                 return (
                   <motion.div 
                     key={sol.id} 
                     initial={{ opacity: 0, y: 20 }} 
                     whileInView={{ opacity: 1, y: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: i * 0.1 }}
                   >
                     <Link to={`/solutions/${sol.slug}`} className="block h-full group">
                       <Card className="h-full bg-card/40 border-border/60 hover:bg-card hover:border-primary/40 transition-all border-dashed overflow-hidden relative">
                          <CardContent className="p-8">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                   <SolIcon className="w-6 h-6" />
                                </div>
                                <div>
                                   <h3 className="font-black text-xl leading-tight">{sol.name}</h3>
                                   <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{sol.category}</span>
                                </div>
                             </div>
                             <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-2 italic">{sol.description}</p>
                             <div className="flex items-center text-primary font-bold text-sm">
                                View Intelligence Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                             </div>
                          </CardContent>
                          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                       </Card>
                     </Link>
                   </motion.div>
                 )
              })}
           </div>
        </div>

        {/* Final Industry CTA */}
        <div className="py-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent 100%)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Secure your {industry.name} facilities globally.</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-medium">Join leading organizations who have reduced their liability and operational costs by up to 70% using Sporada AI.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" variant="secondary" asChild className="h-16 px-12 text-lg font-black rounded-xl shadow-2xl">
                 <Link to="/contact">Get Custom Deployment Plan</Link>
               </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// Internal Icon Fix
function CheckCircle2(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
