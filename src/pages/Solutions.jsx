import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/shared/SEOHead";
import { solutions } from "@/data/solutions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

export default function Solutions() {
  const categories = ["All", ...new Set(solutions.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <>
      <SEOHead 
        title="Our Solutions" 
        description="Explore Sporada Secure's comprehensive suite of AI video analytics and surveillance solutions, from perimeter defense to retail analytics."
      />
      <div className="min-h-screen bg-background pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
               Intelligent <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Video Analytics</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              More than just recording. We analyze every pixel to ensure absolute protection, operational compliance, and actionable insights.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-6 shadow-sm border-border/60"
              >
                {cat}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSolutions.map((sol) => {
                const IconComponent = Icons[sol.icon] || Icons.Shield;
                return (
                  <motion.div
                    key={sol.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/solutions/${sol.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl -z-10" />
                      <Card className="h-full bg-card/60 backdrop-blur-md border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-lg bg-background flex items-center justify-center text-primary border border-border group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              <IconComponent className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-semibold bg-background border border-border px-3 py-1 rounded-full text-muted-foreground">
                              {sol.category}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{sol.name}</h3>
                          <p className="text-sm font-semibold text-primary mb-4">{sol.tagline}</p>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {sol.description}
                          </p>

                          <div className="flex items-center text-sm font-semibold text-foreground mt-auto group-hover:text-primary transition-colors">
                            View details <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </>
  );
}
