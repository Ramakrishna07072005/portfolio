import React from 'react';
import { siteConfig } from '../config/site';
import { 
  Cpu, 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Layers, 
  Zap, 
  Activity,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 circuit-grid-bg overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-copper-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-signal-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative technical grid traces */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#d97706" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#d97706" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        
        {/* Status Chip / Hardware Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-carbon-900/90 border border-copper-500/30 shadow-lg shadow-black/50 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-emerald"></span>
          </span>
          <span className="text-xs font-mono text-copper-400 font-semibold tracking-wide uppercase">
            {siteConfig.heroBadge}
          </span>
        </div>

        {/* Primary Name & Titles */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            <span>{siteConfig.name}</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl font-mono text-copper-400 font-medium">
            <span className="px-2.5 py-0.5 rounded bg-carbon-900 border border-carbon-800">
              {siteConfig.degree}
            </span>
            <span className="text-carbon-600 hidden sm:inline">•</span>
            <span className="px-2.5 py-0.5 rounded bg-carbon-900 border border-carbon-800 text-carbon-200">
              {siteConfig.role}
            </span>
          </div>
        </div>

        {/* Concise Objective-Derived Introduction */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-carbon-300 font-sans leading-relaxed">
          {siteConfig.heroSummary}
        </p>

        {/* Primary Action Buttons (CTAs) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          
          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-copper-500 hover:bg-copper-600 text-carbon-950 font-mono text-sm font-bold shadow-lg shadow-copper-500/25 hover:shadow-copper-500/40 hover:-translate-y-0.5 transition-all"
          >
            <span>View Hardware Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Download Resume */}
          <a
            href={siteConfig.resume.downloadUrl}
            download={siteConfig.resume.filename}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-carbon-900 hover:bg-carbon-850 text-white border border-carbon-700 hover:border-copper-500/50 font-mono text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-4 h-4 text-copper-400" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-carbon-900/60 hover:bg-carbon-850 text-carbon-300 hover:text-white border border-carbon-800 font-mono text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-signal-cyan" />
            <span>Contact Me</span>
          </a>

        </div>

        {/* Professional Quick Links */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-carbon-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-carbon-700">|</span>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-carbon-400 hover:text-copper-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span className="text-carbon-700">|</span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 text-xs font-mono text-carbon-400 hover:text-signal-emerald transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <span className="text-carbon-700">|</span>
          <a
            href={siteConfig.resume.viewHtmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-carbon-400 hover:text-copper-400 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume HTML</span>
          </a>
        </div>

        {/* Hardware Engineering Metrics Strip */}
        <div className="pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {siteConfig.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-carbon-900/70 border border-carbon-800/80 backdrop-blur-sm text-left hover:border-copper-500/40 transition-colors"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-carbon-400">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base font-bold font-mono text-white mt-1">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
