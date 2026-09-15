import { profile, heroMeta } from "../data/content";
import { Eyebrow, ButtonLink } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line pt-18 pb-14">
      <div className="mx-auto grid max-w-[920px] items-start gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <Eyebrow>{`// ${profile.role}`}</Eyebrow>
          <h1 className="mb-4 text-[clamp(2.1rem,5vw,3.4rem)] font-bold">{profile.name}</h1>
          <p className="mb-7 max-w-[52ch] text-[1.1rem] text-ink-muted">{profile.lede}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              Email me ↗
            </ButtonLink>
            <ButtonLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </ButtonLink>
          </div>
        </div>

        <aside className="rounded-lg border border-line bg-surface p-5 shadow-sm">
          <dl className="m-0 flex flex-col gap-4">
            {heroMeta.map((item) => (
              <div key={item.label} className="flex flex-col gap-[3px]">
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-ink-faint">
                  {item.label}
                </dt>
                <dd className="m-0 text-[0.94rem] font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
