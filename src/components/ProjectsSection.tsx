import { useState } from "react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects"
  );

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
    description:
      `Had the privilege to present my Final Year Project "VERSE AI" at IOBM’s Technova’25, showcasing it to both industry professionals and internal university invigilators.`,
    issuer: "IOBM",
    date: "2025",
    imageUrl: "/Technova.jpeg",
  },
];


  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {activeTab === "projects" ? "My Projects" : "My Certificates"}
          </h2>

          {/* Tab Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "projects" ? "btn-neon" : "btn-neon-outline"
                }`}
            >
              Full Stack Application
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${activeTab === "certificates" ? "btn-neon" : "btn-neon-outline"
                }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Projects Slider */}
        {activeTab === "projects" && (
          <div className="overflow-hidden">
            <div className="flex gap-11 animate-scroll-slow group">
              {[...projects, ...projects].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="glow-card group-hover:[animation-play-state:paused] hover:scale-105 transition-transform duration-300 flex-shrink-0 w-80"
                >
                  {/* Project Image Placeholder */}
                {/* Project Image */}
<div className="w-full h-44 rounded-2xl mb-6 flex items-center justify-center border border-primary/20 overflow-hidden">
  {project.imageUrl ? (
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover rounded-2xl"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
      <span className="text-muted-foreground">Project Image</span>
    </div>
  )}
</div>


                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
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
                        className="btn-neon text-sm px-6 py-2 text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon-outline text-sm px-6 py-2 text-center"
                      >
                        Code
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Grid */}
        {activeTab === "certificates" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {certificates.map((certificate) => (
              <div key={`${certificate.id}-${certificate.title}`} className="glow-card group">
                {/* Certificate Image Placeholder */}
              <div className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center border border-accent/20 overflow-hidden">
  {certificate.imageUrl ? (
    <img
      src={certificate.imageUrl}
      alt={certificate.title}
      className="w-full h-full object-cover rounded-2xl"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-neon-blue/20 flex items-center justify-center">
      <span className="text-muted-foreground">Certificate Image</span>
    </div>
  )}
</div>


                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {certificate.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {certificate.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">
                      {certificate.issuer}
                    </span>
                    <span className="text-muted-foreground">
                      {certificate.date}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button className="btn-neon-outline text-sm px-6 py-2">
                      Verify Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
