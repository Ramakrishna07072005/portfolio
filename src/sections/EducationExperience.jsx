import React, { useState } from 'react';
import { education, experience } from '../data/education';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
            <span className="w-8 h-[1px] bg-copper-500"></span>
            <span>Academic &amp; Industry Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Experience
          </h2>
          <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
            M.Tech VLSI &amp; Embedded Systems research, B.Tech ECE, and defence R&amp;D engineering internships.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 rounded-xl bg-carbon-900 border border-carbon-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'education'
                ? 'bg-copper-500 text-carbon-950 font-bold shadow-md shadow-copper-500/20'
                : 'text-carbon-400 hover:text-white hover:bg-carbon-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Degrees ({education.length})</span>
          </button>
          
          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'experience'
                ? 'bg-copper-500 text-carbon-950 font-bold shadow-md shadow-copper-500/20'
                : 'text-carbon-400 hover:text-white hover:bg-carbon-800/60'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Internships &amp; Training ({experience.length})</span>
          </button>
        </div>
      </div>

      {/* Content Display */}
      {activeTab === 'education' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-carbon-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-750 text-copper-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-carbon-850 text-copper-400 border border-carbon-800">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-mono text-copper-400 mt-0.5">
                    {item.institution}
                  </p>
                  {item.score && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-signal-emerald/10 text-signal-emerald border border-signal-emerald/20">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.score}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="pt-2 space-y-1.5 border-t border-carbon-800/80">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-carbon-400 flex items-start gap-2">
                        <span className="text-copper-500 font-mono mt-0.5">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="space-y-4 animate-fadeIn">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-carbon-700 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-copper-500/10 text-copper-400 border border-copper-500/30">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-carbon-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-copper-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {item.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-850 text-carbon-300 border border-carbon-750"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}
