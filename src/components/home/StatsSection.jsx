import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Users, Globe, ShieldCheck, TrendingDown } from "lucide-react";

const stats = [
  { label: "Active Clients", value: 1750, suffix: "+", icon: Users },
  { label: "Countries Served", value: 15, suffix: "+", icon: Globe },
  { label: "Incidents Prevented", value: 875, suffix: "+", icon: ShieldCheck },
  { label: "Cost Savings", value: 60, suffix: "%", icon: TrendingDown },
];

export function StatsSection() {
  return (
    <section className="py-12 relative bg-background overflow-hidden border-b border-border/40">
      {/* Subtle decorative background blur for premium depth */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Colored bottom border that appears on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 mb-6 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-primary/30">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="text-4xl md:text-5xl lg:text-5xl font-black text-foreground mb-3 flex items-baseline tracking-tight">
                  <AnimatedCounter end={stat.value} duration={2.5} />
                  <span className="text-primary tracking-normal">{stat.suffix}</span>
                </div>

                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
