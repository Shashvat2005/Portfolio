import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured == 0
  );

  const otherProjects = projects.filter(
    (project) => project.featured == 1
  );

  const researchProjects = projects.filter(
    (project) => project.featured == 2
  );

  const renderProjectCard = (project: (typeof projects)[number]) => (
    <div
      key={project.title}
      className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        {project.date && (
          <span className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-400 whitespace-nowrap">
            {project.date}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-zinc-400">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-white hover:text-white"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-white hover:text-white"
            >
              <ExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="mb-3 text-blue-500">
          &gt; projects
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Things I've Built
        </h2>

        <p className="max-w-2xl text-zinc-400">
          A collection of projects spanning cybersecurity,
          software engineering, networking, machine learning,
          and mobile development.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Featured Projects
          </h3>

          <div className="grid gap-8">
            {featuredProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

       {/* Research Projects */}
      {researchProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Research Projects
          </h3>

          <div className="grid gap-8">
            {researchProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Other Projects
          </h3>

          <div className="grid gap-8">
            {otherProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

     
    </section>
  );
}