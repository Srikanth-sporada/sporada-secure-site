import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { solutions } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

const categories = ["All", ...new Set(solutions.map((s) => s.category))];

export function SolutionsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore Our <span className="text-primary">Solutions</span></h2>
          <p className="text-muted-foreground text-lg">
            Purpose-built intelligent solutions designed to provide ultimate protection, ensure compliance, and unlock actionable analytics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-6 transition-all shadow-sm"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Solutions Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <Link to={`/solutions/${sol.slug}`} className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                    <Card className="h-full bg-background border-border/50 hover:border-primary/50 relative overflow-hidden transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center mb-6 text-primary border border-border group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{sol.name}</h3>
                        <p className="text-sm font-medium text-muted-foreground mb-3">{sol.tagline}</p>
                        <p className="text-sm text-muted-foreground/80 line-clamp-2">
                          {sol.description}
                        </p>
                      </CardContent>
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
