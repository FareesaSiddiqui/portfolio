import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>
        
        <div className="glow-card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="input-neon"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="input-neon"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="input-neon resize-none"
                  required
                />
              </div>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn-neon text-lg px-12 py-4">
                Send Message
              </button>
            </div>
          </form>
          
          {/* Social Links or Contact Info */}
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-primary font-semibold">Email</div>
                <div className="text-muted-foreground text-sm">hello@meriem.dev</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold">Phone</div>
                <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold">Location</div>
                <div className="text-muted-foreground text-sm">New York, USA</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse delay-100"></div>
          <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse delay-200"></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;