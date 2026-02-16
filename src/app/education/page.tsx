import Education from "@/pages/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - Niladri Chatterjee | B.Tech in Computer Science",
  description:
    "Educational background of Niladri Chatterjee. B.Tech in Computer Science and Engineering from Bengal College of Engineering and Technology, Durgapur. Academic achievements and certifications in web development, programming, and software engineering.",
  keywords:
    "Education, B.Tech Computer Science, Engineering Degree, Bengal College of Engineering, Academic Background, Computer Science Education, Software Engineering Education, Niladri Chatterjee Education",
  openGraph: {
    title: "Education - Niladri Chatterjee",
    description: "My educational background and academic journey",
    url: "https://niladri1.vercel.app/education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education - Niladri Chatterjee",
    description: "My educational background",
  },
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <Education />;
}
