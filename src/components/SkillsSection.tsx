const SkillsSection = () => {
  const skills = [
    { name: "React & Next.js", level: 9 },
    { name: "TypeScript", level: 8 },
    { name: "Node.js & Express", level: 8 },
    { name: "Python & Django", level: 7 },
    { name: "UI/UX Design", level: 9 },
    { name: "Database Design", level: 8 },
    { name: "Cloud & DevOps", level: 7 },
    { name: "Mobile Development", level: 6 },
  ];

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
    <section className="py-20 px-6">
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
        
        {/* Additional Skills Categories */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {["React", "Vue.js", "Angular", "Figma", "Photoshop", "Git", "AWS", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;