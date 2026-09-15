import { education, certificates } from "../data/content";
import { Eyebrow, Section } from "./ui";

export default function Education() {
  return (
    <Section id="education">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>{"// education"}</Eyebrow>
          {education.map((item) => (
            <div key={item.degree} className="mb-5">
              <h4 className="mb-1 text-base font-bold">{item.degree}</h4>
              <p className="m-0 text-[0.92rem] text-ink-muted">{item.school}</p>
              {item.gwa && (
                <p className="m-0 text-[0.92rem] font-semibold text-accent-ink">{item.gwa}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          <Eyebrow>{"// certificates"}</Eyebrow>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {certificates.map((cert) => (
              <li
                key={cert.name}
                className="flex justify-between gap-2.5 border-b border-dashed border-line pb-2.5 text-[0.9rem] text-ink-muted"
              >
                <span className="text-ink">{cert.name}</span>
                <span className="whitespace-nowrap font-mono text-[0.78rem]">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
