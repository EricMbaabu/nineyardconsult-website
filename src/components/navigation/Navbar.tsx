"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { HamburgerIcon } from "@/components/svg/HamburgerIcon";

export function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sticky nav on scroll
  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — highlight active nav link
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Handle hash URL on initial load
  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(
        window.location.hash.substring(1)
      );
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
      }
    }
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <nav className={`nav${isStuck ? " stuck" : ""}`} id="navbar">
      <div className="nav-bar">
        <a
          href="#home"
          className="n-brand"
          onClick={(e) => scrollTo(e, "home")}
        >
          <Image
            src="/logo.jpg"
            alt="Nineyard Consult"
            width={600}
            height={200}
            className="n-brand-img"
            priority
          />
        </a>
        <div className="n-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
              className={activeSection === link.sectionId ? "act" : ""}
              onClick={(e) => scrollTo(e, link.sectionId)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="mob-btn"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <HamburgerIcon />
        </button>
      </div>
      <div className={`mob-nav${isMobileOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.sectionId}
            href={link.href}
            onClick={(e) => scrollTo(e, link.sectionId)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
