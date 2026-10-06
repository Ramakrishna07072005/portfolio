import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { 
  Menu, 
  X, 
  Download, 
  Cpu, 
  ExternalLink,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scrollspy
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Timeline', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-carbon-950/90 backdrop-blur-md border-b border-carbon-800 shadow-xl shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-carbon-900 border border-copper-500/40 flex items-center justify-center text-copper-400 group-hover:border-copper-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                <span>{siteConfig.shortName}</span>
                <span className="hidden sm:inline-block text-xs text-copper-400 font-mono px-1.5 py-0.5 rounded bg-copper-500/10 border border-copper-500/20">
                  HW // VLSI
                </span>
              </div>
              <p className="text-[11px] text-carbon-400 font-mono tracking-tight hidden sm:block">
                Embedded Hardware Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-carbon-900/60 p-1.5 rounded-full border border-carbon-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-copper-500/20 text-copper-400 border border-copper-500/30 font-semibold shadow-sm'
                      : 'text-carbon-300 hover:text-white hover:bg-carbon-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 hover:text-white hover:border-copper-500/50 hover:bg-carbon-850 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 hover:text-white hover:border-copper-500/50 hover:bg-carbon-850 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.resume.downloadUrl}
              download={siteConfig.resume.filename}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-carbon-950 font-mono text-xs font-semibold shadow-md shadow-copper-500/20 hover:shadow-copper-500/40 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={siteConfig.resume.downloadUrl}
              download={siteConfig.resume.filename}
              className="p-2 rounded-lg bg-copper-500 text-carbon-950 text-xs font-bold"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-copper-500"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-carbon-950/95 border-b border-carbon-800 px-4 pt-3 pb-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-copper-500/15 text-copper-400 border border-copper-500/30'
                    : 'text-carbon-300 hover:bg-carbon-900 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-carbon-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-carbon-900 text-carbon-300 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-carbon-900 text-carbon-300 hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.resume.viewHtmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-carbon-900 text-carbon-300 hover:text-white flex items-center gap-1 text-xs font-mono"
                >
                  <FileText className="w-4 h-4" /> View HTML Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
