# Ramakrishna | Embedded Hardware Engineer Portfolio

A modern, high-performance personal engineering portfolio built for **Ramakrishna K**, specialized in **M.Tech VLSI & Embedded Systems**, custom robotics platforms (**IRIS**), discrete **BLDC motor controllers**, power electronics, and 2-layer SMD PCB design.

---

## ⚡ Technology Stack

- **Core**: React 18 + Vite (blazing fast development and minimal bundle footprint)
- **Styling**: Tailwind CSS + Custom Hardware Design System (dark carbon theme, amber copper traces, logic signal indicators)
- **Icons**: Lucide React + custom inline SVG components for hardware branding
- **Automation & Deployment**: GitHub Actions + GitHub Pages

---

## 📁 Project Architecture & File Structure

```text
portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automatic GitHub Actions deployment workflow
│
├── public/
│   ├── projects/                   # Project images and schematics
│   │   ├── iris/                   # IRIS robot hardware photos & electrical diagrams
│   │   ├── bldc-controller/        # Custom 3-phase BLDC controller PCB photos
│   │   ├── esp32-bldc/             # ESP32-C3 RISC-V driver photos
│   │   ├── fire-fighting/          # Autonomous fire-fighting robot diagrams
│   │   ├── home-automation/        # ESP32 smart home relay diagrams
│   │   ├── multimeter/             # DIY graphic digital multimeter diagrams
│   │   └── dc-home/                # DC Home 12V backup power microgrid diagrams
│   │
│   └── resume/
│       ├── Ramakrishna_Resume.pdf  # Downloadable PDF resume
│       └── resume.html             # Standalone interactive HTML resume
│
├── src/
│   ├── config/
│   │   └── site.js                 # ★ Central settings (Name, Email, Socials, Phone, etc.)
│   │
│   ├── data/
│   │   ├── projects.js             # ★ Central projects list (Add/Edit/Remove projects here)
│   │   ├── skills.js               # Categorized technical skills matrix
│   │   ├── education.js            # Degrees & industrial internship timeline
│   │   └── certifications.js       # NPTEL awards, Atomberg hackathon, workshops
│   │
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky header with mobile drawer & quick download
│   │   ├── ProjectModal.jsx        # Rich project modal popup with hardware specs & BOM
│   │   ├── Icons.jsx               # Scalable GitHub and LinkedIn SVG icons
│   │   └── Footer.jsx              # Engineering terminal status footer
│   │
│   ├── sections/
│   │   ├── Hero.jsx                # Hero section with hardware badges and stats
│   │   ├── About.jsx               # Engineering biography & core focus areas
│   │   ├── Projects.jsx            # Category-filtered hardware showcase
│   │   ├── GithubFeed.jsx          # Live GitHub repository feed with graceful fallback
│   │   ├── Skills.jsx              # Categorized skills without arbitrary percentages
│   │   ├── EducationExperience.jsx # Academic education & defence R&D experience
│   │   ├── Certifications.jsx      # NPTEL medals, hackathons, and workshops
│   │   └── Contact.jsx             # Contact cards & interactive mail composer
│   │
│   ├── App.jsx                     # Root application assembler
│   ├── index.css                   # Custom circuit grid, scrollbar, and design tokens
│   └── main.jsx                    # React DOM entry point
│
├── index.html                      # SEO meta tags, title, Google Fonts, and chip favicon
├── package.json                    # Project dependencies and build scripts
├── vite.config.js                  # Vite configuration with relative base paths for GitHub Pages
└── README.md                       # Comprehensive guide and beginner documentation
```

---

## 🚀 How to Run the Website Locally

1. Open PowerShell or Terminal in this folder (`c:\Users\Ram\Desktop\portfolio`).
2. Install dependencies (already completed):
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL in your browser (usually `http://localhost:5173`).
5. To test the production build locally:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🛠️ How to Customize Your Content (Beginner Friendly)

All major content is centralized into clean configuration files so you never need to edit complex HTML/React code.

