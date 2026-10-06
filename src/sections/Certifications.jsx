import React from 'react';
import { 
  certifications, 
  hackathons, 
  workshopsConducted, 
  engineeringAchievements,
  languages 
} from '../data/certifications';
import { 
  Award, 
  Trophy, 
  Presentation, 
  Bot, 
  Cpu, 
  BatteryCharging, 
  Zap, 
  Languages, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const achievementIcons = {
  Bot,
  Cpu,
  BatteryCharging,
  Zap
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
          <span className="w-8 h-[1px] bg-copper-500"></span>
          <span>Credentials &amp; Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Certifications, Hackathons &amp; Workshops
        </h2>
        <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
          National engineering hackathon semi-finalist, NPTEL Elite + Silver awards, and community workshop instructor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Certifications & Hackathons (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* NPTEL Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-copper-400" />
              <span>NPTEL Elite Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-carbon-900/80 border border-copper-500/30 hover:border-copper-500/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-copper-500/15 text-copper-400 border border-copper-500/30">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-mono text-carbon-400">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-carbon-400">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-carbon-300 pt-1 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="text-right sm:self-center flex-shrink-0">
                    <div className="text-lg font-mono font-extrabold text-copper-400">
                      {cert.score.split('—')[0]}
                    </div>
                    <div className="text-[11px] font-mono text-signal-emerald">
                      Silver Medalist
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>National Hackathon Recognition</span>
            </h3>

            <div className="space-y-3">
              {hackathons.map((hack, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-amber-500/40 transition-all space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                        {hack.achievement}
                      </span>
                      <span className="text-xs font-mono text-carbon-400">
                        Organized by {hack.organizer}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {hack.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed">
                    {hack.details}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {hack.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-850 text-carbon-300 border border-carbon-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops Conducted */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Presentation className="w-4 h-4 text-signal-cyan" />
              <span>Workshops Conducted</span>
            </h3>

            <div className="space-y-3">
              {workshopsConducted.map((ws, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-signal-cyan/40 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-signal-cyan/10 text-signal-cyan border border-signal-cyan/20">
                      {ws.role}
                    </span>
                    <span className="text-xs font-mono text-carbon-400">
                      {ws.venue}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {ws.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed">
                    {ws.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ws.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-850 text-carbon-300 border border-carbon-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Key Hardware Achievements & Languages (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-copper-400" />
              <span>Key Hardware Accomplishments</span>
            </h3>

            <div className="space-y-3">
              {engineeringAchievements.map((ach, idx) => {
                const Icon = achievementIcons[ach.icon] || Cpu;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-carbon-900/60 border border-carbon-800 hover:border-carbon-700 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-carbon-850 border border-carbon-750 text-copper-400 flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-mono font-bold text-white">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-carbon-400 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 space-y-3">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Languages className="w-4 h-4 text-signal-emerald" />
              <span>Languages</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-carbon-850 border border-carbon-750">
                  <div className="text-sm font-mono font-bold text-white">
                    {lang.name}
                  </div>
                  <div className="text-[11px] text-carbon-400 mt-0.5">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
