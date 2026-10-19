import { ReactNode, useEffect, useMemo, useRef, useState, ElementType, Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildCheckoutUrl, trackCheckoutClick } from "@/lib/checkout";

/* ---------- Revelação suave ao entrar na tela ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", visible && "is-visible", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/* ---------- Losango (◆) da cartilha ---------- */
export function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-ap-blue", className)} />;
}

/* ---------- Título de seção: barra azul curta + fio (padrão da cartilha) ---------- */
export function SectionHeading({
  children,
  dark = false,
  center = false,
  caps = false,
  className,
  id,
}: {
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
  caps?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-14", center && "text-center", className)}>
      <h2
        id={id}
        className={cn(
          "text-balance font-extrabold leading-[1.12] tracking-[-0.015em]",
          caps ? "text-[26px] uppercase tracking-[0.02em] md:text-[34px]" : "text-[30px] md:text-[44px]",
          dark ? "text-white" : "text-ap-heading",
        )}
      >
        {children}
      </h2>
      <div className={cn("mt-6 flex items-center", center && "justify-center")} aria-hidden>
        <span className={cn("h-[3px] w-16", dark ? "bg-ap-electric" : "bg-ap-blue")} />
        {!center && <span className={cn("h-px flex-1", dark ? "bg-white/15" : "bg-ap-line")} />}
      </div>
    </div>
  );
}

/* ---------- Texto com destaques (negrito / itálico) SEM alterar a copy ---------- */
export function Emph({
  text,
  strong = [],
  italic = [],
  strongClass = "font-bold text-ap-heading",
}: {
  text: string;
  strong?: string[];
  italic?: string[];
  strongClass?: string;
}) {
  const parts = useMemo(() => {
    const all = [...strong, ...italic].filter(Boolean);
    if (!all.length) return [text];
    const esc = all.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return text.split(new RegExp(`(${esc.join("|")})`, "g"));
  }, [text, strong, italic]);
  return (
    <>
      {parts.map((p, i) =>
        strong.includes(p) ? (
          <strong key={i} className={strongClass}>
            {p}
          </strong>
        ) : italic.includes(p) ? (
          <em key={i} className="font-semibold italic text-ap-blue">
            {p}
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/* ---------- Destaque em gradiente de um trecho final ---------- */
export function Highlight({ text, highlight, className }: { text: string; highlight: string; className?: string }) {
  const i = text.lastIndexOf(highlight);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className={className ?? "text-gradient-blue"}>{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

/* ---------- Botão de CTA ---------- */
export function CtaButton({
  label,
  target,
  position,
  className,
  id,
}: {
  label: string;
  target: "oferta" | "checkout";
  position: string;
  className?: string;
  id?: string;
}) {
  const [href, setHref] = useState("#oferta");
  useEffect(() => {
    if (target === "checkout") setHref(buildCheckoutUrl());
  }, [target]);
  const external = href.startsWith("http");
  return (
    <a
      id={id}
      href={href}
      onClick={() => external && trackCheckoutClick(position)}
      className={cn("btn-primary", className)}
    >
      <span className="relative z-[1]">{label}</span>
      <ArrowRight aria-hidden className="relative z-[1] h-5 w-5 shrink-0" strokeWidth={2.4} />
    </a>
  );
}

/* ---------- Fundo escuro com feixe de luz e partículas (do Observatório) ---------- */
const PARTICLES = [
  { endX: "-30vw", delay: "0s", dur: "12s", size: 3, o: 0.45 },
  { endX: "28vw", delay: "2s", dur: "11s", size: 3, o: 0.5 },
  { endX: "-22vw", delay: "4s", dur: "14s", size: 4, o: 0.4 },
  { endX: "18vw", delay: "1.5s", dur: "13s", size: 3, o: 0.45 },
  { endX: "-36vw", delay: "5s", dur: "14s", size: 3, o: 0.35 },
  { endX: "35vw", delay: "3s", dur: "11.5s", size: 3, o: 0.5 },
  { endX: "-14vw", delay: "6s", dur: "13s", size: 3, o: 0.35 },
  { endX: "24vw", delay: "7s", dur: "12s", size: 3, o: 0.4 },
];

export function NightBackdrop({ beam = true }: { beam?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setCount(reduced ? 0 : mobile ? 4 : PARTICLES.length);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {beam && (
        <div className="motion-safe-only absolute inset-0" style={{ filter: "blur(4px)" }}>
          <div
            className="absolute left-1/2 top-0 h-full w-[340px] opacity-[0.22] md:w-[560px]"
            style={{
              background: "linear-gradient(180deg, rgba(143,180,255,0.55) 0%, rgba(47,134,255,0.18) 45%, transparent 100%)",
              clipPath: "polygon(35% 0%, 65% 0%, 92% 100%, 8% 100%)",
              animation: "beam-pulse 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute left-1/2 top-0 h-full w-[120px] opacity-[0.14] md:w-[190px]"
            style={{
              background: "linear-gradient(180deg, rgba(220,232,255,0.8) 0%, rgba(47,134,255,0.15) 55%, transparent 100%)",
              clipPath: "polygon(30% 0%, 70% 0%, 86% 100%, 14% 100%)",
              animation: "beam-pulse 8s ease-in-out infinite",
            }}
          />
        </div>
      )}
      {PARTICLES.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={
            {
              width: p.size,
              height: p.size,
              left: "50%",
              top: "-4%",
              opacity: 0,
              background: "#b9d0ff",
              boxShadow: "0 0 8px 3px rgba(47,134,255,0.45)",
              animation: `diagonal-fall ${p.dur} ease-out infinite ${p.delay}`,
              willChange: "transform, opacity",
              "--end-x": p.endX,
              "--p-opacity": p.o,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
