import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Mail, Menu, X, Terminal } from "lucide-react";
import { portfolioData } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Overview", target: "overview" },
    { label: "Experience", target: "experience" },
    { label: "Specifications", target: "specs" },
    { label: "Accolades", target: "accolades" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-apple-black/80 backdrop-blur-md border-b border-apple-border/50 py-3"
            : "bg-transparent py-5"
        }`}
        id="navbar"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("overview")}
            className="flex items-center gap-2 text-white font-display text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
            id="nav-logo"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="tracking-tighter uppercase text-sm font-semibold">as11.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-xs font-medium text-zinc-400">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="hover:text-white transition-colors tracking-wider text-[11px]"
                id={`nav-item-${item.target}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              id="header-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
              id="header-email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200"
              id="nav-cta"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-zinc-400 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[80px] bg-black border-b border-white/10 z-40 md:hidden p-6"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-5 text-center text-sm font-medium tracking-wide">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider text-xs py-2"
                  id={`mobile-nav-item-${item.target}`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-white/10" />
              <div className="flex justify-center gap-6 py-2">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  id="mobile-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Email"
                  id="mobile-email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-white text-black py-3 rounded-full text-xs font-semibold"
                id="mobile-nav-cta"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
