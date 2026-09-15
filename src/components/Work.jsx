import { entries } from "../data/content";
import { Eyebrow, Section } from "./ui";
import Entry from "./Entry";

export default function Work() {
  return (
    <Section id="work">
      <Eyebrow>{"// experience & projects"}</Eyebrow>
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <Entry key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </Section>
  );
}
