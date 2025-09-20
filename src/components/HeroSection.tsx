const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow">
      {/* Hero Gradient Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="mt-5 text-5xl lg:text-7xl font-bold">
                Hi, I'm <span className="text-primary">Fareesa</span>
              </h1>
<h2 className="text-3xl lg:text-4xl font-semibold text-primary mt-2">
  Full Stack Developer
</h2>
<p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
 I'm a passionate Full Stack Developer with a strong focus on backend
  development and building scalable web applications. I enjoy solving
  real-world problems through clean code, modern technologies, and
  innovative solutions
  </p>


            </div>
            
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <a
    href="#projects"
    className="btn-neon flex items-center gap-2"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <span>Explore Projects</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>

  <a
    href="#contact"
    className="btn-neon-outline flex items-center gap-2"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <span>Get in Touch</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v4h16v-4M12 12v8m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  </a>
</div>


            
            {/* Decorative Dots */}
            <div className="flex gap-3 justify-center lg:justify-start mt-8">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-3 h-3 rounded-full bg-neon-blue"></div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="circle-frame w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img src="/fareesa2.jpeg" alt="" />
                  {/* <span className="text-muted-foreground text-lg">Profile Image</span> */}
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;