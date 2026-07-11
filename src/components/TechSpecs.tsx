import { motion } from "motion/react";
import { Cpu, Award, BookOpen, Layers } from "lucide-react";
import { portfolioData } from "../data";

export default function TechSpecs() {
  // Group technologies by category
  const categories = Array.from(new Set(portfolioData.technologies.map(t => t.category)));

  return (
    <section id="specs" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Spec Intro */}
        <div className="text-center md:text-left mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase font-mono block mb-4"
          >
            02 / System Specifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase mb-6"
          >
            Built for High Performance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-400 text-base max-w-xl font-sans"
          >
            "It is not enough to have a capable design. It must run on the finest architecture available. Here is the direct map of qualifications and protocols."
          </motion.p>
        </div>

        {/* 3-Column Spec Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12">
          
          {/* Column 1: Tech Configurations & Technologies */}
          <div className="lg:col-span-5 space-y-8" id="specs-tech-stack">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-white" />
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">
                Core Engine Config
              </h3>
            </div>

            <div className="space-y-6">
              {categories.map((cat) => (
                <div key={cat} className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-2">
                    {cat}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.technologies
                      .filter((t) => t.category === cat)
                      .map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1 rounded bg-zinc-900 border border-white/10 text-xs font-mono font-medium text-zinc-300 hover:border-white/20 transition-colors"
                        >
                          {tech.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Credentials & Certifications */}
          <div className="lg:col-span-4 space-y-8" id="specs-certifications">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-white" />
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">
                Authorized Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-zinc-900/30 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <h4 className="font-display font-bold text-xs md:text-sm text-zinc-200 leading-tight">
                    {cert.name}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-500 mt-2 block uppercase tracking-wider">
                    Issued by: {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Academic System Architecture (Education) */}
          <div className="lg:col-span-3 space-y-8" id="specs-education">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-white" />
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-white">
                Academic Architecture
              </h3>
            </div>

            <div className="space-y-5">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l border-white/10">
                  <div className="absolute top-1.5 left-[-4px] w-2 h-2 rounded-full bg-white" />
                  
                  <h4 className="font-display font-bold text-xs md:text-sm text-zinc-200 leading-tight mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-[10px] font-sans font-light text-zinc-400 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
