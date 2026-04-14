import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/shared/SEOHead";
import { industries } from "@/data/industries";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

export default function Industries() {
  return (
    <>
      <SEOHead
        title="Industries We Secure"
        description="Discover how Sporada Secure protects various industries including Retail, Logistics, Healthcare, and BFSI with tailored AI video analytics."
      />
      <div className="min-h-screen bg-background py-32">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center max-w-7xl mx-auto mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              Tailored Security For <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Vertical</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Off-the-shelf cameras alert on everything. Our customized industry models alert only on what matters to your business, filtering out 99% of false positives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((ind, i) => {
              const IconComponent = Icons[ind.icon] || Icons.Shield;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full flex flex-col bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 shadow-lg group">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <CardTitle className="text-2xl">{ind.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <CardDescription className="text-base text-muted-foreground mb-8 flex-grow">
                        {ind.shortDescription}
                      </CardDescription>
                      <Button asChild variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-white transition-colors border-border">
                        <Link to={`/industries/${ind.slug}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
