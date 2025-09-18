"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type BrandsCarouselProps = {
  images?: string[];
};

const DEFAULT_IMAGES = Array.from({ length: 8 }, (_, i) => `/brands/logo0${i + 1}.png`);

export default function BrandsCarousel({ images = DEFAULT_IMAGES }: BrandsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const autoplay = useMemo(() => {
    const delay = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 1500 : 1000;
    return Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: false });
  }, []);

  const options: EmblaOptionsType = {
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    skipSnaps: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    // Autoplay resume when select
    emblaApi.on("select", () => autoplay.play());
  }, [emblaApi, autoplay]);

  const onMouseEnter = useCallback(() => autoplay.stop(), [autoplay]);
  const onMouseLeave = useCallback(() => autoplay.play(), [autoplay]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={(node) => { viewportRef.current = node; emblaRef(node); }}>
        <div className="flex">
          {images.concat(images).map((src, idx) => (
            <div key={idx} className="shrink-0 px-4">
              <img
                src={src}
                alt={`Logo ${idx % images.length + 1}`}
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


