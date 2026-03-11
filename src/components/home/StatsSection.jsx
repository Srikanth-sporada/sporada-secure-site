import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { label: "Active Clients", value: 1750, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "+" },
  { label: "Incidents Prevented", value: 875, suffix: "+" },
  { label: "Cost Savings", value: 60, suffix: "%" },
];

export function StatsSection() {
  return (
    <section className="py-20 relative bg-primary/10 border-y border-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-white/5 shadow-xl"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-primary mb-2">
                <AnimatedCounter end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
