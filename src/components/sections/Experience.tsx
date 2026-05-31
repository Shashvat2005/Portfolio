import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16">
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
        {/* Vertical Timeline Line */}
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

              {/* Content Card */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-blue-500/50">
                
                <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}