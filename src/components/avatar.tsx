"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const [showGif, setShowGif] = useState(false);
  const [gifRunId, setGifRunId] = useState(0);
  const hideTimerRef = useRef<number | null>(null);

  const playGifOnce = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    setGifRunId(Date.now());
    setShowGif(true);
    hideTimerRef.current = window.setTimeout(() => setShowGif(false), GIF_DURATION_MS);
  };

  useEffect(() => {
    const preload = new window.Image();
    preload.src = animatedSrc;

    const startTimer = window.setTimeout(() => {
      playGifOnce();
    }, AUTO_START_MS);

    return () => {
      window.clearTimeout(startTimer);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [animatedSrc]);

  return (
    <div className="absolute inset-0 z-0" onMouseEnter={playGifOnce}>
      {/* Static Image - Always rendered, stays in background when GIF is shown */}
      <Image
        src={staticSrc}
        alt={alt}
        fill
        className={cn(
          "w-full h-full object-cover object-center",
          showGif ? "opacity-0" : "opacity-100",
          className
        )}
        priority={priority}
      />
      
      {/* Animated GIF - soft transition to avoid visual jump */}
      <img
        key={gifRunId}
        src={`${animatedSrc}?run=${gifRunId}`}
        alt={alt}
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center z-10 pointer-events-none",
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
