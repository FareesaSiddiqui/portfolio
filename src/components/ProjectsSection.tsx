import { useState } from "react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects"
  );
  const [currentIndex, setCurrentIndex] = useState(0); // Mobile slider

  const projects = [
    {
      id: 1,
      title: "E-Commerce Food APP",
      description:
        "A full-stack e-commerce solution built with Nodejs, React, Express, MongoDB along with JWT and refresh token",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      imageUrl: "/image.png",
      liveDemoUrl: "https://foodapp-ua89.onrender.com/",
      codeUrl: "https://github.com/FareesaSiddiqui/FoodApp",
    },
    {
      id: 2,
      title: "AI Writing Assistant",
      description:
        "Built it with full stack along with integrating third party APIs like firebase for auth and Google Gemini. Its helps user identifying its content in terms of Grammer and Meaning",
      technologies: ["Mern", "Firebase", "Tailwind", "Google Gemini"],
      imageUrl: "/image1.png",
      liveDemoUrl: "https://ai-writingassist-frontend.onrender.com/",
      codeUrl: "https://github.com/FareesaSiddiqui/AI-WritingAssist",
    },
    {
      id: 3,
      title: "WanderLust",
      description:
        "Build backend focus more website using session base authentication through cookies along with pagination and filter features, A application where user can search place to stay and book regarding their needs and comfort.",
      technologies: ["Nodejs", "Express", "Cookie", "EJS template"],
      imageUrl: "/image2.png",
      liveDemoUrl: "https://wanderlust-flf4.onrender.com/",
      codeUrl: "https://github.com/FareesaSiddiqui/WanderLust",
    },
      {
      id: 4,
      title: "AI Resume Analyzer",
      description:
      "Built a full-stack MERN application with JWT authentication and Multer for secure resume uploads, integrating Google Gemini API for grammar and content analysis.",
      technologies: ["Nodejs", "Express", "JWT", "React", "Google Gemini API"],
      imageUrl: "/Resume.png",
      liveDemoUrl: "https://ai-resume-analyzer-taupe-nine.vercel.app/",
      codeUrl: "https://github.com/FareesaSiddiqui/AI-ResumeAnalyzer",
    },
  ];

  const certificates = [
    {
      id: 0,
      title: "Database Design Competition",
      description:
        "Secured the Runner-Up position in a schema design and SQL query challenge at DSU. This tested my ability to design efficient database structures under time constraints.",
      issuer: "ACM DSU",
      date: "2023",
      imageUrl: "/dbdesign.jpeg",
    },
    {
      id: 1,
      title: "Speed Debugging",
      description:
        "Participated in FAST NUCES Developer's Day debugging competition, solving DSA problems with hidden bugs. Although we didn’t win, it was a fun learning experience in fast-paced debugging.",
      issuer: "ACM NUCES",
      date: "2024",
      imageUrl: "/SpeedCertificate.jpeg",
    },
    {
      id: 2,
      title: "FYP Showcase – Technova'25",
      description: `Had the privilege to present my Final Year Project "VERSE AI" at IOBM’s Technova’25, showcasing it to both industry professionals and internal university invigilators.`,
      issuer: "IOBM",
      date: "2025",
      imageUrl: "/Technova.jpeg",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            {activeTab === "projects" ? "My Projects" : "My Certificates"}
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "projects" ? "btn-neon" : "btn-neon-outline"
              }`}
            >
              Full Stack Application
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "certificates" ? "btn-neon" : "btn-neon-outline"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Projects */}
        {activeTab === "projects" && (
          <>
            {/* Desktop / Tablet: Auto Scroll */}
            <div className="overflow-hidden hidden sm:block">
              <div className="flex gap-6 sm:gap-11 animate-scroll-slow hover:pause-animation w-max">
                {[...projects, ...projects].map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="glow-card group hover:scale-105 transition-transform duration-300 flex-shrink-0 w-72 sm:w-80"
                  >
                    {/* Image */}
                    <div className="w-full h-40 sm:h-44 rounded-2xl mb-6 flex items-center justify-center border border-primary/20 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon text-xs sm:text-sm px-4 sm:px-6 py-2 text-center"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon-outline text-xs sm:text-sm px-4 sm:px-6 py-2 text-center"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Manual Slider */}
            <div className="block sm:hidden">
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="min-w-full px-4 glow-card group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-full h-40 rounded-2xl mb-4 flex items-center justify-center border border-primary/20 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon text-xs px-3 py-2 text-center"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon-outline text-xs px-3 py-2 text-center"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-primary" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Certificates */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="glow-card group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-44 sm:h-48 rounded-2xl mb-4 flex items-center justify-center border border-accent/20 overflow-hidden">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold">{certificate.title}</h3>
                <p className="text-sm text-muted-foreground">{certificate.description}</p>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-primary font-semibold">{certificate.issuer}</span>
                  <span className="text-muted-foreground">{certificate.date}</span>
                </div>
                <button className="btn-neon-outline mt-2 text-xs px-4 py-2 w-full">
                  Verify Certificate
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
