export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mb-10">
        <p className="mb-3 text-blue-500">
          &gt; about
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          About Me
        </h2>
      </div>

      <div className="grid gap-1 lg:grid-cols-2">
        
        {/* Left Side */}
        <div>
          <p className="mb-6 text-lg leading-relaxed text-zinc-400">
            I'm a Computer Science student passionate about
            cybersecurity, software engineering, and building
            practical systems that solve real-world problems.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-zinc-400">
            During my internship at IIT Roorkee, I worked on
            secure communication systems for smart meter
            infrastructure, focusing on encrypted data
            transmission and network security.
          </p>

          <p className="text-lg leading-relaxed text-zinc-400">
            I enjoy working across the stack—from frontend
            applications and backend systems to networking,
            cybersecurity, and machine learning projects.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid gap-4 sm:grid-cols-2">
          
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="mb-2 text-3xl font-bold text-white">
              3+
            </h3>

            <p className="text-zinc-400">
              Years of Programming
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="mb-2 text-3xl font-bold text-white">
              10+
            </h3>

            <p className="text-zinc-400">
              Technical Projects
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="mb-2 text-3xl font-bold text-white">
              IIT
            </h3>

            <p className="text-zinc-400">
              Roorkee Internship
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="mb-2 text-3xl font-bold text-white">
              CSE
            </h3>

            <p className="text-zinc-400">
              B.Tech Student
            </p>
          </div>

        </div>
      </div>

      {/* Current Focus */}
      <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
        
        <h3 className="mb-6 text-2xl font-semibold text-white">
          Current Focus
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Cybersecurity",
            "Network Security",
            "Full Stack Development",
            "Machine Learning",
            "System Design",
            "Flutter Development",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}