import {
  Mail,
  Code2,
  Palette,
  Database,
  Sparkles,
  Camera,
  GraduationCap,
  BriefcaseBusiness,
  UsersRound
} from "lucide-react";
import reactLogo from "../../../assets/tech/react.svg";
import javascriptLogo from "../../../assets/tech/javascript.svg";
import htmlLogo from "../../../assets/tech/html.svg";
import cssLogo from "../../../assets/tech/css.svg";
import tailwindLogo from "../../../assets/tech/tailwind.svg";
import gsapLogo from "../../../assets/tech/gsap.svg";
import nodeLogo from "../../../assets/tech/node.svg";
import mysqlLogo from "../../../assets/tech/mysql.svg";
import gitLogo from "../../../assets/tech/git.svg";
import apiLogo from "../../../assets/tech/api.svg";
import profilePhoto from "../../../assets/profile/profile-photo.png";
import ragChatbotImage from "../../../assets/projects/rag-chatbot-screenshot.png";
import scorifyDashboardImage from "../../../assets/projects/scorify-dashboard-screenshot.png";
import efootballLeagueImage from "../../../assets/projects/efootball-league-screenshot.png";
import portfolioMotionImage from "../../../assets/projects/portfolio-motion-screenshot.png";

export const profile = {
  name: "Muhammad Dwi Khadafi",
  shortName: "Khadafi",
  role: "Front-End Developer & UI/UX Enthusiast",
  headline: "Merancang antarmuka web yang rapi, hidup, dan mudah digunakan.",
  description:
    "Saya membangun website modern dengan React, detail UI/UX yang konsisten, animasi halus, dan struktur front-end yang mudah dikembangkan.",
  location: "Indonesia",
  email: "mdkhadafii@gmail.com",
  photo: profilePhoto,
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/mdkhadafii",
      icon: Code2
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdkhadafi/",
      icon: BriefcaseBusiness
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mdkhdafi?igsh=MWs0MWR6OWE4N2Mwcw==",
      icon: Camera
    },
    {
      label: "Email",
      href: "mailto:mdkhadafii@gmail.com",
      icon: Mail
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const highlights = [
  {
    value: "10+",
    label: "UI screens designed"
  },
  {
    value: "6+",
    label: "Web projects built"
  },
  {
    value: "100%",
    label: "Responsive mindset"
  }
];

export const aboutCards = [
  {
    title: "Front-End Focus",
    description:
      "Membangun tampilan web yang clean, responsif, reusable, dan mudah dikembangkan.",
    icon: Code2
  },
  {
    title: "UI/UX Mindset",
    description:
      "Memperhatikan hierarchy, spacing, visual balance, flow pengguna, dan micro-interaction.",
    icon: Palette
  },
  {
    title: "AI Web Interest",
    description:
      "Tertarik menggabungkan aplikasi web dengan chatbot, RAG, database, dan API modern.",
    icon: Sparkles
  }
];

export const skills = [
  { name: "React.js", level: 90, icon: "⚛️" },
  { name: "JavaScript", level: 88, icon: "🟨" },
  { name: "HTML5", level: 92, icon: "🌐" },
  { name: "CSS3", level: 90, icon: "🎨" },
  { name: "Tailwind CSS", level: 86, icon: "💨" },
  { name: "GSAP", level: 82, icon: "🌀" },
  { name: "UI/UX Design", level: 84, icon: "🧩" },
  { name: "REST API", level: 80, icon: "🔌" },
  { name: "MySQL", level: 76, icon: "🗄️" },
  { name: "Git & GitHub", level: 82, icon: "🐙" }
];

export const techStack = [
  { name: "React", mark: "R", image: reactLogo },
  { name: "JavaScript", mark: "JS", image: javascriptLogo },
  { name: "HTML5", mark: "H", image: htmlLogo },
  { name: "CSS3", mark: "C", image: cssLogo },
  { name: "Tailwind", mark: "TW", image: tailwindLogo },
  { name: "GSAP", mark: "G", image: gsapLogo },
  { name: "Node.js", mark: "N", image: nodeLogo },
  { name: "MySQL", mark: "DB", image: mysqlLogo },
  { name: "Git", mark: "GT", image: gitLogo },
  { name: "REST API", mark: "API", image: apiLogo }
];

export const projects = [
  {
    title: "RAG Chatbot KOMINFO",
    description:
      "Prototype chatbot AI untuk layanan instansi pemerintah dengan knowledge base dokumen dan tampilan admin.",
    imageLabel: "AI Chatbot",
    image: ragChatbotImage,
    tech: ["React", "FastAPI", "Gemini", "ChromaDB"],
    github: "https://github.com/mdkhadafii/chatbotai"
  },
  {
    title: "Scorify Lead Scoring",
    description:
      "Dashboard prediksi prioritas calon nasabah untuk membantu tim sales membaca peluang konversi.",
    imageLabel: "Dashboard",
    image: scorifyDashboardImage,
    tech: ["Next.js", "React", "PostgreSQL", "Prisma"],
    github: "https://github.com/Scorify-Scoring-Financially/Scorify"
  },
  {
    title: "eFootball League Table",
    description:
      "Website klasemen liga eFootball dengan data tim, ranking, statistik, dan UI kompetisi modern.",
    imageLabel: "League App",
    image: efootballLeagueImage,
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/mdkhadafii/Klasmengame"
  },
  {
    title: "Portfolio Motion UI",
    description:
      "Website portfolio modern dengan animasi scroll, hover spotlight, gradient visual, dan responsive layout.",
    imageLabel: "Portfolio",
    image: portfolioMotionImage,
    tech: ["React", "GSAP", "CSS"],
    github: "https://github.com/mdkhadafii/mdkhadafi-portfolio"
  }
];

export const timeline = [
  {
    icon: GraduationCap,
    type: "Education",
    year: "2016 - 2019",
    title: "SMP 03",
    description:
      "Menempuh pendidikan menengah pertama dan membangun dasar akademik serta kedisiplinan belajar."
  },
  {
    icon: GraduationCap,
    type: "Education",
    year: "2019 - 2022",
    title: "SMA MAN Model",
    description:
      "Menempuh pendidikan menengah atas dengan fokus pada penguatan pengetahuan umum dan kesiapan melanjutkan studi."
  },
  {
    icon: GraduationCap,
    type: "Education",
    year: "2022 — Present",
    title: "Sistem Informasi — Universitas Gunadarma",
    description:
      "Mendalami pengembangan sistem informasi, analisis kebutuhan, perancangan aplikasi, database, dan pengembangan web."
  },
  {
    icon: BriefcaseBusiness,
    type: "Experience",
    year: "2025 — Present",
    title: "Front-End Developer",
    description:
      "Membangun antarmuka website responsif dengan React, memperhatikan reusable component, user flow, dan visual design."
  },
  {
    icon: BriefcaseBusiness,
    type: "Experience",
    year: "2025 - 2026",
    title: "Stupend ASAH",
    description:
      "Mengikuti program Studi Independen ASAH untuk mengembangkan skill teknologi, kolaborasi project, dan kesiapan industri."
  },
  {
    icon: UsersRound,
    type: "Organization",
    year: "2024 — Present",
    title: "Asisten Laboratorium Sistem Informasi",
    description:
      "Membantu penyampaian materi praktikum, problem solving, manajemen kelas, dan pendampingan mahasiswa."
  },
  {
    icon: Database,
    type: "Project",
    year: "2026",
    title: "AI Chatbot & Data-Driven Web Projects",
    description:
      "Mengembangkan konsep aplikasi chatbot berbasis RAG, dashboard, dan sistem web yang terhubung dengan database."
  }
];
