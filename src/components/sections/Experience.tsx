import { experiences } from "@/data/experience";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="mb-3 text-blue-500">
          &gt; experience
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Experience
        </h2>

        <p className="max-w-2xl text-zinc-400">
          My professional experience and the work I've done
          in cybersecurity and software development.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-zinc-800" />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-14"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 bg-black">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl">
                
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="text-lg text-blue-500">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-zinc-500">
                    {experience.period}
                  </span>
                </div>

                <p className="mb-6 leading-relaxed text-zinc-400">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* GitHub Links */}
                {experience.links && experience.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {experience.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
                      >
                        <FaGithub size={16} />

                        <span>{link.label}</span>

                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}