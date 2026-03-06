"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ArtworkCard } from "./ArtworkCard";
import { Lightbox } from "./Lightbox";
import { artworks, yearGroups, type Artwork } from "@/lib/artworks";

export function ArtworkGrid() {
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid gap-12 md:grid-cols-3">
        {yearGroups.map(({ year, era, description }, gi) => {
          const items = artworks.filter((a) => a.year === year);
          return (
            <FadeIn key={year} delay={gi * 0.15}>
              <div>
                <h4 className="mb-1 text-lg font-semibold">{year}</h4>
                <p className="mb-1 text-sm font-medium text-blue-600">
                  &ldquo;{era}&rdquo;
                </p>
                <p className="mb-4 text-sm text-gray-400">{description}</p>
                <div className="flex flex-col gap-4">
                  {items.map((artwork) => (
                    <ArtworkCard
                      key={artwork.id}
                      artwork={artwork}
                      onClick={() => setSelected(artwork)}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <Lightbox artwork={selected} onClose={() => setSelected(null)} />
    </>
  );
}
