import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import { 
  Cpu, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Zap, 
  SlidersHorizontal,
  Maximize2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Github } from '../components/Icons';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
            <span className="w-8 h-[1px] bg-copper-500"></span>
            <span>Hardware Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
            Full-stack hardware systems: autonomous robotics, discrete motor drivers, and embedded IoT controllers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-carbon-900 border border-carbon-800">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-copper-500 text-carbon-950 font-bold shadow-md shadow-copper-500/20'
                  : 'text-carbon-400 hover:text-white hover:bg-carbon-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl bg-carbon-900/80 border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 ${
              project.featured 
                ? 'border-copper-500/30 hover:border-copper-500/60' 
                : 'border-carbon-800 hover:border-carbon-700'
            }`}
          >
            {/* Card Image Banner */}
            <div 
              className="relative aspect-video w-full overflow-hidden bg-carbon-950 cursor-pointer border-b border-carbon-800/80"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent opacity-80" />
              
              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-carbon-950/90 text-copper-400 border border-copper-500/30 backdrop-blur-md">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-copper-500 text-carbon-950 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              {/* Hover Quick Overlay Prompt */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-carbon-950/60 backdrop-blur-[2px] transition-opacity duration-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-copper-500 text-carbon-950 text-xs font-mono font-bold shadow-lg shadow-copper-500/30">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Hardware Specs</span>
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-carbon-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="text-signal-emerald font-semibold">
                    {project.status}
                  </span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-base sm:text-lg font-bold text-white group-hover:text-copper-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-carbon-300 line-clamp-3 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Hardware Highlights Preview */}
              <div className="space-y-3 pt-2 border-t border-carbon-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-850 text-carbon-300 border border-carbon-750"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-carbon-400 bg-carbon-850 border border-carbon-750">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-copper-400 hover:text-copper-300 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-carbon-800 text-carbon-400 hover:text-white hover:bg-carbon-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repo`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Detail Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
