import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export const Sidebar = () => (
  <aside className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center justify-center gap-12 z-[60] border-r border-outline-variant/10">
    <div className="flex flex-col gap-8">
      <a href="https://github.com/Amardeep2023" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/amardeep-singh-chabada" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:amardeepsinghchabada@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
        <Mail size={20} />
      </a>
    </div>
    <div className="mt-12 h-24 w-[1px] bg-outline-variant/30"></div>
  </aside>
);

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-6">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
          Amardeep<span className="text-on-surface">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`font-medium transition-all text-xs tracking-widest uppercase ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-all shadow-lg shadow-primary/10"
        >
          Let's Talk
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile dropdown menu + overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Dropdown panel — slides down from top */}
      <div
        className={`fixed top-0 left-0 right-0 z-[80] bg-surface/90 backdrop-blur-xl border-b border-outline-variant/10 shadow-2xl transform transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "translate-y-0 visible"
            : "-translate-y-full invisible"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-outline-variant/5">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="font-display text-xl font-bold text-primary tracking-tighter"
          >
            Amardeep<span className="text-on-surface">.dev</span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-all text-sm tracking-widest uppercase ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Panel footer CTA */}
        <div className="px-6 pb-6">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block text-center bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-all shadow-lg shadow-primary/10"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-surface-container-low border-t border-outline-variant/10 py-16 px-8 md:px-24 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
      <Link to="/" className="font-display text-3xl font-bold text-primary">
        Amardeep Singh Chabada
      </Link>
      <nav className="flex flex-wrap justify-center gap-x-16 gap-y-6">
        <a href="https://github.com/Amardeep2023" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">Github</a>
        <a href="https://linkedin.com/in/amardeep-singh-chabada" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">LinkedIn</a>
        <a href="mailto:amardeepsinghchabada@gmail.com" className="text-on-surface-variant hover:text-primary transition-all text-sm tracking-[0.2em] font-bold uppercase">Email Me</a>
      </nav>
      <div className="w-full h-[1px] bg-outline-variant/10"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-[10px] font-bold text-on-surface-variant/50 tracking-[0.2em] uppercase">
        <span>© {new Date().getFullYear()} Amardeep Chabada. All Rights Reserved.</span>
        <span className="flex items-center gap-2">Built with <span className="text-primary italic">Rooted</span> Precision</span>
      </div>
    </div>
  </footer>
);