"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SITE_CONFIG } from "../../data/site";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "competitive-programming", label: "Competitive Programming" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-white"
        >
          SG
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-blue-500"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={SITE_CONFIG.resume}
            className="text-zinc-400 hover:text-white"
          >
            <FileText size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}