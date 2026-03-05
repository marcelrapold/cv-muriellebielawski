"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  staticSrc: string;
  animatedSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AUTO_START_MS = 30000;
const GIF_DURATION_MS = 5040;

export function Avatar({ staticSrc, animatedSrc, alt, className, priority }: AvatarProps) {
  const [mounted, setMounted] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [gifRunId, setGifRunId] = useState(0);
  const hideTimerRef = useRef<number | null>(null);
  const startTimerRef = useRef<number | null>(null);

  const playGifOnce = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    setGifRunId(Date.now());
    setShowGif(true);
    hideTimerRef.current = window.setTimeout(() => setShowGif(false), GIF_DURATION_MS);
  };

  const stopGif = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    setShowGif(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const preload = new window.Image();
    preload.src = animatedSrc;

    startTimerRef.current = window.setTimeout(() => {
      playGifOnce();
    }, AUTO_START_MS);

    return () => {
      if (startTimerRef.current) {
        window.clearTimeout(startTimerRef.current);
      }
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [animatedSrc, mounted]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0">
        <img
          src={staticSrc}
          alt={alt}
          className={cn("w-full h-full object-cover object-center", className)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0" onMouseEnter={playGifOnce} onMouseLeave={stopGif}>
      {/* Static Image - Always rendered, stays in background when GIF is shown */}
      <img
        src={staticSrc}
        alt={alt}
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-out",
          showGif ? "opacity-0" : "opacity-100",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
      />
      
      {/* Animated GIF - soft transition to avoid visual jump */}
      <img
        key={gifRunId}
        src={`${animatedSrc}?run=${gifRunId}`}
        alt={alt}
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center z-10 pointer-events-none transition-opacity duration-300 ease-out",
          showGif ? "opacity-100" : "opacity-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="sync"
        draggable={false}
      />
    </div>
  );
}
