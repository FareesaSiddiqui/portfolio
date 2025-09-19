import { useState } from "react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates'>('projects');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern design and seamless user experience. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "", // Left empty as requested
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and intuitive interface. Features include team collaboration and progress tracking.",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      imageUrl: "", // Left empty as requested
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Custom portfolio website with interactive animations and responsive design. Showcasing creative projects and professional experience.",
      technologies: ["Next.js", "Framer Motion", "TypeScript"],
      imageUrl: "", // Left empty as requested
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Developer",
      description: "Comprehensive certification covering AWS services, cloud architecture, and best practices for scalable applications.",
      issuer: "Amazon Web Services",
      date: "2024",
      imageUrl: "", // Left empty as requested
    },
    {
      id: 2,
      title: "Google UX Design Professional",
      description: "Professional certificate program focusing on user experience design principles, prototyping, and user research methodologies.",
      issuer: "Google",
      date: "2023",
      imageUrl: "", // Left empty as requested
    },
    {
      id: 3,
      title: "Meta React Developer",
      description: "Specialized certification in React development, covering advanced concepts, hooks, and modern React ecosystem tools.",
      issuer: "Meta",
      date: "2023",
      imageUrl: "", // Left empty as requested
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {activeTab === 'projects' ? 'My Projects' : 'My Certificates'}
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'btn-neon'
                  : 'btn-neon-outline'
              }`}
            >
              Web Application
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'btn-neon'
                  : 'btn-neon-outline'
              }`}
            >
              Certificates
            </button>
          </div>
        </div>
        
        {/* Projects Slider */}
        {activeTab === 'projects' && (
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll-slow group">
              {[...projects, ...projects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="glow-card group-hover:[animation-play-state:paused] hover:scale-105 transition-transform duration-300 flex-shrink-0 w-80">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center border border-primary/20">
                    <span className="text-muted-foreground">Project Image</span>
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
                      <button className="btn-neon text-sm px-6 py-2">
                        Live Demo
                      </button>
                      <button className="btn-neon-outline text-sm px-6 py-2">
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Certificates Grid */}
        {activeTab === 'certificates' && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="glow-card group">
                {/* Certificate Image Placeholder */}
                <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-accent/20 to-neon-blue/20 mb-6 flex items-center justify-center border border-accent/20">
                  <span className="text-muted-foreground">Certificate Image</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {certificate.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{certificate.issuer}</span>
                    <span className="text-muted-foreground">{certificate.date}</span>
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