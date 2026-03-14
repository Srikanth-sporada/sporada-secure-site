import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/shared/SEOHead";
import { solutions, platformFeatures, globalHowItWorks } from "@/data/solutions";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertCircle, Sparkles, ArrowRight, Zap, Target } from "lucide-react";
import * as Icons from "lucide-react";

import secure360Img from '@/assets/secure-360.png';
import securePatrolImg from '@/assets/secure-patrol.png';
import secureRetailImg from '@/assets/secure-retail.png';
import secureSafetyImg from '@/assets/secure-safety.png';
import secureCleanImg from '@/assets/secure-clean.png';
import secureCheckImg from '@/assets/secure-check.png';
import retailAnalyticsImg from '@/assets/secure-analytics.png';
import secureCareImg from '@/assets/secure-care.png';
import secure247Img from '@/assets/secure_24x7.png';
import secureAttendanceImg from '@/assets/secure-attendance.png';
import secureSenseImg from '@/assets/secure-sense.png';
import secureTrackImg from '@/assets/secure-track.png';

const solutionImages = {
  "secure-360": secure360Img,
  "secure-patrol": securePatrolImg,
  "secure-retail": secureRetailImg,
  "secure-safety-analytics": secureSafetyImg,
  "secure-clean": secureCleanImg,
  "secure-check": secureCheckImg,
  "retail-analytics": retailAnalyticsImg,
  "secure-care": secureCareImg,
  "secure-247": secure247Img,
  "secure-attendance": secureAttendanceImg,
  "secure-sense": secureSenseImg,
  "secure-track": secureTrackImg,
};

