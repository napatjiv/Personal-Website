"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Global Tax Calculator",
    description:
      "Whether you're earning passive income abroad, planning for retirement in a new country, or just exploring where your money goes furthest — comparing tax systems across borders is surprisingly hard. This tool makes it simple: pick your countries, enter your income, and instantly see the after-tax breakdown side by side.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/napatjiv/global-tax-calculator",
    live: "https://napatjiv.github.io/global-tax-calculator/",
    highlights: [
      "16 countries with up-to-date tax brackets",
      "Built for expats, retirees & remote workers",
      "Accounts for social security, deductions & local taxes",
      "Fully client-side — no server, no data collected",
    ],
  },
  {
    title: "NEAT BURN — Lifestyle Calorie Optimizer",
    description:
      "Stuck at a desk 8+ hours a day and wondering where any calorie burn is supposed to come from? Your smartwatch tracks your runs, but it ignores everything else — cooking, cleaning, even fidgeting. NEAT BURN calculates the calories you burn through everyday activities using research-backed MET values, so you can finally see the full picture of your daily energy expenditure.",
    tech: ["React", "JavaScript", "Vite", "CSS"],
    github: "https://github.com/napatjiv/NEAT",
    live: "https://napatjiv.github.io/NEAT/",
    highlights: [
      "25+ daily activities with research-backed MET values",
      "Environmental adjustments for temperature, surface & carried load",
      "Real-time calculations as you tweak inputs",
      "Fully client-side — no server, no data collected",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-700"
          >
            <span>&larr;</span> Back to home
          </Link>

          <h1 className="mb-2 text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mb-12 text-lg text-gray-500">
            Things I&apos;ve built — from curiosity-driven side projects to
            practical tools.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        Live Site
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Highlights
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
