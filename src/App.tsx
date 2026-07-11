/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import KeynoteExperience from "./components/KeynoteExperience";
import TechSpecs from "./components/TechSpecs";
import OneMoreThing from "./components/OneMoreThing";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white relative font-sans selection:bg-white/15 selection:text-white" id="portfolio-root">
      
      {/* Premium Ambient Top Gradient Shadow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-zinc-900/10 to-transparent pointer-events-none" />

      {/* Glassmorphic Top Navigation Header */}
      <Header />

      <main>
        {/* Widescreen Keynote Introduction Deck */}
        <Hero />

        {/* Dynamic Professional Milestones Timeline Slider */}
        <KeynoteExperience />

        {/* Detailed High-Performance System Specifications Grid */}
        <TechSpecs />

        {/* Climax Clue: Accolades & Contact Interface */}
        <OneMoreThing />
      </main>

      {/* Elegant Sleek Spec Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6" id="portfolio-footer">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-zinc-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-medium text-zinc-300">
              Copyright © 2026 Arijit Sadhu. All rights reserved.
            </p>
            <p className="font-light">
              Designed with simplicity and extreme focus. Simplicity is the ultimate sophistication.
            </p>
          </div>
          
          <div className="flex gap-6 font-mono uppercase tracking-[0.25em] text-[9px]">
            <a
              href="https://www.linkedin.com/in/arijit-sadhu-data-analyst"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-zinc-400"
              id="footer-linkedin-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:as11.ishaan@gmail.com"
              className="hover:text-white transition-colors text-zinc-400"
              id="footer-email-link"
            >
              Direct Mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
