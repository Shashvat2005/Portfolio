"use client";

import Link from "next/link";
import {FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
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
          <a href="#about" className="text-zinc-400 hover:text-white">
            About
          </a>
          <a href="#skills" className="text-zinc-400 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-zinc-400 hover:text-white">
            Projects
          </a>
          <a href="#experience" className="text-zinc-400 hover:text-white">
            Experience
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shashvat2005"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="/resume.pdf"
            className="text-zinc-400 hover:text-white"
          >
            <FileText size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}