import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "IIT Roorkee",
    role: "Cybersecurity Intern",
    period: "May - June 2025",
    description:
      "Worked on secure communication systems for smart-meter infrastructure. Built MQTT-based communication pipelines and implemented AES-encrypted data transmission between distributed components.",
    skills: [
      "Cybersecurity",
      "AES",
      "MQTT",
      "Java",
      "Python",
      "ESP32",
    ],
    links: [
      {
        label: "Java Server",
        url: "https://github.com/Shashvat2005/MQTT-Java-Server-IITR"
      },
      {
        label: "Python Client",
        url: "https://github.com/Shashvat2005/Secure_App_IITR "
      }
    ]
  },
  {
    company: "Amdox Technologies, Bengaluru",
    role: "JAVA Developer Intern",
    period: "Dec 2025 - Jan 2026",
    description:
      "Worked on developing and learning a backend application using Java Spring Boot.",
    skills: [
      "JAVA",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Git",
    ],
    links: [
      {
        label: "Project Repo",
        url: "https://github.com/Shashvat2005/JAVA-Full-Stack-Developer-Intern---Amdox"
      }
    ]
  },
];