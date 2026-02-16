import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
  title: "Kali Linux & Cybersecurity - Niladri Chatterjee",
  description:
    "Explore Niladri Chatterjee's knowledge and experience with Kali Linux, cybersecurity tools, penetration testing, and security best practices. Learn about security in web development.",
  keywords:
    "Kali Linux, Cybersecurity, Penetration Testing, Security Tools, Ethical Hacking, Linux, Security Best Practices, Web Security, Niladri Chatterjee Cybersecurity",
  openGraph: {
    title: "Kali Linux & Cybersecurity - Niladri Chatterjee",
    description: "My experience with Kali Linux and cybersecurity",
    url: "https://niladri1.vercel.app/kali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kali Linux & Cybersecurity",
    description: "My experience with security tools",
  },
  alternates: {
    canonical: "/kali",
  },
};


export default function KaliPage() {
	return <Kali />;
}