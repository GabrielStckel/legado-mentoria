import { CalendarDays, Check } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { hero, mentor } from "@/content/legado";
import { HERO_CTA_TARGET } from "@/config/legado";
import { headlineIndexFrom } from "@/lib/checkout";
import { CtaButton } from "./primitives";
import { JonasPhoto } from "./JonasPhoto";
import logo from "@/assets/legado/logo-antiparadigma-260.webp";

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
        <div className="wrap flex h-[72px] items-center justify-center md:h-[84px] md:justify-between">
          <img
            src={logo}
            alt="Antiparadigma Soluções Sistêmicas"
            width={260}
            height={151}
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

      <header className="bg-lg-sky">
        <div className="wrap grid items-center gap-8 py-10 md:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          {/* Coluna principal (centralizada no celular, à esquerda no desktop) */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <h1 className="t-h1 mx-auto max-w-[15ch] lg:mx-0 lg:max-w-none">{headline.text}</h1>
            <span className="bar lg:ml-0" aria-hidden />

            {/* Foto do Jonas: só no celular/tablet (no desktop ela fica em "Quem conduz") */}
            <figure className="mx-auto mt-7 w-fit lg:hidden">
              <div className="h-[184px] w-[184px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_8px_24px_-12px_rgba(11,22,96,0.35)] sm:h-[210px] sm:w-[210px]">
                <JonasPhoto
                  priority
                  hideFrom="(min-width: 1024px)"
                  sizes="210px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="t-small mt-3 font-bold text-lg-navy">{mentor.name}</figcaption>
            </figure>

            <p className="t-lead mx-auto mt-6 max-w-[34rem] text-lg-ink [text-wrap:pretty] lg:mx-0 lg:max-w-none lg:text-justify lg:[hyphens:auto]">
              {hero.lead}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 lg:justify-start">
              <CtaButton
                id="hero-cta"
                label={hero.cta}
                target={HERO_CTA_TARGET}
                position="hero"
                className="w-full sm:w-auto"
              />
              <p className="t-small flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-semibold text-lg-navy lg:bg-transparent lg:p-0">
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
