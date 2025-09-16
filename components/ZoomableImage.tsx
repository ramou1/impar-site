"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  thumbnailClassName?: string;
};

/**
 * Fullscreen lightbox with zoom and pan support.
 * - Tap/click thumbnail to open
 * - Pinch to zoom on touch devices
 * - Drag to pan when zoomed
 * - Double tap/click to toggle zoom
 * - Buttons for zoom in/out/reset/close
 */
export default function ZoomableImage({
  src,
  alt,
  className,
  thumbnailClassName,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lastPinch = useRef<{ dist: number; centerX: number; centerY: number } | null>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY;
      const zoomIntensity = 0.0015;
      const newScale = clamp(scale + delta * zoomIntensity * scale, 1, 4);

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2 - translate.x;
      const offsetY = e.clientY - rect.top - rect.height / 2 - translate.y;

      const scaleRatio = newScale / scale;
      const newTranslate = {
        x: translate.x - offsetX * (scaleRatio - 1),
        y: translate.y - offsetY * (scaleRatio - 1),
      };

      setScale(newScale);
      setTranslate(newTranslate);
    },
    [scale, translate]
  );

  const startPan = (clientX: number, clientY: number) => {
    setIsPanning(true);
    lastPan.current = { x: clientX, y: clientY };
  };

  const movePan = (clientX: number, clientY: number) => {
    if (!isPanning || !lastPan.current) return;
    const dx = clientX - lastPan.current.x;
    const dy = clientY - lastPan.current.y;
    lastPan.current = { x: clientX, y: clientY };
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
  };

  const endPan = () => {
    setIsPanning(false);
    lastPan.current = null;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    // Support mouse drag to pan when zoomed
    if (e.button === 0 && scale > 1) {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      startPan(e.clientX, e.clientY);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (isPanning) movePan(e.clientX, e.clientY);
  };

  const onPointerUp = () => endPan();

  // Touch handlers for pinch to zoom and pan
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getDistance = (t1: Touch, t2: Touch) => {
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      return Math.hypot(dx, dy);
    };

    const getCenter = (t1: Touch, t2: Touch) => ({
      x: (t1.clientX + t2.clientX) / 2,
      y: (t1.clientY + t2.clientY) / 2,
    });

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dist = getDistance(e.touches[0], e.touches[1]);
        const center = getCenter(e.touches[0], e.touches[1]);
        lastPinch.current = { dist, centerX: center.x, centerY: center.y };
      } else if (e.touches.length === 1 && scale > 1) {
        startPan(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && lastPinch.current) {
        e.preventDefault();
        const dist = getDistance(e.touches[0], e.touches[1]);
        const center = getCenter(e.touches[0], e.touches[1]);
        const newScale = clamp((scale * dist) / lastPinch.current.dist, 1, 4);

        const rect = el.getBoundingClientRect();
        const offsetX = center.x - rect.left - rect.width / 2 - translate.x;
        const offsetY = center.y - rect.top - rect.height / 2 - translate.y;

        const scaleRatio = newScale / scale;
        const newTranslate = {
          x: translate.x - offsetX * (scaleRatio - 1),
          y: translate.y - offsetY * (scaleRatio - 1),
        };

        setScale(newScale);
        setTranslate(newTranslate);
        lastPinch.current = { dist, centerX: center.x, centerY: center.y };
      } else if (e.touches.length === 1 && isPanning) {
        movePan(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) lastPinch.current = null;
      if (e.touches.length === 0) endPan();
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd, { passive: false });
    el.addEventListener("touchcancel", handleTouchEnd, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart as EventListener);
      el.removeEventListener("touchmove", handleTouchMove as EventListener);
      el.removeEventListener("touchend", handleTouchEnd as EventListener);
      el.removeEventListener("touchcancel", handleTouchEnd as EventListener);
    };
  }, [scale, translate, isPanning]);

  const doubleTapTimeout = useRef<number | null>(null);
  const onDoubleTap = () => {
    const targetScale = scale > 1 ? 1 : 2;
    setScale(targetScale);
    setTranslate({ x: 0, y: 0 });
  };

  const onTouchTap = (e: React.TouchEvent) => {
    if (doubleTapTimeout.current) {
      window.clearTimeout(doubleTapTimeout.current);
      doubleTapTimeout.current = null;
      onDoubleTap();
    } else {
      doubleTapTimeout.current = window.setTimeout(() => {
        doubleTapTimeout.current = null;
      }, 250);
    }
  };

  const zoomIn = () => setScale((s) => clamp(s + 0.25, 1, 4));
  const zoomOut = () => setScale((s) => clamp(s - 0.25, 1, 4));
  const reset = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <>
      <button
        type="button"
        aria-label={`Abrir imagem: ${alt}`}
        onClick={open}
        className={`relative group w-full ${thumbnailClassName ?? ""}`}
      >
        <img src={src} alt={alt} className={className} />
        <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 group-active:scale-[0.99] transition-transform" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex flex-col"
        >
          <div className="flex items-center justify-between p-3 sm:p-4 text-white">
            <span className="text-sm sm:text-base line-clamp-1">{alt}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                aria-label="Reduzir zoom"
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
              >
                −
              </button>
              <button
                type="button"
                onClick={reset}
                aria-label="Resetar zoom"
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
              >
                100%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                aria-label="Aumentar zoom"
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
              >
                +
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="ml-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
              >
                Fechar
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onTouchStart={onTouchTap}
            className="relative flex-1 overflow-hidden touch-pan-y touch-pan-x select-none"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
              }}
            >
              <img
                ref={imgRef}
                src={src}
                alt={alt}
                className="max-w-none will-change-transform"
                style={{ transform: `scale(${scale})`, width: "100%", height: "auto" }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


