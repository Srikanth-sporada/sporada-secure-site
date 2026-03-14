import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { industries } from "@/data/industries";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import * as Icons from "lucide-react";

export function IndustriesGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center justify-center mb-12 gap-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We <span className="text-primary">Secure</span></h2>
            <p className="text-muted-foreground text-lg">
              Every vertical has unique vulnerabilities. Our AI models are trained on millions of hours of industry-specific footage to provide targeted protection.
            </p>
          </div>
          <Link to="/industries" className="text-primary hover:text-foreground font-semibold flex items-center justify-center group transition-colors mt-2">
            View All Industries
            <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, index) => {
            const IconComponent = Icons[ind.icon] || Icons.Shield;

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/industries/${ind.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                  <Card className="h-full bg-card/40 border-border/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 text-primary border border-border group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{ind.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                        {ind.shortDescription}
                      </CardDescription>
                    </CardContent>

                    {/* Hover Glow Edge effect */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
