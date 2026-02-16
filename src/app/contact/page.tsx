import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Contact Niladri Chatterjee - Hire Full Stack Developer | Get in Touch",
  description:
    "Get in touch with Niladri Chatterjee for web development projects, freelance work, collaboration opportunities, or job inquiries. Email: code.niladri@gmail.com | Phone: +916296554939. Based in Kolkata, India. Available for remote work worldwide.",
  keywords:
    "Contact Niladri Chatterjee, Hire Full Stack Developer, Freelance Web Developer, Contact Web Developer, Hire MERN Stack Developer, Web Development Services, Remote Developer Hire, Developer Contact Kolkata",
  openGraph: {
    title: "Contact Niladri Chatterjee - Full Stack Developer",
    description: "Get in touch for web development projects and collaboration",
    url: "https://niladri1.vercel.app/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Niladri Chatterjee",
    description: "Get in touch for web development projects",
  },
  alternates: {
    canonical: "/contact",
  },
};


export default function ContactPage() {
	return <Contact />;
}