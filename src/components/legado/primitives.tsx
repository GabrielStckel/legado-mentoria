import {
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  ElementType,
  CSSProperties,
} from "react";
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
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ---------- Losango (marcador da cartilha) ---------- */
export function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("diamond", className)} />;
}

/* ---------- Cabeçalho de seção: título centralizado + fio azul ---------- */
export function SectionHead({
  id,
  children,
  as: Tag = "h2",
}: {
  id?: string;
  children: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <header className="sec-head">
      <Tag id={id} className={Tag === "h1" ? "t-display" : "t-title"}>
        {children}
      </Tag>
      <span className="rule" aria-hidden />
    </header>
  );
}

/* ---------- Destaques (negrito / itálico) SEM alterar a copy ---------- */
export function Emph({
  text,
  strong = [],
  italic = [],
  strongClass = "font-semibold text-lg-navy",
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
          <em key={i} className="italic">
            {p}
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
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
      className={cn("btn", className)}
    >
      <span>{label}</span>
      <ArrowRight aria-hidden className="h-4 w-4 shrink-0" strokeWidth={2.25} />
    </a>
  );
}

/* ---------- Fundo das faixas escuras: feixe de luz + partículas (mesmo do Observatório) ---------- */
const PARTICLES = [
  { endX: "-30vw", delay: "0s", dur: "12s", size: 3, o: 0.4 },
  { endX: "28vw", delay: "2s", dur: "11s", size: 3, o: 0.45 },
  { endX: "-22vw", delay: "4s", dur: "14s", size: 3, o: 0.35 },
  { endX: "18vw", delay: "1.5s", dur: "13s", size: 3, o: 0.4 },
  { endX: "-35vw", delay: "5s", dur: "14s", size: 3, o: 0.3 },
  { endX: "35vw", delay: "3s", dur: "11.5s", size: 3, o: 0.4 },
];

export function NightBackdrop() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setCount(reduced ? 0 : mobile ? 3 : PARTICLES.length);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="motion-safe-only absolute inset-0" style={{ filter: "blur(4px)" }}>
        <div
          className="absolute left-1/2 top-0 h-full w-[320px] opacity-[0.16] md:w-[520px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(200,214,255,0.5) 0%, rgba(21,80,230,0.18) 45%, transparent 100%)",
            clipPath: "polygon(36% 0%, 64% 0%, 90% 100%, 10% 100%)",
            animation: "beam-pulse 9s ease-in-out infinite",
          }}
        />
      </div>
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
              background: "#dfe7ff",
              boxShadow: "0 0 6px 2px rgba(200,214,255,0.35)",
              animation: `diagonal-fall ${p.dur} ease-out infinite ${p.delay}`,
              willChange: "transform, opacity",
              "--end-x": p.endX,
              "--p-opacity": p.o,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
