import { ExternalLink } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import { projects } from "../../data/projects";


export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16">
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

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              
              <div className="flex-1">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

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
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 p-3 text-zinc-300 transition hover:border-white hover:text-white"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 p-3 text-zinc-300 transition hover:border-white hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}