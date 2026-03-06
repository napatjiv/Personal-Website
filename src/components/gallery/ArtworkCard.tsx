"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

type Props = {
  artwork: Artwork;
  onClick: () => void;
};

export function ArtworkCard({ artwork, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={artwork.filename}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4 text-left">
          <p className="text-sm font-medium text-white">{artwork.title}</p>
          {artwork.description && (
            <p className="mt-1 text-xs text-white/70">{artwork.description}</p>
          )}
        </div>
      </div>
    </button>
  );
}
