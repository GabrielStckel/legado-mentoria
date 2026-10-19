import { grupo } from "@/content/legado";
import { Diamond, Reveal, SectionHeading } from "./primitives";

/* Visual do "campo": ondas saindo do centro e participantes acendendo quando a onda passa */
function FieldVisual() {
  const rings = [70, 120, 170];
  const dots = [
    { r: 70, a: 20 }, { r: 70, a: 200 },
    { r: 120, a: 70 }, { r: 120, a: 150 }, { r: 120, a: 260 }, { r: 120, a: 330 },
    { r: 170, a: 10 }, { r: 170, a: 110 }, { r: 170, a: 190 }, { r: 170, a: 240 }, { r: 170, a: 300 },
  ];
  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[420px]" aria-hidden>
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F86FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2F86FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#core)" />
      {rings.map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#D3DCF2" strokeWidth="1" />
      ))}
      {[0, 1.5, 3].map((d) => (
        <circle key={d} className="field-wave" cx="200" cy="200" r="190" fill="none" stroke="#1550E6" strokeWidth="1.5" style={{ animationDelay: `${d}s` }} />
      ))}
      {dots.map(({ r, a }, i) => {
        const rad = (a * Math.PI) / 180;
        const delay = (r / 190) * 4.5 * 0.55;
        return (
          <circle
            key={i}
            className="field-dot"
            cx={200 + r * Math.cos(rad)}
            cy={200 + r * Math.sin(rad)}
            r="6"
            fill="#0A1A78"
            style={{ animationDelay: `${delay}s` }}
          />
        );
      })}
      <rect x="188" y="188" width="24" height="24" transform="rotate(45 200 200)" fill="#1550E6" />
    </svg>
  );
}

export default function Grupo() {
  const [first, second] = grupo.quote.split(/(?<=\.) /);
  return (
    <section aria-labelledby="grupo-title" className="bg-ap-snow py-20 md:py-28">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading id="grupo-title">{grupo.title}</SectionHeading>
            <div className="space-y-6 text-[17px] leading-[1.85] text-ap-ink md:text-[18px]">
              {grupo.paragraphs.map((p) => (
                <Reveal as="p" key={p}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="order-first flex justify-center md:order-none">
            <div className="w-[78%] md:w-full">
              <FieldVisual />
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
          <div className="mb-6 flex items-center justify-center gap-2" aria-hidden>
            <Diamond /> <Diamond /> <Diamond />
          </div>
          <p className="text-balance text-[24px] font-semibold leading-[1.4] text-ap-heading md:text-[34px]">
            {first} <span className="font-extrabold text-gradient-blue">{second}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
