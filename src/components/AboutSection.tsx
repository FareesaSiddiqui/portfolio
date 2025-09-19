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
                  <span className="text-muted-foreground text-lg">About Image</span>
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
                I'm a passionate developer and designer with expertise in creating 
                beautiful, functional digital experiences. My journey in tech spans 
                several years of continuous learning and innovation.
              </p>
              
              <p>
                I specialize in modern web technologies and have a keen eye for 
                design details that make applications both visually appealing and 
                user-friendly. Every project is an opportunity to push boundaries 
                and deliver exceptional results.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, and staying up-to-date with 
                the latest industry trends.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="btn-neon-outline">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;