import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";


const experiences = [
  {
    title: "Full Stack Developer",
    company: "JS Technology",
    location: "Maputo, Mozambique",
    period: "Mar 2023 - May 2023",
    type: "Full-time",
    description: [
      "Developed and maintained RESTful APIs using Django (Python) and Spring Boot (Java), ensuring scalability and performance",
      "Built modern frontend applications with Next.js, focusing on user experience and responsiveness",
      "Designed optimized database architectures using PostgreSQL, MySQL, and MongoDB",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Panorama Tours",
    location: "Maputo, Mozambique",
    period: "Apr 2025 - May 2025",
    type: "Contract",
    description: [
      "Built a full-stack flight search platform integrating the Amadeus API for real-time data",
      "Developed backend services with Node.js and a responsive frontend with Next.js",
      "Implemented secure authentication and session management",
    ],
  },
  {
    title: "Backend Developer",
    company: "Atlantic Travel",
    location: "Maputo, Mozambique",
    period: "May 2025",
    type: "Contract",
    description: [
      "Developed an attendance management system using Node.js and PostgreSQL",
      "Implemented secure authentication using JWT and optimized data handling with Sequelize ORM",
      "Designed scalable APIs and automated reporting features",
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "BlueString",
    location: "Maputo, Mozambique",
    period: "2026 - Present",
    type: "Full-time",
    description: [
      "Designed and managed cloud infrastructure using Docker and Kubernetes",
      "Implemented CI/CD pipelines with GitHub Actions for automated deployments",
      "Configured monitoring and observability using Prometheus and Grafana",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
