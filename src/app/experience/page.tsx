import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work Experience - Niladri Chatterjee | Professional Journey",
  description:
    "Professional work experience and career journey of Niladri Chatterjee. Internships at Bharat Intern, CodeAlpha, CodeClause, and Oasis Infobyte. Full-stack development experience with MERN stack, React.js, Node.js, and modern web technologies.",
  keywords:
    "Work Experience, Professional Experience, Software Developer Career, Full Stack Developer Journey, Internships, MERN Stack Experience, Web Development Career, Niladri Chatterjee Experience",
  openGraph: {
    title: "Work Experience - Niladri Chatterjee",
    description: "My professional journey as a Full Stack Developer",
    url: "https://niladri1.vercel.app/experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience - Niladri Chatterjee",
    description: "My professional journey",
  },
  alternates: {
    canonical: "/experience",
  },
};


export default function ExperiencePage() {
	return <Experience />;
}