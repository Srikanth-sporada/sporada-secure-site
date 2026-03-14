import { motion } from "framer-motion";
import { Eye, ShieldBan, BellRing, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    id: "detect",
    title: "Detect",
    icon: <Eye className="w-8 h-8 text-primary" />,
    description: "AI-powered cameras instantly identify unauthorized access, loitering, or perimeter breaches in real-time.",
  },
  {
    id: "deter",
    title: "Deter",
    icon: <ShieldBan className="w-8 h-8 text-destructive" />,
    description: "Live monitoring operators trigger two-way audio warnings, flashing strobes, or sirens to scare off intruders.",
  },
  {
    id: "notify",
    title: "Notify",
    icon: <BellRing className="w-8 h-8 text-accent" />,
    description: "Instant alerts are pushed to your mobile device and local authorities are dispatched without delay.",
  },
  {
    id: "secure",
    title: "Secure",
    icon: <Lock className="w-8 h-8 text-emerald-500" />,
    description: "Your assets remain completely safe, and detailed incident reports are securely logged to the cloud.",
  }
];

export function HowItWorks() {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Proactive Security in <span className="text-primary">4 Steps</span></h2>
          <p className="text-muted-foreground text-lg">
            We don't just record crimes; our smart AI and highly-trained remote operators actively prevent them from happening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group h-full relative overflow-hidden">
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative z-10 text-center pb-2 pt-8">
                  <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center border border-border shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center text-muted-foreground">
                  {step.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
