import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Portfolio = () => {
  return (
    <main className="relative">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      {/* Floating Background Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 w-24 h-24 rounded-full bg-neon-blue/5 blur-3xl animate-pulse delay-500"></div>
    </main>
  );
};

export default Portfolio;