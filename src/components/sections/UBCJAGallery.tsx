"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { ArtworkGrid } from "@/components/gallery/ArtworkGrid";

export function UBCJAGallery() {
  return (
    <section id="ubcja" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
            The Turning Point
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            UBC Japan Association &middot; 2017 &ndash; 2021
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            What began as a curiosity about Japanese culture turned into a
            four-year immersion. As Promotion Executive, I designed over 50
            event posters — and in the process, discovered that visual
            communication was more than a hobby. It was how I think.
          </p>
        </FadeIn>

        {/* Team photos */}
        <FadeIn delay={0.2}>
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/Personal-Website/images/ubcja-2017.jpeg"
                alt="UBCJA Team 2017"
                width={800}
                height={500}
                className="h-64 w-full object-cover md:h-72"
              />
              <p className="mt-2 text-center text-sm text-gray-400">
                UBCJA Team, 2017
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/Personal-Website/images/ubcja-2022.jpeg"
                alt="UBCJA Team 2021"
                width={800}
                height={500}
                className="h-64 w-full object-cover md:h-72"
              />
              <p className="mt-2 text-center text-sm text-gray-400">
                UBCJA Team, 2021
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Design evolution */}
        <FadeIn delay={0.1}>
          <h3 className="mb-2 text-xl font-semibold md:text-2xl">
            A Design Evolution
          </h3>
          <p className="mb-10 max-w-2xl text-base text-gray-500">
            Watch how the style shifted over three years — from maximum detail
            to intentional simplicity.
          </p>
        </FadeIn>

        <ArtworkGrid />

        <FadeIn delay={0.2}>
          <p className="mt-12 text-center">
            <a
              href="https://drive.google.com/drive/folders/1K0GCP21rQvOGGyQDxhJOPkmxD7a0sPKr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              View the full artwork collection
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
