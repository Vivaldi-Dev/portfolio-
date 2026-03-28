import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";

const projects = [
  {
    title: "Ntizu - Job Search Platform",
    description:
      "Full-stack platform that connects companies and candidates. Features advanced job search, profile management, and scalable backend architecture.",
    image: project1,
    github: "https://github.com/Vivaldi-Dev",
    live: "http://easyjob.jstechnology.co.mz/",
    tags: [
      "Django",
      "React",
      "PostgreSQL",
      "REST API",
      "Full Stack",
    ],
  },
  {
    title: "Black View E-commerce",
    description:
      "E-commerce backend system built with Spring Boot, featuring secure authentication (JWT, OAuth2), product and order management, and optimized performance.",
    image: project2,
    github: "https://github.com/Vivaldi-Dev",
    live: "https://blackview.co.mz/",
    tags: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JWT",
      "OAuth2",
      "Backend",
    ],
  },
  {
    title: "Attendance Management System (Mobile)",
    description:
      "Mobile and backend system for attendance tracking with real-time synchronization, secure authentication, and RESTful APIs.",
    image: project3,
    github: "https://github.com/Vivaldi-Dev",
    live: "",
    tags: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Mobile",
    ],
  },
  {
    title: "Flight Search Platform",
    description:
      "Full-stack application for real-time flight search and booking simulation using Amadeus API, with secure authentication and modern UI.",
    image: project4,
    github: "https://github.com/Vivaldi-Dev",
    live: "",
    tags: [
      "Next.js",
      "Node.js",
      "Amadeus API",
      "Full Stack",
      "Authentication",
    ],
  },

  {
    title: "Atlantic Travel Website",
    description:
      "Full-stack web platform for a travel agency featuring flight simulation, travel packages, and dynamic booking experiences. Built with modern web technologies, focusing on performance, scalability, and user experience.",
    image: project2,
    github: "https://github.com/Vivaldi-Dev",
    live: "https://atlantictravel.co.mz/",
    tags: [
      "Next.js",
      "Node.js",
      "Full Stack",
      "Travel Platform",
      "API Integration",
      "Responsive UI",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
