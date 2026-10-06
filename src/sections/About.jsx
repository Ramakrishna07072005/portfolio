import React from 'react';
import { siteConfig } from '../config/site';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Bot, 
  ShieldCheck, 
  Award, 
  MapPin, 
  GraduationCap, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const focusAreas = [
    {
      icon: Cpu,
      title: "Embedded Hardware & Prototyping",
      description: "Hands-on experience transforming circuit schematics into fabricated boards using KiCad and EasyEDA, testing with oscilloscopes and multimeters, and debugging signal issues.",
      color: "text-copper-400"
    },
    {
      icon: Zap,
      title: "Power Stages & Motor Control",
      description: "Designing high-power discrete MOSFET H-bridges (~10A continuous), half-bridge IR2104 gate driver circuits, bootstrap power biasing, and 3-phase BLDC commutation logic.",
      color: "text-signal-amber"
    },
    {
      icon: Bot,
      title: "Robotic Systems Engineering",
      description: "Developing comprehensive mobile platforms like IRIS featuring dual-tier processing topologies (Intel i7 compute + Arduino Mega real-time control), ultrasonic obstacle arrays, and custom power distribution.",
      color: "text-signal-emerald"
    },
    {
      icon: Layers,
      title: "VLSI & Digital Systems Specialization",
      description: "Pursuing M.Tech in VLSI & Embedded Systems at Pondicherry Technological University, focusing on digital IC architectures, microelectronics, and hardware-software integration.",
      color: "text-signal-cyan"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
          <span className="w-8 h-[1px] bg-copper-500"></span>
          <span>Engineering Profile</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About &amp; Hardware Philosophy
        </h2>
        <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
          Specializing in embedded hardware, PCB design, power electronics, and autonomous robotics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Biography Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5 text-carbon-300 leading-relaxed text-sm sm:text-base">
          
          <div className="p-6 rounded-2xl bg-carbon-900/80 border border-carbon-800 space-y-4">
            <p>
              I am an embedded hardware engineer currently pursuing my <strong className="text-white font-semibold">M.Tech in VLSI and Embedded Systems</strong> at <strong className="text-white font-semibold">Pondicherry Technological University (PTU)</strong>. Prior to my master's degree, I graduated with a <strong className="text-white font-semibold">First Class B.Tech in Electronics and Communication Engineering</strong> from Achariya College of Engineering and Technology with a <strong className="text-copper-400 font-semibold">CGPA of 8.46 / 10</strong>.
            </p>

            <p>
              My engineering approach is rooted in practical hardware execution: taking ideas from conceptual block diagrams, designing schematics, routing 2-layer PCBs, soldering SMD components, and writing real-time embedded C firmware to bring systems to life.
            </p>

            <p>
              I am currently working as an <strong className="text-white font-semibold">R&amp;D Intern at Chozha Win Technology</strong> in Puducherry, contributing to the hardware design, bench testing, and hardware implementation of defence-oriented electronic systems.
            </p>

            <p>
              Beyond industrial and academic coursework, I actively build end-to-end hardware projects: from the <strong className="text-white font-semibold">IRIS robotic platform</strong> equipped with high-current discrete motor drivers and a custom 12.6V 36Ah battery pack, to discrete 3-phase BLDC motor controllers and domestic DC backup grids.
            </p>
          </div>

          {/* Practical Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-carbon-900/60 border border-carbon-800 text-xs sm:text-sm text-carbon-200">
              <CheckCircle2 className="w-4 h-4 text-signal-emerald flex-shrink-0" />
              <span>Full lifecycle prototype builder</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-carbon-900/60 border border-carbon-800 text-xs sm:text-sm text-carbon-200">
              <CheckCircle2 className="w-4 h-4 text-signal-emerald flex-shrink-0" />
              <span>Hands-on lab instrumentation &amp; debugging</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-carbon-900/60 border border-carbon-800 text-xs sm:text-sm text-carbon-200">
              <CheckCircle2 className="w-4 h-4 text-signal-emerald flex-shrink-0" />
              <span>Conducted PCB etching workshops</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-carbon-900/60 border border-carbon-800 text-xs sm:text-sm text-carbon-200">
              <CheckCircle2 className="w-4 h-4 text-signal-emerald flex-shrink-0" />
              <span>Defence electronics hardware exposure</span>
            </div>
          </div>

        </div>

        {/* Core Technical Domains (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-carbon-900/60 border border-carbon-800 hover:border-carbon-700 transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-carbon-850 border border-carbon-750">
                    <Icon className={`w-4 h-4 ${area.color}`} />
                  </div>
                  <h3 className="text-sm font-mono font-bold text-white">
                    {area.title}
                  </h3>
                </div>
                <p className="text-xs text-carbon-400 pl-10 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
