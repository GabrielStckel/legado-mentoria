import { mentor } from "@/content/legado";
import { MENTOR_PHOTO, TESTIMONIALS } from "@/config/legado";
import { Reveal, SectionHeading } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";
import shard from "@/assets/legado/shard-base-direita.webp";

export default function Mentor() {
  return (
    <section aria-labelledby="mentor-title" className="bg-ap-snow py-20 md:py-28">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="chamfer-lg relative aspect-[4/5] w-full overflow-hidden bg-night">
              {MENTOR_PHOTO ? (
                <img src={MENTOR_PHOTO} alt={mentor.name} loading="lazy" className="h-full w-full object-cover" />
              ) : (
                // Sem foto ainda: painel de marca (some quando MENTOR_PHOTO for preenchido)
                <div className="flex h-full w-full items-center justify-center">
                  <img src={sphere} alt="" aria-hidden loading="lazy" className="float-soft w-[46%] opacity-90" />
                </div>
              )}
              <img src={shard} alt="" aria-hidden loading="lazy" className="pointer-events-none absolute -bottom-8 -right-8 w-[45%] opacity-90" />
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bar-gradient" />
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <SectionHeading id="mentor-title" caps>
              {mentor.title}
            </SectionHeading>
            <Reveal as="p" className="text-[17px] leading-[1.85] text-ap-ink md:text-[19px]">
              <strong className="text-[22px] font-extrabold text-ap-heading md:text-[26px]">{mentor.name}</strong> — {mentor.bio}
            </Reveal>
          </div>
        </div>

        {TESTIMONIALS.length > 0 && (
          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 100} className="chamfer flex flex-col bg-card p-7">
                <p className="flex-1 text-[16px] leading-[1.75] text-ap-ink">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-ap-line pt-5">
                  {t.photo && <img src={t.photo} alt="" loading="lazy" className="h-10 w-10 rounded-full object-cover" />}
                  <span className="text-[14px] font-bold text-ap-heading">{t.name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
