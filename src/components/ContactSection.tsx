import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .send(
        "service_f225cli", // ✅ your Gmail Service ID
        "template_46d5rab", // 🔹 your Template ID
        formData,
        "b5RYOPt4lft01me-0" // 🔹 your Public Key
      )
      .then(() => {
        setIsSending(false);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // ✅ Clear success message after 2 seconds
        setTimeout(() => setStatus(null), 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
        setStatus("error");

        // ✅ Clear error message after 2 seconds
        setTimeout(() => setStatus(null), 2000);
      });
  };

  return (
    <section id="contact" className="py-20 px-0">
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
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
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
              <button
                type="submit"
                disabled={isSending}
                className="btn-neon text-lg px-12 py-4"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-4">
                  ❌ Oops, something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-primary font-semibold">Email</div>
                <div className="text-muted-foreground text-sm">
                  fareesasiddiqui2003pk@gmail.com
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold">Location</div>
                <div className="text-muted-foreground text-sm">
                  Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.linkedin.com/in/fareesa-siddiqui-697a26250/"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-4 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://github.com/FareesaSidduiqui"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-4 hover:scale-110 transition-transform duration-300"
          >
            <Github className="w-6 h-6 text-primary" />
          </a>
          <a
            href="mailto:fareesasiddiqui2003pk@gmail.com"
            className="glow-card p-4 hover:scale-110 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 text-primary" />
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-3 mt-7 mb-0">
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
