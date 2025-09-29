"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type AtuacaoItem = {
  img: string;
  titulo: string;
};

type AtuacoesCarouselProps = {
  items: AtuacaoItem[];
};

export default function AtuacoesCarousel({ items }: AtuacoesCarouselProps) {
  const autoplay = useMemo(() => Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }), []);

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
          {items.map((atuacao, index) => (
            <div key={index} className="shrink-0 w-[90%] px-2 h-[360px]">
              <div className="bg-white h-full flex flex-col p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image src={atuacao.img} alt={atuacao.titulo} width={200} height={200} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-base text-center font-medium text-gray-800 leading-tight min-h-[48px]">
                    {atuacao.titulo}
                  </h3>
                </div>
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