### 1. Update Personal Info, Email, LinkedIn, or GitHub
Open [`src/config/site.js`](file:///c:/Users/Ram/Desktop/portfolio/src/config/site.js):
```javascript
export const siteConfig = {
  name: "Ramakrishna K",
  role: "Embedded Hardware Engineer",
  contact: {
    email: "ram6electronics@gmail.com",
    phone: "+91-9342245369",
    location: "Marakkanam, Tamil Nadu, India",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/ramakrishna-k-5548b526a",
    github: "https://github.com/Ramakrishna-K", // Update with your GitHub username
  },
  ...
};
```

---

### 2. How to Add a New Project
Open [`src/data/projects.js`](file:///c:/Users/Ram/Desktop/portfolio/src/data/projects.js):

1. **Step 1**: Place your project photo or diagram in the `public/projects/` directory (e.g. `public/projects/my-new-project/preview.jpg`).
2. **Step 2**: Copy and paste the template object below into the `projects` array in `src/data/projects.js`:

```javascript
{
  id: "my-project-slug",
  featured: false,
  title: "My New Hardware Project",
  subtitle: "Subtitle Describing the Power Stage or Controller",
  category: "Robotics", // Choose: "Robotics" | "Motor Control" | "IoT & Embedded" | "Power Electronics"
  year: "2026",
  status: "Testing / Complete",
  image: "./projects/my-new-project/preview.jpg",
  gallery: [
    "./projects/my-new-project/preview.jpg"
  ],
  shortDescription: "A concise 1-2 sentence summary displayed on the project card.",
  description: "A detailed technical breakdown of the hardware architecture, challenges, and implementation.",
  hardware: [
    "Microcontroller / SoC used",
    "Gate Drivers / Power MOSFETs",
    "Sensors / Power Supplies"
  ],
  software: [
    "Embedded C Firmware",
    "Communication Protocols"
  ],
  technologies: [
    "PCB Design",
    "Motor Control",
    "Hardware Prototyping"
  ],
  features: [
    "Feature 1: Real-time sensor processing",
    "Feature 2: High current switching capability"
  ],
  contribution: "Designed schematic, routed 2-layer PCB, soldered components, and tested with oscilloscope.",
  github: "https://github.com/Ramakrishna-K/my-new-project",
  demo: "",
  documentation: ""
},
```
3. Save the file. The website card and the interactive modal popup will update automatically!

---

### 3. How to Update Your Resume PDF
1. Save your latest resume as `Ramakrishna_Resume.pdf`.
2. Copy it into `public/resume/Ramakrishna_Resume.pdf` (replacing the existing file).
3. Push to GitHub. The "Download Resume" buttons on the website will now serve your updated PDF!

---

## 🌐 Deploying to GitHub and GitHub Pages

### What is Git and GitHub?
- **Git** is a version control system on your computer that takes snapshots ("commits") of your code over time.
- **GitHub** is an online platform that stores your code repository in the cloud.
- **GitHub Actions** is a free automation server that automatically builds your website whenever you push changes.
- **GitHub Pages** is a free hosting service that serves your website live to the world.

### Step-by-Step Push & Deployment Guide

Whenever you make changes to your portfolio, run these three simple commands in PowerShell or Terminal:

```bash
# 1. Stage all your changed files for the snapshot:
git add .

# 2. Save the snapshot with a message describing what you changed:
git commit -m "Update projects and resume"

# 3. Upload your snapshot to GitHub:
git push origin main
```

Once pushed, GitHub Actions automatically triggers:
1. Runs `npm ci` on GitHub's build servers.
2. Runs `npm run build` to compile the optimized production bundle.
3. Deploys the `dist/` directory to GitHub Pages.
4. Your website is live within 60 seconds!

---

## 🔧 Troubleshooting Common Questions

- **Assets or images not loading?**
  All asset links in `src/data/projects.js` and `vite.config.js` use relative paths (`./...`). Make sure image paths start with `./projects/...` or `./resume/...`.
- **Port 5173 already in use?**
  Run `npm run dev -- --port 3000` to start on an alternative port.
- **GitHub repository name change?**
  Because `vite.config.js` uses `base: './'`, your website works identically whether your repository is named `ramakrishna-portfolio` or `<your-username>.github.io`.
