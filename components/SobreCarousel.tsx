"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type SobreItem = {
  img: string;
  titulo: string;
  descricao: string;
};

type SobreCarouselProps = {
  items: SobreItem[];
};

export default function SobreCarousel({ items }: SobreCarouselProps) {
  const autoplay = useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }), []);

  const options: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
    autoplay.play();
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex pb-6">
          {items.map((item, index) => (
            <div key={index} className="shrink-0 w-[90%] px-2">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 h-full">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Anterior"
        onClick={scrollPrev}
        className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 active:scale-95 text-gray-700"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        aria-label="Próximo"
        onClick={scrollNext}
        className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 active:scale-95 text-gray-700"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-2 mt-2">
        {Array.from({ length: snapCount }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === selectedIndex ? "bg-brand-blue" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
