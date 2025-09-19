const SkillsSection = () => {
  const skills = [
    { name: "MERN", level: 8 },
    { name: "JavaScript", level: 7 },
    { name: "Node.js Express", level: 8 },
    { name: "React", level: 6 },
    { name: "Tailwind", level: 5 },
    { name: "REST API", level: 7 },
    { name: "MongoDB", level: 7 },
    { name: "JWT", level: 7 },
  ];

  const movingSkills = ["MongoDB", "Node.js", "React.js", "Git", "Multer", "Cloudinary", "Deployment", "Express", "OpenAI API", "JWT", "Tailwind"];

  const SkillDots = ({ level }: { level: number }) => (
    <div className="skill-dots">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`skill-dot ${i < level ? 'active' : 'inactive'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-semibold text-lg">{skill.name}</span>
              <SkillDots level={skill.level} />
            </div>
          ))}
        </div>
        
        {/* Moving Skills Line */}
        <div className="mt-16 overflow-hidden">
          <div className="relative">
            <div className="flex gap-8 animate-scroll whitespace-nowrap group">
              {[...movingSkills, ...movingSkills].map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold transition-all duration-300 hover:scale-110 hover:text-primary-foreground hover:bg-primary/40 cursor-pointer group-hover:[animation-play-state:paused]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;