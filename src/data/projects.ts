import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Smart Meter Security System",
    description:
      "Designed and implemented a secure communication framework for smart meter infrastructure using ESP32 devices, MQTT messaging, AES encryption, and Java/Python services.",
    tech: ["ESP32", "MQTT", "AES", "Java", "Python"],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    title: "MITM Attack Simulation",
    description:
      "Educational cybersecurity project demonstrating ARP spoofing, Diffie-Hellman interception, and encrypted communication attacks.",
    tech: ["Python", "Networking", "AES", "Diffie-Hellman"],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    title: "BookMyAdda",
    description:
      "Full-stack ticket booking platform built using React, Spring Boot, Firebase, and REST APIs.",
    tech: ["React", "Spring Boot", "Firebase", "MySQL"],
    github: "#",
    demo: "#",
  },

  {
    title: "Chess Engine",
    description:
      "Custom Java chess engine featuring move generation, board evaluation, minimax search, and alpha-beta pruning.",
    tech: ["Java", "Algorithms", "Minimax"],
    github: "#",
    demo: "#",
  },

  {
    title: "Flutter Music Player",
    description:
      "Cross-platform music player supporting local file playback and platform-specific integrations.",
    tech: ["Flutter", "Dart", "Android", "iOS"],
    github: "#",
    demo: "#",
  },
];