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
    <section aria-labelledby="recebes-title" className="sec sec-paper">
      <div className="wrap">
        <SectionHead id="recebes-title">{recebes.title}</SectionHead>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recebes.items.map((item, i) => {
            const Icon = ICONS[i] ?? Radio;
            return (
              <Reveal
                as="li"
                key={item}
                delay={(i % 3) * 70}
                className="card flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lg-paper text-lg-navy">
                  <Icon aria-hidden className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <p className="t-small pretty pt-2.5">
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
