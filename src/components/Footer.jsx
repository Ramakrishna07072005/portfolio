import React from 'react';
import { siteConfig } from '../config/site';
import { 
  Cpu, 
  Mail, 
  ArrowUp,
  Activity
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-carbon-950 border-t border-carbon-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Identity & Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-carbon-900 border border-copper-500/30 flex items-center justify-center text-copper-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs font-mono text-carbon-400">
              {siteConfig.degree} | {siteConfig.role}
            </p>
          </div>

          {/* System Terminal Status */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-carbon-900 border border-carbon-800 text-[11px] font-mono text-carbon-300">
            <span className="w-2 h-2 rounded-full bg-signal-emerald animate-pulse" />
            <span>SYSTEM: ONLINE // READY FOR EMBEDDED &amp; VLSI ROLES</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-400 hover:text-white hover:border-copper-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-400 hover:text-white hover:border-copper-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-400 hover:text-white hover:border-copper-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-400 hover:text-copper-400 hover:border-copper-500/40 transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Dynamic Copyright & Attribution */}
        <div className="pt-6 border-t border-carbon-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-carbon-500 gap-2">
          <div>
            &copy; {currentYear} {siteConfig.name}. All hardware designs &amp; projects documented.
          </div>
          <div>
            Designed with Modern Engineering &amp; VLSI Technical Aesthetics.
          </div>
        </div>

      </div>
    </footer>
  );
}
