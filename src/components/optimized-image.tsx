import type { ImgHTMLAttributes } from "react";
import manifest from "@/data/image-manifest.json";
import { withBasePath } from "@/lib/site-config";

type ImageAsset = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  inline?: string;
  placeholder?: string;
};

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & { src: string };

export function OptimizedImage({ src, alt, sizes, style, loading = "eager", ...props }: OptimizedImageProps) {
  const asset = (manifest as Record<string, ImageAsset>)[src];

  return (
    <img
      {...props}
      src={asset?.inline ?? withBasePath(asset?.src ?? src)}
      srcSet={asset?.inline ? undefined : asset?.srcSet.split(", ").map((candidate) => withBasePath(candidate)).join(", ")}
      sizes={asset?.inline ? undefined : sizes}
      width={asset?.width}
      height={asset?.height}
      alt={alt}
      loading={loading}
      decoding="async"
      style={{
        ...(asset?.placeholder ? {
          backgroundImage: `url("${asset.placeholder}")`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        } : {}),
        ...style,
      }}
    />
  );
}
