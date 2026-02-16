import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certificates & Achievements - Niladri Chatterjee | Certifications",
  description:
    "Professional certificates and achievements of Niladri Chatterjee. Certifications in JavaScript, TypeScript, Python, Docker Fundamentals, AWS ECS, Cybersecurity, and more. Verified skills and continuous learning in web development and software engineering.",
  keywords:
    "Certificates, Certifications, Achievements, Professional Certifications, JavaScript Certificate, TypeScript Certificate, Docker Certificate, AWS Certificate, Web Development Certifications, Programming Certificates",
  openGraph: {
    title: "Certificates & Achievements - Niladri Chatterjee",
    description: "My professional certificates and achievements",
    url: "https://niladri1.vercel.app/certificates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates & Achievements",
    description: "My professional certifications",
  },
  alternates: {
    canonical: "/certificates",
  },
};


export default function CertificatesPage() {
	return <Certificates />;
}