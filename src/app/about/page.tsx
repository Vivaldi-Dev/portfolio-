import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Niladri Chatterjee - Full Stack Developer | MERN Stack Expert",
  description:
    "Learn about Niladri Chatterjee, a passionate Full Stack Developer from Kolkata, India. Expertise in MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, and modern web technologies. Dedicated to building scalable, high-performance web applications.",
  keywords:
    "About Niladri Chatterjee, Full Stack Developer Bio, MERN Stack Developer, Software Engineer Kolkata, Web Developer India, React.js Expert, Node.js Developer",
  openGraph: {
    title: "About Niladri Chatterjee - Full Stack Developer",
    description:
      "Learn about my journey as a Full Stack Developer specializing in MERN stack",
    url: "https://niladri1.vercel.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Niladri Chatterjee - Full Stack Developer",
    description: "Learn about my journey as a Full Stack Developer",
  },
  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
	return <About />;
}