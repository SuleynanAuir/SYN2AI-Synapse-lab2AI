"use client";

import { useEffect, useRef, useState } from "react";
import type { LearningPathBrand } from "@/lib/learning-path-brands";
import { cn } from "@/lib/utils";

export function OfficialBrandIcon({
  brand,
  className,
  imageClassName,
}: {
  brand: LearningPathBrand;
  className?: string;
  imageClassName?: string;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);

  useEffect(() => {
    // A cached image can finish loading before React attaches its event handlers.
    const image = imageRef.current;
    if (image?.complete && image.currentSrc) {
      if (image.naturalWidth > 0) {
        setLoadedUrl(brand.iconUrl);
      } else {
        setFailedUrl(brand.iconUrl);
      }
    }
  }, [brand.iconUrl]);

  if (!brand.iconUrl || failedUrl === brand.iconUrl) {
    return null;
  }

  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full", className)}
      title={`${brand.name} official icon`}
      aria-label={`${brand.name} official icon`}
      style={{ visibility: loadedUrl === brand.iconUrl ? "visible" : "hidden" }}
    >
      <img
        ref={imageRef}
        src={brand.iconUrl}
        alt=""
        className={cn("absolute inset-0 h-full w-full rounded-full object-contain", imageClassName)}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoadedUrl(brand.iconUrl)}
        onError={() => setFailedUrl(brand.iconUrl)}
      />
    </span>
  );
}
