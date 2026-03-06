"use client";

import { FadeIn } from "@/components/FadeIn";

const explorations = [
  {
    title: "AI & Vibe Coding",
    description:
      "Exploring AI-assisted development workflows and building software projects to understand how new tools are lowering the barriers to innovation.",
  },
  {
    title: "Mandarin Chinese",
    description:
      "Actively studying Mandarin — driven by the practical value of understanding multiple Asian business environments and a personal connection to childhood roots.",
  },
  {
    title: "Tech + Analytics + Innovation",
    description:
      "Seeking roles at the intersection of technology, data, and venture — where understanding systems and building bridges creates real impact.",
  },
];

export function PresentFuture() {
  return (
    <section id="now" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Where I Am Now
          </h2>
          <p className="mb-10 text-lg text-gray-500">
            Corporate Venture Capital Project Coordinator &middot; Yazaki
            Innovations
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Today I support corporate venture capital initiatives and innovation
            projects — automating OPEX analytics with Microsoft Fabric,
            digitizing deal-flow management, and producing executive-level board
            materials that synthesize strategic discussions into structured
            narratives.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h3 className="mb-6 text-xl font-semibold">What I&apos;m Exploring</h3>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {explorations.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.1}>
              <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 transition-colors hover:bg-gray-50">
                <h4 className="mb-2 text-base font-semibold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-12 text-center text-xl font-light italic text-gray-400 md:text-2xl">
            &ldquo;The common thread has always been curiosity about how systems
            connect — whether those systems are languages, technologies, or
            organizations.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
