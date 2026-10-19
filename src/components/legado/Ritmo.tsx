import { useEffect, useRef, useState } from "react";
import { ritmo } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";

/* Linha do tempo vertical com preenchimento progressivo (mesmo recurso do Observatório) */
export default function Ritmo() {
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) {
      setVisible(ritmo.steps.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset["index"]);
            setVisible((v) => Math.max(v, idx + 1));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );
    list.querySelectorAll("[data-index]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = ritmo.steps.length;

  return (
    <section aria-labelledby="ritmo-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="ritmo-title">{ritmo.title}</SectionHead>

        <ol ref={listRef} className="col relative">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-lg-line" />
          <span
            aria-hidden
            className="absolute left-[19px] top-6 w-px bg-lg-blue transition-[height] duration-700 ease-out"
            style={{ height: `calc((100% - 3rem) * ${Math.max(0, visible - 1) / (total - 1)})` }}
          />
          {ritmo.steps.map((s, i) => {
            const on = i < visible;
            return (
              <li
                key={s.title}
                data-index={i}
                className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-5 pb-10 last:pb-0 md:gap-7"
              >
                <span
                  aria-hidden
                  className={`t-small relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-colors duration-500 ${
                    on ? "bg-lg-navy text-white" : "border border-lg-line bg-white text-lg-muted"
                  }`}
                >
                  {s.number}
                </span>
                <div className="pt-1.5">
                  {s.detail && <p className="t-label mb-1.5 text-lg-blue">{s.detail}</p>}
                  <h3 className="t-card text-lg-navy">{s.title}</h3>
                  <p className="t-body jt-sm mt-2">{s.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal className="col note mt-12">
          <p className="t-body jt">
            <Emph text={ritmo.note} strong={["A Legado não é um curso."]} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
