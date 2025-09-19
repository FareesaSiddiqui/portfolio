const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex gap-6 bg-background/80 backdrop-blur-md rounded-full px-6 py-3 border border-border/50">
        {[
          { label: 'Home', id: 'hero' },
          { label: 'About', id: 'about' },
          { label: 'Skills', id: 'skills' },
          { label: 'Projects', id: 'projects' },
          { label: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;