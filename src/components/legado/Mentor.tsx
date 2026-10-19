import { mentor } from "@/content/legado";
import { MENTOR_PHOTO, TESTIMONIALS } from "@/config/legado";
import { Reveal, SectionHead } from "./primitives";
import sphere from "@/assets/legado/simbolo-esfera.webp";

export default function Mentor() {
  return (
    <section aria-labelledby="mentor-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="mentor-title">{mentor.title}</SectionHead>

        <div className="mx-auto grid max-w-[60rem] items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[4px]"
              style={{
                background: "linear-gradient(180deg, var(--lg-night) 0%, var(--lg-navy) 100%)",
              }}
            >
              {MENTOR_PHOTO ? (
                <img
                  src={MENTOR_PHOTO}
                  alt={mentor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              ) : (
                // Sem foto ainda: painel da marca (some quando MENTOR_PHOTO for preenchido)
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={sphere}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={360}
                    height={348}
                    className="w-[38%] opacity-90"
                  />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal as="p" className="t-body jt md:col-span-7">
            <strong className="font-semibold text-lg-navy">{mentor.name}</strong> — {mentor.bio}
          </Reveal>
        </div>

        {TESTIMONIALS.length > 0 && (
          <ul className="mx-auto mt-16 grid max-w-[60rem] gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 80} className="card flex flex-col">
                <p className="t-small jt flex-1">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-lg-line pt-5">
                  {t.photo && (
                    <img
                      src={t.photo}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <span className="t-small font-semibold text-lg-navy">{t.name}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
