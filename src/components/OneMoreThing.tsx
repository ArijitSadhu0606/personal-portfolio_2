import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Sparkles, Linkedin, Mail, ArrowUpRight, Send, CheckCircle } from "lucide-react";
import { portfolioData } from "../data";

export default function OneMoreThing() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        // Automatically reset state after showing elegant validation success
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div id="one-more-thing-container">
      {/* "One More Thing..." Dramatic Pause Section */}
      <section id="accolades" className="py-28 bg-black text-white relative flex flex-col justify-center items-center overflow-hidden border-t border-white/10">
        
        {/* Subtle background ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-zinc-800/10 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <span className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase font-mono block mb-5">
              03 / Keynote Climax
            </span>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase mb-4">
              One More Thing...
            </h3>
            <p className="text-zinc-400 font-sans text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              "It is the small victories, the sudden challenges solved, and the peer acknowledgment that validate a standard of perfect execution."
            </p>
          </motion.div>

          {/* Awards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left" id="awards-grid">
            {portfolioData.awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                id={`award-card-${index}`}
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white mb-2 leading-snug">
                    {award.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
                    {award.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 mt-5 block uppercase tracking-wider">
                  Verified Distinction
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Steve Jobs Style Call to Action / Contact Form */}
      <section id="contact" className="py-24 bg-zinc-950 text-white border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Direct Hook / Callout */}
          <div className="space-y-6">
            <span className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase font-mono block">
              04 / Contact & Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-tight">
              Let's make something wonderful.
            </h2>
            <p className="text-zinc-400 text-base font-sans font-light leading-relaxed">
              "We're here to put a dent in the universe. If you share a passion for crisp, process-driven architecture, absolute data clarity, or intelligent systems, get in touch today. Let's design the next big thing."
            </p>
            
            <div className="pt-6 space-y-4">
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition-colors w-fit group"
                id="contact-email-link"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Direct Email</span>
                  <span className="font-medium">{portfolioData.email}</span>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition-colors w-fit group"
                id="contact-linkedin-link"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Connect on LinkedIn</span>
                  <span className="font-medium flex items-center gap-1">
                    linkedin.com/in/arijit-sadhu <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 shadow-2xl relative overflow-hidden" id="contact-form-container">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 space-y-4"
                id="form-success-state"
              >
                <CheckCircle className="w-12 h-12 text-white animate-pulse" />
                <h3 className="text-xl font-display font-black tracking-tight uppercase text-white">
                  Transmission Complete.
                </h3>
                <p className="text-sm text-zinc-400 max-w-xs font-sans leading-relaxed">
                  "Your details have been successfully captured. We'll follow up shortly. Simple as that."
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="portfolio-contact-form">
                <div>
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                    What is your name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                    Where can we reach you?
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                    Tell us about the project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision or inquiry..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-white/30 focus:outline-none transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-zinc-200 text-black py-3 rounded-xl font-semibold text-xs tracking-tight transition-all duration-200 flex items-center justify-center gap-2"
                  id="contact-form-submit"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
