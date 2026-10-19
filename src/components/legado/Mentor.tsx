import { mentor } from "@/content/legado";
import { MENTOR_PHOTO, TESTIMONIALS } from "@/config/legado";
import { Reveal, SectionHead } from "./primitives";
import logo from "@/assets/legado/logo-antiparadigma.webp";

export default function Mentor() {
  return (
    <section aria-labelledby="mentor-title" className="sec sec-white">
      <div className="wrap">
        <SectionHead id="mentor-title">{mentor.title}</SectionHead>

        <div className="mx-auto grid max-w-[58rem] items-center gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <div className="mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-lg border border-lg-line bg-lg-paper">
              {MENTOR_PHOTO ? (
                <img
                  src={MENTOR_PHOTO}
                  alt={mentor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              ) : (
                // Sem foto ainda: logo da marca (some quando MENTOR_PHOTO for preenchido)
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={720}
                    height={417}
                    className="w-[58%] opacity-90"
                  />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal as="p" className="t-body jt md:col-span-7">
            <strong className="font-bold text-lg-navy">{mentor.name}</strong> — {mentor.bio}
          </Reveal>
        </div>

        {TESTIMONIALS.length > 0 && (
          <ul className="mx-auto mt-14 grid max-w-[58rem] gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 70} className="card flex flex-col">
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
