"use client";

import { FadeIn } from "@/components/FadeIn";

export function Roots() {
  return (
    <section
      id="roots"
      className="relative bg-gradient-to-b from-blue-50 to-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <FadeIn>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Roots
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mb-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Born in Thailand and shaped by early years in Shanghai between the
              ages of four and seven, I learned from a young age that the world
              speaks in many languages — and that curiosity is the one that
              connects them all.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Living in China during those formative years left a lasting
              impression. It was my first experience realizing that customs, ways
              of thinking, and approaches to problem-solving can vary widely
              across societies, yet still connect through shared human ambition.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              That early cross-cultural exposure became the foundation for
              everything that followed — a drive to learn languages, understand
              different business cultures, and build bridges between systems that
              don&apos;t always speak the same language.
            </p>
          </FadeIn>
        </div>

        {/* Abstract visual — overlapping circles representing cultures merging */}
        <FadeIn direction="right" delay={0.2}>
          <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80">
            <div className="absolute left-4 top-4 h-40 w-40 rounded-full bg-blue-100/60" />
            <div className="absolute right-4 top-12 h-36 w-36 rounded-full bg-green-100/60" />
            <div className="absolute bottom-4 left-16 h-44 w-44 rounded-full bg-amber-50/80" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="text-center font-[var(--font-jp)] text-sm text-gray-400">
                <span className="block text-2xl">好奇心</span>
                curiosity
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Wavy divider to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="h-8 w-full md:h-12"
        >
          <path
            d="M0,30 C300,55 600,5 900,35 C1050,50 1150,20 1200,30 L1200,60 L0,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
