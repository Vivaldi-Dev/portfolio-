import Skills from "@/pages/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Technical Skills - Niladri Chatterjee | React, Node.js, MongoDB Expert",
  description:
    "Technical skills and expertise of Niladri Chatterjee: Frontend (React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS), Backend (Node.js, Express.js, REST API), Databases (MongoDB, MySQL, PostgreSQL), DevOps (Git, Docker, AWS), and more.",
  keywords:
    "React.js Skills, Node.js Expertise, Next.js Developer, TypeScript Expert, MongoDB Developer, Full Stack Skills, MERN Stack Skills, JavaScript Developer, Web Development Skills, Technical Expertise",
  openGraph: {
    title: "Technical Skills - Niladri Chatterjee",
    description:
      "My technical skills and expertise in modern web development technologies",
    url: "https://niladri1.vercel.app/skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills - Niladri Chatterjee",
    description: "My technical skills and expertise",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return <Skills />;
}
