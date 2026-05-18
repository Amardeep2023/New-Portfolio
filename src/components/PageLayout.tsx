import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar, Navbar, Footer } from "./Layout";
import TechBackground from "./TechBackground";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function PageLayout() {
  return (
    <div className="min-h-screen selection:bg-primary/20 bg-surface relative">
      <ScrollToTop />
      <TechBackground />
      <Sidebar />
      <Navbar />
      <main className="lg:pl-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}