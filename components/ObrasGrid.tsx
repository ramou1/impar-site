"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export type Obra = {
  nome: string;
  local: string;
  capacidade: string;
  img: string;
};

type ObrasGridProps = {
  items: Obra[];
};

export default function ObrasGrid({ items }: ObrasGridProps) {
  const [visible, setVisible] = useState(3);
  const canShowMore = visible < items.length;

  const Card = ({ obra }: { obra: Obra }) => (
    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <img
          src={obra.img}
          alt={obra.nome}
          className="w-32 h-16 object-cover rounded-lg flex-shrink-0"
        />
        <span className="text-2xl font-bold text-brand-red ml-2">
          {obra.capacidade}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
        {obra.nome}
      </h3>
      <p className="text-gray-600 flex items-center text-sm">
        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
        {obra.local}
      </p>
    </div>
  );

  return (
    <>
      {/* Mobile: mostra em lotes de 3 com botão "Ver mais" */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {items.slice(0, visible).map((obra, index) => (
          <Card key={`m-${index}-${obra.nome}`} obra={obra} />
        ))}
      </div>
      {canShowMore && (
        <div className="md:hidden mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + 3, items.length))}
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-all shadow-lg active:scale-95"
            aria-label="Ver mais obras"
          >
            Ver mais
          </button>
        </div>
      )}

      {/* Desktop/Tablet: mostra tudo como estava */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((obra, index) => (
          <Card key={`d-${index}-${obra.nome}`} obra={obra} />
        ))}
      </div>
    </>
  );
}


