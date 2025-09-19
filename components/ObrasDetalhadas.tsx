"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

export type ObraDetalhada = {
  nome: string;
  data: string;
  local: string;
  descricao: string;
  imagens: string[];
};

type ObrasDetalhadasProps = {
  obras: ObraDetalhada[];
};

export default function ObrasDetalhadas({ obras }: ObrasDetalhadasProps) {
  const [imagensAtivas, setImagensAtivas] = useState(obras.map(() => 0));

  const proximaImagem = (obraIndex: number) => {
    setImagensAtivas(prev => {
      const novasImagens = [...prev];
      const obra = obras[obraIndex];
      novasImagens[obraIndex] = (novasImagens[obraIndex] + 1) % obra.imagens.length;
      return novasImagens;
    });
  };

  const imagemAnterior = (obraIndex: number) => {
    setImagensAtivas(prev => {
      const novasImagens = [...prev];
      const obra = obras[obraIndex];
      novasImagens[obraIndex] = (novasImagens[obraIndex] - 1 + obra.imagens.length) % obra.imagens.length;
      return novasImagens;
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header da seção */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Projetos em <span className="text-brand-blue">Destaque</span>
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conheça em detalhes alguns de nossos projetos mais representativos
        </p>
      </div>

      {/* Grid de obras - 2 colunas e 2 linhas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {obras.map((obra, obraIndex) => (
          <div key={obra.nome} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200">
            {/* Header da obra */}
            <div className="mb-4">
              <h4 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{obra.nome}</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-brand-blue" />
                  <span>{obra.data}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-brand-blue" />
                  <span>{obra.local}</span>
                </div>
              </div>
            </div>

            {/* Galeria de imagens */}
            <div className="mb-4">
              <div className="relative">
                <img
                  src={obra.imagens[imagensAtivas[obraIndex]]}
                  alt={`${obra.nome} - Imagem ${imagensAtivas[obraIndex] + 1}`}
                  className="w-full h-64 object-cover rounded-3xl"
                />
                
                {/* Navegação das imagens */}
                {obra.imagens.length > 1 && (
                  <>
                    <button
                      onClick={() => imagemAnterior(obraIndex)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md border border-gray-200"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                      onClick={() => proximaImagem(obraIndex)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md border border-gray-200"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {/* Contador de imagens */}
              {obra.imagens.length > 1 && (
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {imagensAtivas[obraIndex] + 1} / {obra.imagens.length}
                  </span>
                </div>
              )}
            </div>

            {/* Descrição */}
            <p className="text-gray-600 leading-relaxed text-sm">
              {obra.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
