/**
 * =============================================================================
 * PROJECTS DATA REPOSITORY
 * =============================================================================
 * To ADD, EDIT, or REMOVE projects:
 * Simply modify this array! The website UI automatically updates all cards,
 * filters, and detailed modal popups.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy one of the project objects below.
 * 2. Paste it into the `projects` array.
 * 3. Fill in:
 *    - id: Unique slug (e.g. "my-project-name")
 *    - title: Human-readable project title
 *    - category: "Robotics" | "Motor Control" | "IoT & Embedded" | "Power Electronics"
 *    - shortDescription: 1-2 sentence overview for the card
 *    - description: Full technical summary for the modal
 *    - hardware: Array of hardware chips/boards used
 *    - software: Array of firmware/software tools
 *    - features: Array of key capabilities
 *    - contribution: What you personally designed/built
 *    - image: Path to main photo/diagram in `./projects/...`
 * 4. Save this file, test locally (`npm run dev`), then commit & push!
 * =============================================================================
 */

export const projects = [
  {
    id: "iris-robot",
    featured: true,
    title: "IRIS – Intelligent Robot with Integrated Sensors",
    subtitle: "Autonomous Indoor Interactive & Document Delivery Robotic Platform",
    category: "Robotics",
    year: "2024 – Present",
    status: "Active Prototype",
    image: "./projects/iris/iris-main.jpg",
    gallery: [
      "./projects/iris/iris-main.jpg",
      "./projects/iris/iris-power-driver.svg"
    ],
    shortDescription:
      "Autonomous indoor robot designed for human interaction and lightweight document delivery, featuring dual-tier compute (Intel i7 + Arduino Mega) and custom ~10A discrete MOSFET power stages.",
    description:
      "IRIS (Intelligent Robot with Integrated Sensors) is a full-scale indoor autonomous robotic platform engineered for college environment human interaction and lightweight document logistics. The architecture utilizes a dual-tier processing topology: an Intel i7 onboard host handles high-level vision, voice interaction, and system telemetry, while an Arduino Mega manages real-time motion control, sensor acquisition, and actuation. Powered by a custom-built 12.6V 36Ah Li-ion battery pack repurposed from recovered cells.",
    hardware: [
      "Intel i7 Onboard Compute Host",
      "Arduino Mega 2560 (Real-Time Subsystem)",
      "Custom IRF3205 H-Bridge Motor Driver (~10A Continuous)",
      "IR2104 Half-Bridge Gate Drivers",
      "12.6V 36Ah Custom Li-Ion Pack (Recovered Laptop Cells)",
      "Ultrasonic HC-SR04 Obstacle Sensors Array",
      "Webcam for Computer Vision",
      "Servo-Actuated Head & Articulated Arms",
      "Character LCD & RGB Expressive Indicators",
      "Onboard Audio / Speaker Module"
    ],
    software: [
      "Embedded C / Arduino IDE",
      "Differential Drive Kinematics Firmware",
      "Real-Time Ultrasonic Distance Sampling & Obstacle Avoidance",
      "Interactive Audio & Voice Command Interface",
      "Web-Based Telemetry & Operator Dashboard"
    ],
    technologies: [
      "Differential Drive",
      "Discrete MOSFET Power Stage",
      "Ultrasonic Collision Avoidance",
      "Dual-Tier Architecture",
      "Battery Pack Engineering"
    ],
    features: [
      "Dual-tier computing separating real-time low-latency motor control from high-level computer vision and audio.",
      "Custom discrete motor driver capable of handling ~10A continuous stall/drive current for high-torque differential drive motors.",
      "Custom 12.6V 36Ah lithium-ion battery system assembled by testing, matching, and spot-welding recovered 18650 cells.",
      "Obstacle detection and dynamic corridor navigation using an array of ultrasonic transducers.",
      "Expressive mechanical feedback with servo-driven head pan/tilt, robotic arms, LCD status monitor, and RGB eye indicators."
    ],
    contribution:
      "Engineered the complete electrical architecture, designed and soldered the ~10A discrete IRF3205/IR2104 motor driver board, assembled and balanced the 12.6V 36Ah lithium-ion battery pack, and programmed the real-time Arduino Mega motion control firmware.",
    github: "https://github.com/Ramakrishna-K/iris-robot",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "bldc-motor-controller",
    featured: true,
    title: "Custom 3-Phase BLDC Motor Controller",
    subtitle: "Discrete Power Stage with IR2104 Gate Drivers & IRF3205 MOSFETs",
    category: "Motor Control",
    year: "2025",
    status: "Fabricated & Tested",
    image: "./projects/bldc-controller/bldc-controller.jpg",
    gallery: [
      "./projects/bldc-controller/bldc-controller.jpg"
    ],
    shortDescription:
      "Engineered a discrete 3-phase Brushless DC (BLDC) inverter board utilizing IR2104 high/low side gate drivers and IRF3205 power MOSFETs on a custom 2-layer PCB.",
    description:
      "A hardware project focused on high-current brushless DC motor commutation and power stage design. The board implements a full 3-phase bridge (6 MOSFETs) driven by three dedicated IR2104 gate drivers with bootstrap high-side biasing. Designed to explore trapezoidal 6-step commutation, gate drive propagation delays, dead-time management, and thermal dissipation in high-current motor control systems.",
    hardware: [
      "6x IRF3205 N-Channel Power MOSFETs (55V, 110A rating)",
      "3x IR2104 Half-Bridge Gate Driver ICs",
      "Bootstrap Capacitors & Fast Recovery Diodes (UF4007)",
      "Low-side Current Shunt Resistors for Current Sensing",
      "Custom 2-Layer SMD/Through-Hole Hybrid PCB",
      "Screw Terminals for 3-Phase Stator Windings (U, V, W)"
    ],
    software: [
      "Embedded C Commutation State Machine",
      "Dead-Time Protection Timing",
      "Complementary PWM Generation",
      "Current Limit Threshold Monitoring"
    ],
    technologies: [
      "3-Phase Inverter",
      "IR2104 Gate Drivers",
      "Power Electronics",
      "EasyEDA / KiCad",
      "PCB Layout & Thermal Design"
    ],
    features: [
      "Dedicated high-voltage and high-speed half-bridge gate drivers with integrated dead-time control.",
      "Bootstrap circuit implementation ensuring reliable continuous conduction of high-side N-channel MOSFETs.",
      "Optimized PCB layout minimizing parasitic inductance in high-current switching loops to suppress Vds overshoot.",
      "Provision for Hall-effect sensor feedback as well as sensorless back-EMF zero-crossing detection."
    ],
    contribution:
      "Designed the schematic and PCB layout in EasyEDA/KiCad, calculated bootstrap capacitor ratings and gate resistor damping values, etched/fabricated the prototype board, and experimentally validated switching waveforms using a digital oscilloscope.",
    github: "https://github.com/Ramakrishna-K/bldc-motor-controller",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "esp32-c3-bldc-driver",
    featured: true,
    title: "ESP32-C3 BLDC Driver / Motor Control",
    subtitle: "Compact Wireless Motor Driver Board with RISC-V Architecture",
    category: "Motor Control",
    year: "2025",
    status: "Prototyping & Testing",
    image: "./projects/esp32-bldc/esp32-bldc.jpg",
    gallery: [
      "./projects/esp32-bldc/esp32-bldc.jpg"
    ],
    shortDescription:
      "Modern compact BLDC motor driver powered by the ESP32-C3 RISC-V SoC, integrating Wi-Fi/BLE telemetry, PWM motor control, and on-board DC-DC buck regulation.",
    description:
      "This project integrates the single-core 32-bit RISC-V ESP32-C3 microcontroller with a dedicated 3-phase motor driver stage. It enables wireless velocity profiling, real-time current telemetry over Wi-Fi/BLE, and compact power delivery for precision small-to-medium BLDC motors used in robotics actuators.",
    hardware: [
      "ESP32-C3 RISC-V 32-bit Microcontroller SoC",
      "3-Phase MOSFET Inverter Bridge",
      "Onboard Synchronous DC-DC Buck Converter (12V to 3.3V)",
      "SMD Passives & Compact Form Factor PCB",
      "Phase Voltage Feedback Resistor Dividers"
    ],
    software: [
      "ESP-IDF / Arduino Framework (Embedded C)",
      "ESP32 MCPWM / LEDC Peripheral Configuration",
      "WebSockets / BLE Telemetry for RPM & Current",
      "PID Closed-Loop Velocity Controller"
    ],
    technologies: [
      "ESP32-C3 (RISC-V)",
      "Wi-Fi / BLE Telemetry",
      "SMD PCB Design",
      "DC-DC Buck Regulation",
      "Motor Control Algorithms"
    ],
    features: [
      "Harnesses the RISC-V ESP32-C3 core for both deterministic PWM motor generation and wireless connectivity.",
      "Onboard DC-DC buck stage provides efficient logic power directly from the 12V motor battery bus.",
      "Ultra-compact 2-layer SMD PCB footprint suitable for integration directly behind robot actuators.",
      "Wireless speed control and live diagnostic telemetry dashboard accessible from mobile or browser."
    ],
    contribution:
      "Designed the schematic, routed the compact 2-layer SMD board, programmed the PWM generation and communication firmware, and characterized switching efficiency under load.",
    github: "https://github.com/Ramakrishna-K/esp32-c3-bldc-driver",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "fire-fighting-robot",
    featured: false,
    title: "Autonomous Fire-Fighting Robot",
    subtitle: "Flame Sensing Array with Automated Relay-Driven Pump Actuation",
    category: "Robotics",
    year: "2024",
    status: "Completed",
    image: "./projects/fire-fighting/fire-fighting.svg",
    gallery: [
      "./projects/fire-fighting/fire-fighting.svg"
    ],
    shortDescription:
      "Autonomous safety robot that scans indoor environments for open flames using an infrared sensor array and automatically navigates to extinguish the fire via a water pump.",
    description:
      "An autonomous mobile robot designed for rapid fire detection and suppression. It uses a 3-channel optical infrared flame sensor array to triangulate flame sources, navigates towards the target using an Arduino microcontroller, and actuates a high-pressure DC water pump via an optocoupler-isolated relay module.",
    hardware: [
      "Arduino Microcontroller",
      "3-Channel Infrared Flame Sensor Array",
      "L298N / Discrete Motor Driver",
      "5V Optocoupler-Isolated Relay Module",
      "Submersible DC Water Pump & Nozzle",
      "Chassis with High-Torque Geared DC Motors",
      "Independent 7.4V Li-Ion Power Source"
    ],
    software: [
      "Embedded C (Arduino)",
      "Sensor Threshold Triangulation Algorithm",
      "State Machine for Search, Target, and Extinguish Modes"
    ],
    technologies: [
      "IR Flame Sensing",
      "Automated Suppression",
      "Relay Isolation",
      "Robotic Locomotion"
    ],
    features: [
      "Multi-directional infrared flame detection to detect fire presence and heading.",
      "Safe optocoupler isolation preventing inductive back-EMF from pump motor from resetting the microcontroller.",
      "Automatic shut-off logic once the flame sensor readings return to safe background levels."
    ],
    contribution:
      "Designed the complete electrical circuit, constructed the chassis and fluid nozzle bracket, and programmed the search and extinguishing control algorithms.",
    github: "https://github.com/Ramakrishna-K/fire-fighting-robot",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "smart-home-automation",
    featured: false,
    title: "ESP32 Smart Home Automation System",
    subtitle: "Wi-Fi Controlled Appliance Switching with Manual & Cloud Override",
    category: "IoT & Embedded",
    year: "2024",
    status: "Completed",
    image: "./projects/home-automation/home-automation.svg",
    gallery: [
      "./projects/home-automation/home-automation.svg"
    ],
    shortDescription:
      "Wi-Fi-based appliance control system using ESP32 with dual-mode manual physical switch feedback and web/mobile dashboard synchronization.",
    description:
      "Developed an IoT-enabled smart home automation controller utilizing the ESP32 microcontroller. The system interfaces with 230V AC home appliances via relay channels and features synchronized physical switch inputs, allowing appliances to be controlled both physically from wall switches and remotely via a web interface.",
    hardware: [
      "ESP32 Dual-Core Wi-Fi/BLE Microcontroller",
      "Multi-Channel Optoisolated Relay Board",
      "Hi-Link AC-DC Step-Down Power Supply Module (230V AC to 5V DC)",
      "Physical Toggle Switch Sensor Matrix",
      "Transient Voltage Suppression (Snubber Circuits)"
    ],
    software: [
      "Embedded C / Arduino Framework",
      "Asynchronous Web Server (ESPAsyncWebServer)",
      "WebSocket Real-Time State Synchronization",
      "Fail-Safe EEPROM State Storage on Power Loss"
    ],
    technologies: [
      "ESP32 Wi-Fi",
      "AC Mains Switching",
      "WebSockets",
      "Optoisolation",
      "IoT Architecture"
    ],
    features: [
      "Dual-control architecture preserving standard physical wall toggle functionality while allowing remote overrides.",
      "Live bi-directional status updates across all connected mobile dashboards using WebSockets.",
      "Persistent state restoration storing relay conditions in non-volatile flash upon power interruption."
    ],
    contribution:
      "Engineered the mains safety layout, assembled the enclosure, integrated transient snubbers for inductive fan loads, and developed the web dashboard and ESP32 firmware.",
    github: "https://github.com/Ramakrishna-K/esp32-home-automation",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "diy-digital-multimeter",
    featured: false,
    title: "DIY Graphic Digital Multimeter",
    subtitle: "Arduino-Based Instrument with GLCD Voltage, Resistance & Continuity",
    category: "IoT & Embedded",
    year: "2023",
    status: "Completed",
    image: "./projects/multimeter/multimeter.svg",
    gallery: [
      "./projects/multimeter/multimeter.svg"
    ],
    shortDescription:
      "Custom test bench instrument built using Arduino with a Graphic LCD (GLCD) for measuring DC voltages, resistances across multiple ranges, and instant audio continuity.",
    description:
      "Engineered a standalone bench digital multimeter utilizing an Arduino microcontroller's internal 10-bit analog-to-digital converter (ADC) and external precision resistor divider networks. Measured parameters are displayed on a 128x64 Graphic LCD with graphical bargraphs and audio buzzer feedback for short-circuit continuity checks.",
    hardware: [
      "ATmega328P / Arduino Microcontroller",
      "128x64 Graphic LCD (ST7920 / KS0108 interface)",
      "Precision 1% Tolerance Metal Film Resistor Networks",
      "Zener Diode Overvoltage Clamp Protection (5.1V)",
      "Active Buzzer for Low-Resistance Continuity Alert",
      "Rotary Range Selector Switch"
    ],
    software: [
      "Embedded C (Arduino)",
      "Oversampling & Rolling Average ADC Noise Filter",
      "GLCD Bitmap & Graphical Bar Rendering",
      "Voltage Divider Auto-Ranging Calibration Math"
    ],
    technologies: [
      "Analog Signal Conditioning",
      "ADC Oversampling",
      "Graphic LCD Interfacing",
      "Input Protection",
      "Test Instrumentation"
    ],
    features: [
      "Precision DC voltage measurement up to 50V with clamped input protection against inadvertent overvoltage.",
      "Resistance calculation using calibrated constant-voltage divider ratios.",
      "Fast continuity beeper triggering within milliseconds on low impedance contacts (<20 ohms).",
      "Clean graphical visualization on 128x64 display including numeric readouts and visual range bars."
    ],
    contribution:
      "Designed the input protection clamping circuit, routed the instrument board, calibrated the ADC conversion transfer curves, and implemented the graphical UI display routine.",
    github: "https://github.com/Ramakrishna-K/diy-digital-multimeter",
    demo: "",
    documentation: "",
    schematicUrl: ""
  },
  {
    id: "dc-home-backup",
    featured: false,
    title: "DC Home – 12V Backup Power System",
    subtitle: "Direct DC Distribution with Automatic / Manual Transfer Switching",
    category: "Power Electronics",
    year: "2023 – Present",
    status: "In Daily Operation",
    image: "./projects/dc-home/dc-home.svg",
    gallery: [
      "./projects/dc-home/dc-home.svg"
    ],
    shortDescription:
      "12V DC rechargeable backup power distribution system designed for essential home lighting and DC ventilation fans with automatic changeover and battery protection.",
    description:
      "A high-efficiency domestic emergency power system that circumvents the ~15-20% inverter conversion losses of typical AC inverters by powering essential LED lights and high-efficiency brushless DC fans directly from a dedicated 12V DC storage bus. Features automatic line-voltage sensing, relay transfer switching, and low-voltage cutoff to safeguard battery longevity.",
    hardware: [
      "12V Lead-Acid / Li-Ion Deep Cycle Storage Battery",
      "Float-Charge Regulated Charger with Overcharge Cutoff",
      "Relay-Based Automatic Transfer Switch (ATS) Circuit",
      "Low-Voltage Disconnect (LVD) Comparator Protection Circuit",
      "High-Efficiency 12V LED Luminaires & DC Ceiling Fans",
      "Individual DC Fusing & Distribution Fuse Block"
    ],
    software: [
      "Hardware-based Comparator & Voltage Sensing Logic",
      "Voltmeter / Ammeter Telemetry Display Panel"
    ],
    technologies: [
      "Power Distribution",
      "Battery Management",
      "Loss Reduction",
      "Automatic Changeover",
      "DC Microgrid"
    ],
    features: [
      "Eliminates DC-to-AC-to-DC conversion losses, increasing operating runtime by over 25% on identical battery capacities.",
      "Zero-latency relay changeover ensuring lights remain illuminated during utility grid dropouts.",
      "Integrated low-voltage disconnect circuit preventing deep battery discharge below critical thresholds."
    ],
    contribution:
      "Engineered the load calculation, built the changeover comparator circuit, wired the dedicated 12V domestic conduit distribution, and continuously maintains system battery health.",
    github: "https://github.com/Ramakrishna-K/dc-home-power-system",
    demo: "",
    documentation: "",
    schematicUrl: ""
  }
];

export const projectCategories = [
  "All",
  "Robotics",
  "Motor Control",
  "IoT & Embedded",
  "Power Electronics"
];
