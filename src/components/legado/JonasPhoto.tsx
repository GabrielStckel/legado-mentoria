import j320 from "@/assets/legado/jonas-peres-320.webp";
import j480 from "@/assets/legado/jonas-peres-480.webp";
import j720 from "@/assets/legado/jonas-peres-720.webp";

// GIF transparente de 1px: impede o download da foto onde ela não aparece.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/** Foto do Jonas em tamanhos responsivos (WebP 13–41 KB). */
export function JonasPhoto({
  sizes,
  priority = false,
  hideFrom,
  className,
}: {
  sizes: string;
  priority?: boolean;
  /** Media query a partir da qual a foto não é exibida (e não é baixada). */
  hideFrom?: string;
  className?: string;
}) {
  const img = (
    <img
      src={j480}
      srcSet={`${j320} 320w, ${j480} 480w, ${j720} 720w`}
      sizes={sizes}
      width={720}
      height={720}
      alt="Jonas Peres"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
  if (!hideFrom) return img;
  return (
    <picture>
      <source media={hideFrom} srcSet={BLANK} />
      {img}
    </picture>
  );
}
