const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="circle-frame w-80 h-80">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-neon-blue/20 flex items-center justify-center">
                <img src="/fareesa.jpeg" alt="" />
                  {/* <span className="text-muted-foreground text-lg">About Image</span> */}
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-neon-blue animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-accent animate-pulse"></div>
            </div>
          </div>
          
          {/* Right Content - Text */}
          <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I’m a curious and driven developer with a strong focus on building impactful digital solutions. My journey in tech has been shaped by continuous learning, hands-on projects, and a deep interest in both backend development and the exciting possibilities of AI/ML.
              </p>
              
              <p>
              I enjoy working with the MERN stack to build secure, scalable applications, while experimenting with features like authentication, APIs, and AI-powered enhancements. For me, development is about crafting practical, user-friendly, and innovative experiences, not just writing code.
              </p>
              
              <p>
              Beyond coding, I love exploring new technologies, working on open-ended ideas, and keeping pace with industry trends that inspire the future of software. Every project I take on is a step toward growth, creativity, and solving real-world problems.
              </p>
            </div>
            
            <div className="pt-4">
            <div className="pt-4">
  <a
    href="/Fareesa_Resume.pdf"
    download="Fareesa_Resume.pdf"
    className="btn-neon-outline"
  >
    Download CV
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;