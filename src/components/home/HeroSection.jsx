import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Crosshair, Globe, ScanSearch, Activity, Lock, Maximize2 } from "lucide-react";

export function HeroSection() {
  // tracking data for animated overlays - Positioned to avoid center
  const trackedPeople = [
    { id: 1, type: "Person Male", x: "10%", y: "30%", color: "border-cyan-400", labelColor: "bg-cyan-400", delay: 0 },
    { id: 2, type: "Vehicle Transit", x: "75%", y: "20%", color: "border-pink-500", labelColor: "bg-pink-500", delay: 2 },
    { id: 3, type: "Person Female", x: "12%", y: "70%", color: "border-cyan-400", labelColor: "bg-cyan-400", delay: 1.2 },
    { id: 4, type: "Unknown Object", x: "82%", y: "75%", color: "border-pink-500", labelColor: "bg-pink-500", delay: 3.5 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src="/brain/b50ae41d-a060-426a-aa4c-45d5aae66a0b/surveillance_building_bg_1773385428838.png"
          alt="Modern Surveillance Complex"
          className="w-full h-full object-cover scale-[1.05] opacity-20"
        />
        {/* Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.2)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.2)_0%,transparent_50%)]" />

        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Scanning Line */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(37,99,235,0.05),transparent)] bg-[length:100%_12px] animate-scan opacity-30"
        />
        {/* Animated Orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Advanced HUD Layer - Improved Visibility for Light Mode */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Corner HUD Brackets - Increased Offset for Navbar and Visibility */}
        <div className="absolute top-24 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/60 p-2 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-foreground tracking-[0.3em] bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm w-fit">
            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-green-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            SYSTEM_ACTIVE
          </div>
        </div>
        <div className="absolute top-24 right-10 w-32 h-32 border-t-2 border-r-2 border-primary/60 flex flex-col items-end p-2 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-foreground tracking-[0.3em] bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm w-fit">
            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
            REC_LIVE
          </div>
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="h-[2px] bg-primary/80 mt-1 w-full"
          />
        </div>
        <div className="absolute bottom-12 left-10 w-32 h-32 border-b-2 border-l-2 border-primary/60 flex items-end p-2 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
          <div className="text-xs font-bold font-mono text-foreground tracking-[0.3em] bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm">SEC_ZONE_01</div>
        </div>
        <div className="absolute bottom-12 right-10 w-32 h-32 border-b-2 border-r-2 border-primary/60 flex flex-col items-end justify-end p-2 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
          <div className="text-[10px] font-bold font-mono text-foreground/80 tracking-[0.2em] bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm">COORD_N: 28.6139°</div>
          <div className="text-[10px] font-bold font-mono text-foreground/80 tracking-[0.2em] bg-background/40 backdrop-blur-sm px-2 py-1 rounded-sm mt-1">COORD_E: 77.2090°</div>
        </div>

        {/* Vertical Data Stream */}
        <div className="absolute right-[15%] top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden xl:block">
          <div className="absolute top-0 left-2 space-y-2 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0, 1, 0], y: [0, 20] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                className="text-[8px] font-mono text-primary"
              >
                {Math.random().toString(16).substring(2, 6).toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Scanning Radar - With Sweep (Enhanced) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          {/* Radar Sweep Line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-[300px] h-px bg-gradient-to-r from-primary/60 to-transparent origin-left -translate-y-1/2 z-10"
          />
          {/* Static Radar Circles */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full" />
          <div className="absolute inset-[33%] border border-primary/20 rounded-full" />
          <div className="absolute inset-[66%] border border-primary/10 rounded-full" />
        </div>

        {/* Business Context: Sonar/Detection Waves - High Visibility */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 2.5],
                opacity: [0.4, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
                ease: "easeOut"
              }}
              className="absolute w-[400px] h-[400px] border-2 border-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_20px_rgba(37,99,235,0.1)]"
            />
          ))}
        </div>

        {/* Live Monitoring 'Digital Pulse' Waveform - Enhanced Visibility */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-40 pointer-events-none bg-gradient-to-t from-primary/10 to-transparent">
          <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              initial={{ d: "M0 60 Q 150 10, 300 60 T 600 60 T 900 60 T 1200 60" }}
              animate={{
                d: [
                  "M0 60 Q 150 10, 300 60 T 600 60 T 900 60 T 1200 60",
                  "M0 60 Q 150 110, 300 60 T 600 60 T 900 60 T 1200 60",
                  "M0 60 Q 150 10, 300 60 T 600 60 T 900 60 T 1200 60"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/40"
            />
            <motion.path
              initial={{ d: "M0 60 Q 150 90, 300 60 T 600 60 T 900 60 T 1200 60" }}
              animate={{
                d: [
                  "M0 60 Q 150 90, 300 60 T 600 60 T 900 60 T 1200 60",
                  "M0 60 Q 150 30, 300 60 T 600 60 T 900 60 T 1200 60",
                  "M0 60 Q 150 90, 300 60 T 600 60 T 900 60 T 1200 60"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent/30"
            />
          </svg>
          {/* 'Live Activity' Label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-mono text-primary/50 tracking-[0.4em] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live_Active_Monitoring
          </div>
        </div>
      </div>

      {/* Surveillance AI Overlays - Layer Underneath Content */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        {trackedPeople.map((person) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0.6, 0.8, 0.6],
              scale: 1,
              x: [0, 15, -10, 0],
              y: [0, -10, 15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: person.delay
            }}
            className={`absolute ${person.color} border-2 rounded-sm flex flex-col items-start shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
            style={{
              left: person.x,
              top: person.y,
              width: "110px",
              height: "180px"
            }}
          >
            {/* Pulsing Scanning Ring */}
            <motion.div
              animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className={`absolute -inset-4 border border-dashed ${person.color} rounded-full opacity-20`}
            />

            {/* Label */}
            <div className={`px-2 py-0.5 ${person.labelColor} text-white text-[9px] font-bold uppercase tracking-widest rounded-b-sm flex items-center gap-1`}>
              <Maximize2 className="w-2 h-2" />
              {person.type}
            </div>

            {/* Animated Skeleton Tracking */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-4">
              <svg viewBox="0 0 100 150" className="w-full h-full opacity-80">
                <motion.g
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <circle cx="50" cy="30" r="8" fill="red" />
                  <line x1="50" y1="38" x2="50" y2="90" stroke="#FFD700" strokeWidth="4" />
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#00FFFF" strokeWidth="3" />
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#00FFFF" strokeWidth="3" />
                  <line x1="50" y1="90" x2="30" y2="140" stroke="#32CD32" strokeWidth="3" />
                  <line x1="50" y1="90" x2="70" y2="140" stroke="#32CD32" strokeWidth="3" />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Container - Highest Z-Index */}
      <div className="container mx-auto px-4 z-30 relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="px-5 py-2 rounded-full bg-secondary/30 backdrop-blur-xl border border-white/10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x">
                Prevent an Incident Before it Happens
              </span>
            </div>
          </motion.div>

          {/* Main Copy */}
          <div className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] lg:leading-[1.1]"
            >
              <span className="text-foreground block mb-4">SAVE 60% ON</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x italic">
                SECURITY COSTS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              India's Most Trusted AI e-Surveillance Platform. <br className="hidden md:block" />
              <span className="text-foreground font-bold">Detect + Deter + Notify.</span> Real-time architectural monitoring preventing incidents.
            </motion.p>
          </div>

          {/* CTAs - Ensured No Overlap by padding and z-index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-12 w-full sm:w-auto p-4 rounded-3xl backdrop-blur-[2px]"
          >
            <Button size="lg" asChild className="h-16 px-10 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden">
              <Link to="/contact" className="flex items-center gap-2 relative z-10">
                Request a Demo
                <ScanSearch className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="h-16 px-10 rounded-full text-lg font-bold border border-white/10 hover:bg-white/5 transition-all">
              <Link to="/solutions">Our Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
