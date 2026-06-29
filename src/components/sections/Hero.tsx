"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE_CONFIG } from "../../data/site";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `export const shashvat = {
  name: "Shashvat Garg",
  role: "CSE Student",

  internships: [
    "IIT Roorkee",
    "Amdox Technologies",
    "Star Cement ABG"
  ],

  skills: [
    "Java",
    "Python",
    "React",
    "Next.js",
    "Flutter",
    "Cybersecurity"
  ],

  competitiveProgramming:
    "500+ DSA Questions Solved"

  currentlyBuilding:
    "Hotel Booking System using Spring Boot"
};`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black isolate">

        {/* <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-64 top-20 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[180px]" />

            <div className="absolute -right-64 bottom-0 h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[180px]" />
        </div> */}

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row">

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
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-zinc-300 transition hover:border-zinc-500"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href={SITE_CONFIG.linkedin}
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

            <div className="mb-4 flex items-center border-b border-zinc-800 pb-3">
              <span className="rounded bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                shashvat.config.ts
              </span>
            </div>

            <SyntaxHighlighter
  language="javascript"
  style={vscDarkPlus}
  customStyle={{
    margin: 0,
    padding: 0,
    background: "transparent",
    fontSize: "0.9rem",
  }}
  showLineNumbers={false}
>
  {codeString}
</SyntaxHighlighter>
          </div>
        </motion.div>

      </div>
    </section>
  );
}