"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sections } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Napat Jivakanun
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {isHome &&
            sections.slice(1).map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    activeSection === id
                      ? "text-gray-900 font-medium"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          <li>
            <Link
              href="/projects"
              className={`text-sm transition-colors ${
                pathname === "/projects"
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {isHome &&
              sections.slice(1).map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base transition-colors ${
                      activeSection === id
                        ? "text-gray-900 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            <li>
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-base transition-colors ${
                  pathname === "/projects"
                    ? "text-gray-900 font-medium"
                    : "text-gray-400"
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
