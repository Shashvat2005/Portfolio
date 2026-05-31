"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="mb-3 text-blue-500">&gt; whoami</p>

          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Shashvat
            <span className="text-blue-500"> Garg</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-zinc-400">
            Computer Science student passionate about
            cybersecurity, full-stack development,
            networking, and building secure software systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/shashvat2005"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shashvat-garg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-xl"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <pre className="overflow-x-auto text-sm text-zinc-300">
{`const developer = {
  name: "Shashvat Garg",
  role: "CSE Student",
  internship: "IIT Roorkee",

  skills: [
    "Java",
    "Python",
    "React",
    "Next.js",
    "Flutter",
    "Cybersecurity"
  ],

  currentlyBuilding:
    "Secure Systems"
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}