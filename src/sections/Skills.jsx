import React from 'react';
import { skillCategories } from '../data/skills';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Terminal, 
  Code, 
  Activity,
  CheckCircle2,
  Sliders
} from 'lucide-react';

const iconMap = {
  Cpu,
  Layers,
  Zap,
  Terminal,
  Code,
  Activity,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
          <span className="w-8 h-[1px] bg-copper-500"></span>
          <span>Technical Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering &amp; Hardware Skills
        </h2>
        <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
          Practically validated across PCB fabrication, embedded firmware, motor drivers, and lab instrumentation.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = iconMap[category.icon] || Cpu;

          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-carbon-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-carbon-800/80">
                  <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-750 text-copper-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-white leading-snug">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="pt-4 space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-medium text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-carbon-850 text-copper-400 border border-carbon-800">
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-carbon-400 pl-3">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="pt-3 border-t border-carbon-850 text-[11px] font-mono text-carbon-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-signal-emerald" />
                <span>Verified in active projects &amp; lab work</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
