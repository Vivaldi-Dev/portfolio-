import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/VivaldiAfonsoNobelaJrResumev2.pdf";

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "10+ Projects",
      description: "Completed full-stack web applications",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3+ Internships",
      description: "Professional work experience",
    },
  ];

  const interests = [
    "Web Development",
    "Full Stack Developer",
    "Cloud Computing",
    "DevOps",
    "Open Source",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src='/Image3.jpeg'
              alt="Niladri Chatterjee"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm a Full Stack Developer, Cloud Engineer, and Mobile Developer based in Maputo, Mozambique, with 4+ years of experience building scalable and reliable applications. I enjoy turning complex problems into simple, efficient, and maintainable solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans web, mobile, and cloud. I have hands-on experience building modern web applications, developing mobile apps with React Native and Jetpack Compose, and designing backend systems and APIs that scale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I work with technologies like React, Node.js, React Native, and cloud platforms to deliver high-performance applications. I'm passionate about system design, clean architecture, and continuously improving my skills to build impactful digital products.
            </p>
          </div>

          

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download CV
              </a>
              <Link
                to="/skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </Link>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
