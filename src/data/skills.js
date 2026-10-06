/**
 * =============================================================================
 * TECHNICAL SKILLS DATA
 * =============================================================================
 * Authenticated directly from resume. Grouped by engineering domains
 * without arbitrary percentage bars.
 */

export const skillCategories = [
  {
    title: "Microcontrollers & Embedded Platforms",
    icon: "Cpu",
    skills: [
      { name: "Arduino (Mega/Uno/Nano)", level: "Advanced", note: "Firmware, interrupt handling, real-time control" },
      { name: "ESP32 / ESP8266", level: "Advanced", note: "Dual-core, Wi-Fi/BLE, WebSockets, IoT" },
      { name: "STM32", level: "Intermediate", note: "ARM Cortex-M architecture, HAL, timers" },
      { name: "Raspberry Pi", level: "Intermediate", note: "Single-board compute, Linux telemetry, host interfacing" },
    ]
  },
  {
    title: "Hardware Design & EDA Tools",
    icon: "Layers",
    skills: [
      { name: "KiCad", level: "Proficient", note: "Schematic capture, PCB routing, DRC, Gerber generation" },
      { name: "EasyEDA", level: "Advanced", note: "2-layer SMD layout, library management, manufacturing" },
      { name: "Schematic Design", level: "Advanced", note: "Signal integrity, decoupling, power buses" },
      { name: "Circuit Debugging & Prototyping", level: "Advanced", note: "Breadboarding, point-to-point wiring, validation" },
    ]
  },
  {
    title: "Power Electronics & Motor Control",
    icon: "Zap",
    skills: [
      { name: "MOSFET Power Stages", level: "Advanced", note: "IRF3205, discrete H-bridges, gate ringing suppression" },
      { name: "Half-Bridge Gate Drivers", level: "Advanced", note: "IR2104, bootstrap circuits, dead-time protection" },
      { name: "DC–DC Converters", level: "Proficient", note: "Buck/boost step-down, linear LDO regulators" },
      { name: "Battery Systems", level: "Proficient", note: "18650 Li-ion cell sorting, 12.6V pack assembly, BMS" },
      { name: "BLDC Motor Commutation", level: "Proficient", note: "3-phase 6-step trapezoidal switching, back-EMF" }
    ]
  },
  {
    title: "Simulation & Development Tools",
    icon: "Terminal",
    skills: [
      { name: "Proteus VSM", level: "Proficient", note: "Circuit simulation, microcontroller co-simulation" },
      { name: "Multisim", level: "Proficient", note: "Analog signal conditioning, filter analysis" },
      { name: "Keil µVision", level: "Intermediate", note: "ARM compilation, register-level debugging" },
      { name: "Arduino IDE", level: "Advanced", note: "Firmware architecture, third-party library porting" },
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "C", level: "Advanced", note: "Data structures, pointers, memory constraints" },
      { name: "Embedded C", level: "Advanced", note: "Direct register manipulation, bitwise logic, ISRs" },
    ]
  },
  {
    title: "Instrumentation, Testing & Lab Tools",
    icon: "Activity",
    skills: [
      { name: "Digital Oscilloscope", level: "Proficient", note: "PWM duty analysis, ringing, propagation delay capture" },
      { name: "Digital Multimeter", level: "Advanced", note: "Voltage drops, low-resistance continuity, current shunt" },
      { name: "SMD & Through-Hole Soldering", level: "Advanced", note: "Component mounting, rework, cable harness assembly" },
      { name: "Hardware Troubleshooting", level: "Advanced", note: "Fault isolation, power rail short tracing" },
    ]
  }
];
