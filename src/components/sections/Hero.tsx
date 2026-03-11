"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

const pills = [
  "Business Analytics",
  "Corporate Venture Capital",
  "Japanese Fluency (JLPT N2)",
  "Thai Heritage",
  "Third Culture Kid",
  "Mandarin Learner",
  "Vibe Coder",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <FadeIn>
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 h-44 w-44 overflow-hidden rounded-full border-2 border-gray-100 md:h-52 md:w-52">
            <Image
              src="/Personal-Website/images/profile.jpeg"
              alt="Napat Jivakanun"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Napat Jivakanun
          </h1>

          <p className="mb-8 max-w-lg text-lg text-gray-500 md:text-xl">
            Where analytics meets intuition, and cultures converge.
          </p>

          <div className="mb-12 flex max-w-xl flex-wrap justify-center gap-2">
            {pills.map((pill, i) => (
              <FadeIn key={pill} delay={0.3 + i * 0.07} direction="none">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-600">
                  {pill}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-300"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="h-8 w-full md:h-12"
        >
          <path
            d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30 L1200,60 L0,60 Z"
            fill="#eff6ff"
          />
        </svg>
      </div>
    </section>
  );
}