export default function SolutionDetail() {
  const { slug } = useParams();

  const solution = solutions.find(sol => sol.slug === slug);

  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  const relatedIndustries = industries.filter(ind => solution.industries.includes(ind.slug));

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
        title={solution.seoTitle || `${solution.name} | Sporada Secure`}
        description={solution.seoDescription || solution.description}
      />
      <div className="min-h-screen bg-background">

        {/* Solution Hero */}
        <div className="relative pt-24 pb-16 border-b border-border/40 overflow-hidden text-center px-4 bg-gradient-to-b from-card/50 to-background">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl mb-8 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.15)] ring-4 ring-primary/5 p-3 overflow-hidden">
              <div
                style={{
                  WebkitMaskImage: `url(${solutionImages[solution.slug]})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${solutionImages[solution.slug]})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
                className="w-full h-full bg-primary"
                aria-label={solution.name}
              />
            </div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-xs bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">{solution.category} Engine</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">{solution.name}</h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-6 max-w-3xl leading-tight">{solution.tagline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">{solution.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="h-12 px-8 shadow-lg shadow-primary/20 text-base font-bold rounded-xl">
                <Link to="/contact">Request a Demo <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Narrative Section: Reality vs Expectations */}
        <div className="py-12 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Pain Points */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card/40 border-l-4 border-red-500/50 p-8 md:p-12 rounded-2xl md:rounded-r-3xl ring-1 ring-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8 text-red-500">
                  <AlertCircle className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">Current Reality</h3>
                </div>
                <ul className="space-y-5">
                  {(solution.currentReality || []).map((point, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 group-hover:scale-150 transition-transform shrink-0" />
                      <span className="text-foreground/80 font-medium leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Expectations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 border-l-4 border-primary p-8 md:p-12 rounded-2xl md:rounded-r-3xl ring-1 ring-primary/10 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">Your Expectations</h3>
                </div>
                <ul className="space-y-5">
                  {(solution.customerExpectations || []).map((point, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground font-bold leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Target Audience Bar */}
        <div className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl font-bold italic opacity-95">"{solution.targetUser}"</p>
          </div>
        </div>

        {/* How It Specifically Works (Workflow) */}
        {solution.howItSpecificallyWorks && (
          <div className="py-12 container mx-auto px-4 md:px-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">The <span className="text-primary">Operational Workflow</span></h2>
              <p className="text-muted-foreground text-lg">A systematic, AI-driven process from detection to resolution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.howItSpecificallyWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-6 bg-card border border-border/50 rounded-2xl group hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute top-4 right-4 text-4xl font-black text-primary/20 group-hover:text-primary/30 transition-colors">{i + 1}</div>
                  <h4 className="text-lg font-bold mb-3 pr-8 leading-tight">{step}</h4>
                  <div className="h-1 w-8 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Global Deterrence Process (The 3-Step) */}
        <div className="py-12 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black mb-3">Core <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sporada Deterrence</span></h2>
                <p className="text-muted-foreground text-sm">Our foundation for 100% incident prevention.</p>
              </div>
              <div className="relative">
                {/* Connecting Line (Timeline track) */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />
                
                <div className="space-y-8">
                  {globalHowItWorks.map((item, i) => {
                    const StepIcon = Icons[item.icon] || Zap;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl bg-card border border-border/40 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all group"
                      >
                        {/* Connecting dot (Mobile & Desktop) */}
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 hidden md:flex items-center justify-center -translate-x-[7px] z-10">
                           <div className="w-1.5 h-1.5 rounded-full bg-background" />
                        </div>
                        
                        {/* Left Side: Icon & Numbering */}
                        <div className="md:ml-12 shrink-0 flex items-center justify-center relative">
                          <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                            <StepIcon className="w-8 h-8 text-primary" />
                          </div>
                          
                          {/* Floating Badge Number */}
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md z-20">
                             <span className="text-primary font-black text-xs">0{item.step}</span>
                          </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="flex-1 pt-2 md:pt-0">
                          <h3 className="text-xl md:text-2xl font-black mb-2 text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Features Chip Grid */}
        <div className="py-12 container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tactical <span className="text-primary">Capabilities</span></h2>
            <p className="text-muted-foreground">Deep technical features integrated into {solution.name}.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {solution.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all flex items-center gap-3 group shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-foreground transition-colors">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* High Security / Analytics Specific Sections */}
        {(solution.highSecurityOptions || solution.businessAnalyticsFeatures) && (
          <div className="py-12 bg-background border-y border-border/40">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Enterprise <span className="text-primary">Customization</span></h2>
                <p className="text-muted-foreground">Specialized modules tailored for specific high-risk or analytical or analytical deployments.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(solution.highSecurityOptions || solution.businessAnalyticsFeatures || []).map((ext, i) => (
                  <motion.div
                    key={ext.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 border-border/50 hover:bg-card hover:border-accent/40 transition-all border-dashed">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold mb-4 text-accent">{ext.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{ext.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Platform Features */}
        <div className="py-12 bg-card/20 container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Standard <span className="text-primary">Platform Ecosystem</span></h2>
            <p className="text-muted-foreground mt-4">Every Sporada Secure solution includes our core cloud-first features.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feat, i) => {
              const Icon = Icons[feat.icon] || Sparkles;
              return (
                <div key={feat.id} className="p-6 rounded-2xl bg-background border border-border/40 flex items-start gap-5 group hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{feat.title}</h4>
                    <p className="text-sm text-muted-foreground italic leading-tight">{feat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Serving Industries */}
        {relatedIndustries.length > 0 && (
          <div className="py-12 bg-background border-t border-border/40 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-black mb-12 uppercase tracking-wide">Deployment <span className="text-primary">Verticles</span></h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {relatedIndustries.map((ind, i) => {
                  const IndIcon = Icons[ind.icon] || Icons.Briefcase;
                  return (
                    <motion.div key={ind.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <Link to={`/industries/${ind.slug}`}>
                        <div className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-card border border-border/80 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer shadow-sm group">
                          <IndIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="font-bold text-foreground group-hover:text-primary transition-colors">{ind.name}</span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Final CTA Strip */}
        <div className="py-12 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent 100%)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to secure your premises?</h2>
            <Button size="lg" variant="secondary" asChild className="h-16 px-12 text-lg font-black rounded-2xl shadow-2xl">
              <Link to="/contact">Get a Personalized Quote</Link>
            </Button>
          </div>
        </div>

      </div>
    </>
  );
}
