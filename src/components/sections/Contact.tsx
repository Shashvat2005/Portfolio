import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SITE_CONFIG } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="p-10 md:p-16">
        
        <div className="mb-12">
          <p className="mb-3 text-blue-500">
            &gt; contact
          </p>

          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Let's Connect
          </h2>

          <p className="max-w-2xl text-zinc-400">
            Whether it's an internship opportunity,
            collaboration, project discussion,
            or simply a conversation about technology,
            feel free to reach out.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 p-5 transition hover:border-blue-500"
          >
            <Mail className="text-blue-500" />
            <div>
              <p className="text-white">Email</p>
              <p className="text-zinc-400">
                {SITE_CONFIG.email}
              </p>
            </div>
          </a>

          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 p-5 transition hover:border-blue-500"
          >
            <FaGithub className="text-blue-500" />
            <div>
              <p className="text-white">GitHub</p>
              <p className="text-zinc-400">
                View my repositories
              </p>
            </div>
          </a>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 p-5 transition hover:border-blue-500"
          >
            <FaLinkedin className="text-blue-500" />
            <div>
              <p className="text-white">LinkedIn</p>
              <p className="text-zinc-400">
                Professional profile
              </p>
            </div>
          </a>

          <a
            href={SITE_CONFIG.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 p-5 transition hover:border-blue-500"
          >
            <FileText className="text-blue-500" />
            <div>
              <p className="text-white">
                Resume
              </p>

              <p className="text-zinc-400">
                Download PDF
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}