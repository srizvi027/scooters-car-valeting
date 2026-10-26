"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Next.js <Image> that never breaks the layout. If the file is missing,
 * a deliberate branded placeholder is shown instead.
 * The parent must be position: relative with a set size / aspect ratio.
 */
export default function SmartImage({ img, sizes = "100vw", priority = false, className = "", style }) {
  const [failed, setFailed] = useState(false);
  if (!img) return null;

  if (failed) {
    return (
      <div className={`img-placeholder ${className}`} role="img" aria-label={img.alt} style={style}>
        <span>ADD IMAGE</span>
        <small>{img.src}</small>
      </div>
    );
  }

  return (
    <Image
      src={img.src}
      alt={img.alt || ""}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: "cover", objectPosition: img.position || "50% 50%", ...style }}
      onError={() => setFailed(true)}
    />
  );
}
