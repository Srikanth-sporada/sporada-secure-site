import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Client <span className="text-primary">Success Stories</span></h2>
          <p className="text-muted-foreground text-lg">
            Hear from industry leaders who have transformed their operations and secured their assets with Sporada Secure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card/40 backdrop-blur-sm border-border/50 h-full relative group hover:border-primary/30 transition-colors">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <CardContent className="p-8 pt-10 flex flex-col h-full">
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                    "{test.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {test.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{test.name}</h4>
                      <p className="text-sm text-muted-foreground">{test.role}, {test.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
