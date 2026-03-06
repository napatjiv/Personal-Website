"use client";

import { FadeIn } from "@/components/FadeIn";

export function DesignToData() {
  return (
    <section
      id="data"
      className="relative bg-gradient-to-b from-white via-green-50/30 to-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
            From Posters to Dashboards
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
            Designing 50+ posters shifted how I see visuals entirely. Early on,
            design was about making things pop — bold colors, packed layouts,
            maximum impact. But over time, I realized that visuals aren&apos;t
            decoration. They&apos;re a tool for communication. Every element
            should serve a purpose, and what you leave out matters as much as
            what you put in.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
            That shift — from design as aesthetics to design as visual
            communication — carried directly into data analytics.
            Information-to-space ratio became my guiding principle. Whether the
            canvas is a poster or an executive dashboard, the question is the
            same: does every element earn its place?
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
            At Yazaki North America, I governed Power BI dashboards across
            Americas, EMEA, and Japan — facilitating cross-regional discussions
            in English and Japanese, aligning global standards with local needs,
            and turning raw operational data into visual stories that replaced
            PowerPoint all the way up to the executive level.
          </p>
        </FadeIn>

        {/* Abstract visual: poster → chart transition */}
        <FadeIn delay={0.4}>
          <div className="mx-auto flex max-w-md items-center justify-center gap-6 md:gap-10">
            {/* Poster representation */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-20 flex-col items-center justify-center gap-1 rounded-lg bg-gradient-to-br from-blue-200 via-rose-100 to-amber-100 p-2 shadow-sm md:h-36 md:w-28">
                <div className="h-2 w-10 rounded bg-white/60" />
                <div className="h-2 w-8 rounded bg-white/40" />
                <div className="h-6 w-12 rounded bg-white/30" />
                <div className="h-2 w-10 rounded bg-white/50" />
              </div>
              <span className="text-xs text-gray-400">Visual Design</span>
            </div>

            {/* Arrow */}
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              className="text-gray-300"
            >
              <path
                d="M0 12h32m0 0l-8-8m8 8l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            {/* Dashboard representation */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-20 flex-col items-end justify-end gap-1 rounded-lg border border-gray-200 bg-white p-3 shadow-sm md:h-36 md:w-28">
                <div className="flex w-full items-end gap-1">
                  <div className="h-6 flex-1 rounded-sm bg-blue-200" />
                  <div className="h-10 flex-1 rounded-sm bg-blue-300" />
                  <div className="h-14 flex-1 rounded-sm bg-blue-400" />
                  <div className="h-8 flex-1 rounded-sm bg-blue-200" />
                </div>
              </div>
              <span className="text-xs text-gray-400">Data Visualization</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
