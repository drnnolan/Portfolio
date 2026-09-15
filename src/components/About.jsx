import { about } from "../data/content";
import { Eyebrow, Section } from "./ui";

export default function About() {
  return (
    <Section id="about">
      <Eyebrow>{"// about"}</Eyebrow>
      <p className="m-0 max-w-[70ch] text-[1.08rem] text-ink-muted">
        {about.map((part, i) =>
          part.strong ? (
            <strong key={i} className="font-semibold text-ink">
              {part.text}
            </strong>
          ) : (
            part.text
          ),
        )}
      </p>
    </Section>
  );
}
