import { Radio, PlayCircle, Network, MessagesSquare, Archive, NotebookPen } from "lucide-react";
import { recebes } from "@/content/legado";
import { Emph, Reveal, SectionHead } from "./primitives";

const ICONS = [Radio, PlayCircle, Network, MessagesSquare, Archive, NotebookPen] as const;
const LEADS = [
  "12 encontros ao vivo",
  "12 vídeos de nivelamento",
  "Constelação familiar garantida",
  "Comunidade exclusiva no WhatsApp",
  "Gravações de todos os encontros",
  "Caderno de Ordem",
];

export default function Recebes() {
  return (
    <section aria-labelledby="recebes-title" className="sec sec-sky">
      <div className="wrap">
        <SectionHead id="recebes-title">{recebes.title}</SectionHead>
        <ul className="mx-auto grid max-w-[58rem] gap-4 md:grid-cols-2 md:gap-5">
          {recebes.items.map((item, i) => {
            const Icon = ICONS[i] ?? Radio;
            return (
              <Reveal
                as="li"
                key={item}
                delay={(i % 2) * 60}
                className="card flex items-center gap-4 py-5 md:py-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lg-tint text-lg-blue">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <p className="t-body min-w-0 flex-1">
                  <Emph text={item} strong={[LEADS[i] ?? ""]} />
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
