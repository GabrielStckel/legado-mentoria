import { CalendarDays, Check } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { hero } from "@/content/legado";
import { HERO_CTA_TARGET } from "@/config/legado";
import { headlineIndexFrom } from "@/lib/checkout";
import { CtaButton } from "./primitives";
import logo from "@/assets/legado/logo-antiparadigma.webp";

export default function Hero() {
  const h = useRouterState({
    select: (s) => (s.location.search as Record<string, unknown>)?.["h"],
  });
  const variants = hero.headlineVariants;
  const headline = variants[headlineIndexFrom(h, variants.length)] ?? {
    text: variants[0]?.text ?? "",
    highlight: "",
  };

  return (
    <>
      {/* Barra superior: logo sempre sobre fundo branco */}
      <div className="border-b border-lg-line bg-white">
        <div className="wrap flex h-[72px] items-center justify-between md:h-[84px]">
          <img
            src={logo}
            alt="Antiparadigma — Soluções Sistêmicas"
            width={720}
            height={417}
            fetchPriority="high"
            className="h-auto w-[104px] md:w-[124px]"
          />
          <CtaButton
            label={hero.cta}
            target={HERO_CTA_TARGET}
            position="header"
            arrow={false}
            className="btn-sm hidden md:inline-flex"
          />
        </div>
      </div>

      <header className="bg-lg-paper">
        <div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
          {/* Coluna principal */}
          <div className="lg:col-span-7">
            <h1 className="t-h1">{headline.text}</h1>
            <span className="bar ml-0" aria-hidden />
            <p className="t-lead jt mt-6 text-lg-ink">{hero.lead}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <CtaButton
                id="hero-cta"
                label={hero.cta}
                target={HERO_CTA_TARGET}
                position="hero"
                className="w-full sm:w-auto"
              />
              <p className="t-small flex items-center gap-2 font-semibold text-lg-navy">
                <CalendarDays aria-hidden className="h-5 w-5 text-lg-blue" />
                {hero.startNote}
              </p>
            </div>
          </div>

          {/* Ficha do programa */}
          <aside className="card lg:col-span-5" aria-label={hero.productName}>
            <p className="t-h3">{hero.productName}</p>
            <p className="t-small jt mt-3 text-lg-ink">{hero.productDescription}</p>
            <ul className="mt-6 space-y-3 border-t border-lg-line pt-6">
              {hero.highlights.map((item) => (
                <li
                  key={item}
                  className="t-small flex items-center gap-3 font-semibold text-lg-navy"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lg-tint">
                    <Check aria-hidden className="h-3.5 w-3.5 text-lg-blue" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </header>
    </>
  );
}
