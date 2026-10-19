import { useEffect, useState } from "react";
import { hero } from "@/content/legado";
import { HERO_CTA_TARGET } from "@/config/legado";
import { CtaButton } from "./primitives";
import { cn } from "@/lib/utils";

/** Barra fixa no rodapé (só mobile). Aparece depois que o botão do topo sai da tela
 *  e some quando a oferta ou o CTA final estão visíveis (não compete com eles). */
export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const ids = ["hero-cta", "oferta", "cta-final"];
    const state: Record<string, boolean> = { "hero-cta": true, oferta: false, "cta-final": false };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (state[e.target.id] = e.isIntersecting));
      setShow(!state["hero-cta"] && !state["oferta"] && !state["cta-final"]);
    });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div
      id="sticky-cta"
      aria-hidden={!show}
      inert={!show ? true : undefined}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-lg-line bg-white/95 px-4 pt-3 backdrop-blur transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <CtaButton
        label={hero.cta}
        target={HERO_CTA_TARGET}
        position="sticky"
        className="min-h-[50px] w-full py-3 text-base"
      />
    </div>
  );
}
