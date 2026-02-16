import Projects from "@/pages/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio by Niladri Chatterjee | MERN Stack Applications",
  description:
    "Explore web development projects by Niladri Chatterjee. MERN stack applications, React.js projects, Next.js websites, Node.js backends, full-stack solutions, and open-source contributions. See real-world examples of modern web development.",
  keywords:
    "Web Development Projects, MERN Stack Projects, React.js Portfolio, Next.js Applications, Node.js Projects, Full Stack Applications, JavaScript Projects, Open Source Projects, Niladri Chatterjee Projects",
  openGraph: {
    title: "Projects - Portfolio by Niladri Chatterjee",
    description:
      "View my latest web development projects and full-stack applications",
    url: "https://niladri1.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Portfolio by Niladri Chatterjee",
    description: "View my latest web development projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return <Projects />;
}
