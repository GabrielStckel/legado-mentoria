import { Fragment, ReactNode, useEffect, useMemo, useRef, useState, ElementType } from "react";
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
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
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

/* ---------- Cabeçalho de seção: título centralizado + barra azul ---------- */
export function SectionHead({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <header className="sec-head">
      <h2 id={id} className="t-h2">
        {children}
      </h2>
      <span className="bar" aria-hidden />
    </header>
  );
}

/* ---------- Número em círculo (passos, fases, movimentos) ---------- */
export function Num({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span aria-hidden className={cn("num", className)}>
      {children}
    </span>
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
  arrow = true,
}: {
  label: string;
  target: "oferta" | "checkout";
  position: string;
  className?: string;
  id?: string;
  arrow?: boolean;
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
      {arrow && <ArrowRight aria-hidden className="h-5 w-5 shrink-0" strokeWidth={2} />}
    </a>
  );
}
