import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16">
        <p className="mb-3 text-blue-500">
          &gt; skills
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Skills & Technologies
        </h2>

        <p className="max-w-2xl text-zinc-400">
          Technologies and tools I use to build secure,
          scalable, and user-focused applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}