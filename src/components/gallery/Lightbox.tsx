"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Artwork } from "@/lib/artworks";

type Props = {
  artwork: Artwork | null;
  onClose: () => void;
};

export function Lightbox({ artwork, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (artwork) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [artwork, handleKeyDown]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={artwork.filename}
                alt={artwork.title}
                width={1200}
                height={900}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
              />
            </div>

            <div className="mt-3 text-center">
              <p className="text-lg font-medium text-white">
                {artwork.title}
              </p>
              <p className="text-sm text-white/60">
                {artwork.year} &middot; {artwork.era}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
