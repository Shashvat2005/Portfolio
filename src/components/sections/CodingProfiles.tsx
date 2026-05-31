import { codingProfiles } from "@/data/codingProfiles";
import { ExternalLink } from "lucide-react";

export default function CompetitiveProgramming() {
  return (
    <section
      id="competitive-programming"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="mb-3 text-blue-500">
          &gt; competitiveProgramming
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Competitive Programming
        </h2>

        <p className="max-w-2xl text-zinc-400">
          Problem solving, algorithms, data structures,
          and competitive coding across multiple platforms.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {codingProfiles.map((profile) => (
          <a
            key={profile.platform}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {profile.platform}
              </h3>

              <ExternalLink
                size={18}
                className="text-zinc-500 transition group-hover:text-blue-500"
              />
            </div>

            <p className="mb-2 text-zinc-300">
              {profile.username}
            </p>

            <p className="text-blue-500">
              {profile.stats}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}