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

        setTimeout(() => setStatus(null), 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
        setStatus("error");

        setTimeout(() => setStatus(null), 2000);
      });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Contact</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        {/* Contact Form */}
        <div className="glow-card max-w-2xl mx-auto p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
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
                  className="input-neon w-full"
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
                  className="input-neon w-full"
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
                  rows={5}
                  className="input-neon w-full resize-none"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSending}
                className="btn-neon w-full sm:w-auto text-base sm:text-lg px-6 py-3"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-4 text-sm sm:text-base">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-4 text-sm sm:text-base">
                  ❌ Oops, something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>

          {/* Email + Location */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-center">
            <div>
              <div className="text-primary font-semibold">Email</div>
              <div className="text-muted-foreground text-sm break-words">
                fareesasiddiqui2003pk@gmail.com
              </div>
            </div>
            <div>
              <div className="text-primary font-semibold">Location</div>
              <div className="text-muted-foreground text-sm">
                Karachi, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-10 flex-wrap">
          <a
            href="https://www.linkedin.com/in/fareesa-siddiqui-697a26250/"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-3 sm:p-4 hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </a>
          <a
            href="https://github.com/FareesaSiddiqui"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-3 sm:p-4 hover:scale-110 transition-transform duration-300"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </a>
          <a
            href="mailto:fareesasiddiqui2003pk@gmail.com"
            className="glow-card p-3 sm:p-4 hover:scale-110 transition-transform duration-300"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </a>
        </div>

        {/* Decorative Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent animate-pulse delay-100"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neon-blue animate-pulse delay-200"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
