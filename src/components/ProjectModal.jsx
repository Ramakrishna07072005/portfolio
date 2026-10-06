import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Terminal, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  Activity, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-carbon-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-carbon-900 border border-carbon-700 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-carbon-800 bg-carbon-850/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-copper-500/10 text-copper-400 border border-copper-500/30">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-carbon-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-signal-emerald">
              <Activity className="w-3.5 h-3.5" />
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-carbon-400 hover:text-white hover:bg-carbon-800 focus:outline-none focus:ring-2 focus:ring-copper-500 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm font-mono text-copper-400 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Media / Gallery Area */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-carbon-750 bg-carbon-950 flex items-center justify-center max-h-[380px]">
              <img
                src={images[activeImage]}
                alt={`${project.title} preview`}
                className="w-full h-auto max-h-[380px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Gallery Thumbnails if multiple images exist */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImage === idx
                        ? 'border-copper-500 shadow-md shadow-copper-500/20'
                        : 'border-carbon-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div className="bg-carbon-950/60 rounded-xl p-4 sm:p-5 border border-carbon-800/80">
            <h3 className="text-xs font-mono font-semibold uppercase text-carbon-400 tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-copper-400" />
              Technical Overview
            </h3>
            <p className="text-sm sm:text-base text-carbon-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hardware & Software Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Hardware Bill of Materials / Components */}
            <div className="bg-carbon-950/60 rounded-xl p-4 border border-carbon-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase text-carbon-400 tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-copper-400" />
                Hardware Components &amp; ICs
              </h3>
              <ul className="space-y-1.5">
                {project.hardware.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-carbon-300 flex items-start gap-2">
                    <span className="text-copper-500 font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Firmware / Software Stack */}
            <div className="bg-carbon-950/60 rounded-xl p-4 border border-carbon-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase text-carbon-400 tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-signal-cyan" />
                Firmware &amp; Software Stack
              </h3>
              <ul className="space-y-1.5">
                {project.software.map((item, i) => (
                  <li key={i} className="text-xs sm:text-sm text-carbon-300 flex items-start gap-2">
                    <span className="text-signal-cyan font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase text-carbon-400 tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-signal-emerald" />
              Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="p-3 rounded-lg bg-carbon-850 border border-carbon-800 text-xs sm:text-sm text-carbon-200 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-emerald mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Engineering Contribution */}
          {project.contribution && (
            <div className="p-4 rounded-xl bg-copper-500/5 border border-copper-500/20 space-y-1.5">
              <h3 className="text-xs font-mono font-semibold uppercase text-copper-400 tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                My Direct Engineering Contribution
              </h3>
              <p className="text-xs sm:text-sm text-carbon-200 leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-carbon-800 bg-carbon-850/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-800 text-carbon-300 border border-carbon-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-white font-mono text-xs border border-carbon-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-copper-500 hover:bg-copper-600 text-carbon-950 font-mono text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-carbon-300 hover:text-white text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
