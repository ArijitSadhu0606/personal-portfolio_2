import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { portfolioData, Experience } from "../data";

export default function KeynoteExperience() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeExp: Experience = portfolioData.experiences[selectedIdx];

  return (
    <section id="experience" className="py-24 bg-black border-y border-white/10 relative overflow-hidden">
      {/* Background ambient decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Sleek Intro Typography */}
        <div className="text-center md:text-left mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase font-mono block mb-4"
          >
            01 / Professional Execution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase mb-6"
          >
            The Career Hardware.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-base max-w-xl font-sans"
          >
            "A collection of details is what makes a great design. These are the institutions, leadership chapters, and systems engineered to drive ultimate clarity."
          </motion.p>
        </div>

        {/* Modular Slider Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Sidebar Control */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none border-b border-white/10 lg:border-b-0" id="experience-tabs">
            {portfolioData.experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between gap-4 border ${
                  selectedIdx === idx
                    ? "bg-zinc-900 border-white/10 text-white shadow-lg"
                    : "bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                }`}
                id={`exp-tab-${exp.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${selectedIdx === idx ? "bg-white/10 text-white" : "bg-zinc-900 text-zinc-500"}`}>
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs md:text-sm tracking-tight">{exp.company}</h3>
                    <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{exp.period}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform hidden lg:block ${selectedIdx === idx ? "translate-x-1 text-white" : "opacity-30"}`} />
              </button>
            ))}
          </div>

          {/* Right: Detailed Experience Deck Panel */}
          <div className="lg:col-span-8 bg-zinc-900/30 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm min-h-[380px] flex flex-col justify-between" id="experience-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono mb-4">
                    Active Engagement
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-white mb-2">
                    {activeExp.role}
                  </h3>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-400 font-sans font-light mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {activeExp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                <hr className="border-white/10" />

                {/* Scope & Accomplishments */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-500 font-bold">
                    Core Mandate & Execution
                  </h4>
                  <ul className="space-y-3.5 text-sm font-sans font-light text-white/90 leading-relaxed">
                    {activeExp.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Stack Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mr-2 font-bold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-white" /> Stack Config:
              </span>
              {activeExp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-black border border-white/10 text-[10px] text-zinc-400 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
