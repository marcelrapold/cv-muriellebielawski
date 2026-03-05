"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  staticSrc: string;
  animatedSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function Avatar({ staticSrc, animatedSrc, alt, className, priority }: AvatarProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Wait 30 seconds before starting the animation
    const startTimer = setTimeout(() => {
      setIsAnimated(true);

      // The GIF duration is exactly 5040ms
      const stopTimer = setTimeout(() => {
        setIsAnimated(false);
      }, 5040);

      return () => clearTimeout(stopTimer);
    }, 30000);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <Image
      src={isAnimated ? animatedSrc : staticSrc}
      alt={alt}
      fill
      className={cn("object-cover transition-opacity duration-300", className)}
      priority={priority}
      unoptimized={isAnimated} // Required for GIFs to animate correctly in some cases
    />
  );
}
