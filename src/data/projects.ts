import { Project } from "../types/project";

// featured :
//     0 -> Featured Project
//     1 -> Other Project
//     2 -> Research Project

export const projects: Project[] = [

  {
    title: "Active Collision Avoidance & Energy Harvesting System",
    description:"Developed a system for active train collision avoidance and a method to harness heat energy from railway tracks using thermoelectric generator modules for sustainable power generation",
    tech: ["High-Speed Rail Systems", "Thermoelectric Generators", "Energy Harvesting", "Safety Systems", "Satellite Communication"],
    date: "2019",
    // github: "#",
    // demo: "#",
    featured: 2,
  },

  {
    title: "Tire Health Monitoring System",
    description:"Designed a real-time tire health monitoring system using LiDAR sensors to enhance vehicle safety and maintenance",
    tech: ["LiDAR Sensors", "Real-Time Data Processing", "Vehicle Safety", "Predictive Maintenance"],
    date: "2021",
    // github: "#",
    // demo: "#",
    featured: 2,
  },

  {
    title: "ChitraBol",
    description:"A chatting and video calling application with various features like group calls, status updates, media sharing, reactions and end-to-end encryption",
    tech: ["Java", "XML", "Android Studio", "Firebase", "Jitsi Meet API"],
    date: "2021",
    // github: "#",
    // demo: "#",
    featured: 1,
  },

  {
    title: "To-Do List App",
    description:
      "Cross-platform to-do list application using Flutter and Dart, allowing users to manage their tasks on both Android and iOS devices.",
    tech: ["Flutter", "Dart", "Android", "iOS"],
    date: "2025",
    github: "https://github.com/Shashvat2005/ToDo-App",
    // demo: "#",
    featured: 1,
  },

  {
    title: "Obscura",
    description:
      "Cross-platform image encryption application using Flutter and Dart, allowing users to securely encrypt and decrypt photos on Mac and Windows devices.",
    tech: ["Flutter", "Dart", "MacOS", "Windows"],
    date: "2025",
    github: "https://github.com/Shashvat2005/Obscura",
    // demo: "#",
    featured: 1,
  },

  {
    title: "MITM Attack Simulation (IIT Roorkee)",
    description:
      "Educational cybersecurity project demonstrating ARP spoofing, Diffie-Hellman interception, and encrypted communication attacks.",
    tech: ["Python", "Networking", "AES", "Diffie-Hellman"],
    date: "2025",
    github: "https://github.com/Shashvat2005/Secure_App_IITR",
    // demo: "#",
    featured: 0,
  },

  {
    title: "Hotel Booking System",
    description:
      "Full-stack ticket booking platform built using React, Spring Boot, Firebase, and REST APIs.",
    tech: ["React", "Spring Boot", "Firebase", "MySQL"],
    date: "2026",
    github: "https://github.com/Shashvat2005/BMK-frontend",
    // demo: "#",
    featured: 0,
  },

  {
    title: "Chess Engine",
    description:
      "Custom Java chess engine featuring move generation, board evaluation, minimax search, and alpha-beta pruning.",
    tech: ["Java", "Algorithms", "Minimax", "Alpha-Beta Pruning"],
    date: "2026",
    github: "https://github.com/Shashvat2005/Chess-Engine",
    // demo: "#",
    featured: 1,
  },
];