import { motion } from "framer-motion";

const TRADEMARKS = [
  "Acme Corp", "Globex", "Initech", "Umbrella", "Stark Ind", "Wayne Ent",
  "Cyberdyne", "Soylent", "Massive Dynamic", "Hooli", "Pied Piper", "Aviato"
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border/40 bg-card overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
          Trusted by 3500+ clients across 15 countries
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-0 w-32 left-0 z-10 bg-gradient-to-r from-card to-transparent" />
        <div className="absolute inset-0 w-32 right-0 z-10 bg-gradient-to-l from-card to-transparent" />

        <motion.div
          className="flex whitespace-nowrap gap-16 py-4 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Double array to create seamless loop */}
          {[...TRADEMARKS, ...TRADEMARKS, ...TRADEMARKS].map((company, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-muted-foreground/30 uppercase tracking-widest hover:text-muted-foreground transition-colors cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
