/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * Edit this single file to update your personal details, contact information,
 * social links, and resume location across the entire portfolio website.
 */

export const siteConfig = {
  // Personal & Professional Details
  name: "Ramakrishna K",
  shortName: "Ramakrishna",
  role: "Embedded Hardware Engineer",
  degree: "M.Tech VLSI & Embedded Systems",
  institution: "Pondicherry Technological University",
  location: "Marakkanam, Tamil Nadu, India",
  
  // Hero section badge and summary
  heroBadge: "M.Tech VLSI & Embedded Systems • Hardware Prototyping",
  headline: "Designing custom hardware, high-power motor drivers, and intelligent robotic systems.",
  heroSummary: 
    "Specialized in embedded hardware engineering, 2-layer SMD PCB design, and power electronics. Developing electronic systems from concept to working prototype with practical experience in robotics, motor drivers, and industrial automation.",

  // Contact Information (Used in Hero, Contact section, and Footer)
  contact: {
    email: "ram6electronics@gmail.com",
    phone: "+91-9342245369",
    location: "Marakkanam, Tamil Nadu, India",
    availability: "Available for Embedded Hardware & VLSI Opportunities",
  },

  // Professional Profiles & Socials
  socials: {
    // LinkedIn profile from your resume
    linkedin: "https://www.linkedin.com/in/ramakrishna-k-5548b526a",
    // GitHub profile
    github: "https://github.com/Ramakrishna07072005",
  },

  // Resume Download Settings
  resume: {
    // Relative path to your downloadable resume PDF in public/resume/
    downloadUrl: "./resume/Ramakrishna_Resume.pdf",
    // Fallback interactive HTML resume view
    viewHtmlUrl: "./resume/resume.html",
    filename: "Ramakrishna_Resume.pdf"
  },

  // Live GitHub Repositories Feed (Optional)
  // Set enabled to true to fetch public repositories directly from GitHub.
  githubFeed: {
    enabled: true,
    username: "Ramakrishna07072005",
    limit: 4,
  },

  // Quick stats shown in Hero / Highlights banner
  highlights: [
    { label: "Hardware Platforms", value: "IRIS & Custom BLDC" },
    { label: "Power Stage Design", value: "~10A Continuous Driver" },
    { label: "Li-Ion Battery Pack", value: "12.6V 36Ah Custom" },
    { label: "National Hackathon", value: "Semi-Finalist (Atomberg)" },
  ]
};
