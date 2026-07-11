import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, RotateCcw, ArrowRight, ShieldCheck, Cpu, BarChart3, Database } from "lucide-react";
import { portfolioData } from "../data";

export default function Hero() {
  const [keynoteStep, setKeynoteStep] = useState(0);

  const steps = [
    {
      subtitle: "A REVOLUTIONARY APPOINTMENT",
      title: "Three separate professionals.",
      desc: "In today's corporate world, enterprises struggle with three distinct needs: complex financial reporting, deep risk compliance auditing, and breakthrough data intelligence automation.",
      quote: "These are usually three completely separate departments. Working in silos. Moving slowly.",
      color: "from-blue-500/20 to-indigo-500/10",
      icon: <Database className="w-8 h-8 text-apple-blue" />
    },
    {
      subtitle: "PRODUCT NUMBER ONE",
      title: "A Highly Analytical FP&A Associate.",
      desc: "Deep knowledge of financial planning, expense variance analysis, forecasting models, and standard operational accounting practices.",
      quote: "No guessing. Pure, rigorous corporate performance architecture.",
      color: "from-amber-500/20 to-orange-500/10",
      icon: <BarChart3 className="w-8 h-8 text-amber-500" />
    },
    {
      subtitle: "PRODUCT NUMBER TWO",
      title: "An Investment Risk & Compliance Advisor.",
      desc: "Rigorous regulatory adherence, internal audit verification, risk control assessment, and advisory capabilities.",
      quote: "Ensuring ironclad stability. Ex-PwC Advisory Associate experience.",
      color: "from-purple-500/20 to-pink-500/10",
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />
    },
    {
      subtitle: "PRODUCT NUMBER THREE",
      title: "A Data Intelligence & Insights Developer.",
      desc: "Advanced Alteryx data preparation, Tableau & Power BI visualizations, python models, and VBA custom workflow automation.",
      quote: "Eliminating manual overhead. Putting computers to work.",
      color: "from-emerald-500/20 to-teal-500/10",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />
    },
    {
      subtitle: "THE REVEAL",
      title: "These are not three separate individuals.",
      desc: "This is one highly integrated, process-oriented data intelligence professional.",
      quote: "And we are calling him Arijit Sadhu.",
      color: "from-apple-blue/20 to-cyan-500/10",
      action: true,
      icon: <div className="text-xl font-bold text-apple-blue font-display">as.</div>
    }
  ];

  return (
    <section id="overview" className="relative min-h-screen bg-black flex flex-col justify-center pt-28 px-6 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-zinc-800/20 blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Sleek Style Section Name */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase font-mono mb-4"
        >
          Special Keynote Presentation
        </motion.span>

        {/* Dynamic Keynote Frame with thin borders and minimal background */}
        <div className="w-full bg-zinc-900/30 border border-white/10 rounded-2xl p-8 md:p-12 mb-10 backdrop-blur-sm min-h-[420px] flex flex-col justify-between shadow-2xl relative overflow-hidden" id="keynote-card">
          
          {/* Slide Indicator Dots */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setKeynoteStep(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  keynoteStep === idx ? "w-6 bg-white" : "bg-zinc-800 hover:bg-zinc-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                id={`keynote-dot-${idx}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={keynoteStep}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center items-center text-center flex-grow py-6"
            >
              {/* Category Icon Badge */}
              <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">
                {steps[keynoteStep].icon}
              </div>

              {/* Sub-label */}
              <span className="text-white text-[10px] font-extrabold tracking-[0.2em] uppercase font-mono mb-3 block">
                {steps[keynoteStep].subtitle}
              </span>

              {/* Main Heading */}
              <h2 className="text-white text-2xl md:text-4xl font-display font-bold tracking-tight max-w-2xl leading-tight mb-4">
                {steps[keynoteStep].title}
              </h2>

              {/* Core Description */}
              <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-6 font-sans leading-relaxed">
                {steps[keynoteStep].desc}
              </p>

              {/* Supporting Quote / Detail */}
              <blockquote className="text-white/80 font-display italic text-xs md:text-sm max-w-lg border-l-2 border-white/35 pl-4 py-1 text-left">
                "{steps[keynoteStep].quote}"
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Keynote Navigation and CTA */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              SLIDE {keynoteStep + 1} OF {steps.length}
            </span>

            <div className="flex gap-2">
              {keynoteStep > 0 && (
                <button
                  onClick={() => setKeynoteStep(keynoteStep - 1)}
                  className="p-2.5 rounded-full border border-white/10 hover:bg-zinc-900 text-white transition-colors"
                  aria-label="Previous Slide"
                  id="keynote-prev-btn"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              {keynoteStep < steps.length - 1 ? (
                <button
                  onClick={() => setKeynoteStep(keynoteStep + 1)}
                  className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 tracking-tight transition-all"
                  id="keynote-next-btn"
                >
                  <span>Next Slide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => setKeynoteStep(0)}
                  className="bg-transparent border border-white/20 text-white hover:bg-white/5 px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 tracking-tight transition-all"
                  id="keynote-restart-btn"
                >
                  <span>Replay Keynote</span>
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Real Profile Intro - Pure Sleek Interface design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mt-12"
          id="profile-brief"
        >
          <h1 className="text-5xl md:text-[85px] font-black tracking-tighter leading-[0.85] text-white mb-8 uppercase font-display">
            Arijit Sadhu<br/>
            <span className="text-zinc-600">Data Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-sans font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            {portfolioData.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {portfolioData.topSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-200 tracking-tight font-medium hover:border-white/30 transition-colors"
                id={`top-skill-badge-${index}`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Down arrow link indicator */}
          <div className="flex flex-col items-center gap-2 text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-mono">
            <span>Scroll down to see the work</span>
            <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent mt-2 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
