"use client";

import { FadeIn } from "@/components/FadeIn";
import { social } from "@/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-8 text-base text-gray-500 md:text-lg">
            Whether it&apos;s about analytics, innovation, cross-cultural
            collaboration, or just a good conversation — I&apos;d love to hear
            from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:${social.email}`}
              className="text-base font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
            >
              {social.email}
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>

      {/* River ending — gradient to blue */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="h-12 w-full md:h-16"
        >
          <path
            d="M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40 L1200,80 L0,80 Z"
            fill="#eff6ff"
          />
        </svg>
      </div>

      {/* Footer */}
      <div className="mt-16 bg-blue-50/50 pt-6 pb-4 text-center">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Napat Jivakanun
        </p>
      </div>
    </section>
  );
}
