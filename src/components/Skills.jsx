import { skillGroups } from "../data/content";
import { Eyebrow, Section, Tag, TagRow } from "./ui";

export default function Skills() {
  return (
    <Section id="skills">
      <Eyebrow>{"// skills"}</Eyebrow>
      <div className="grid gap-7 md:grid-cols-2 md:gap-x-10">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h4 className="mb-2.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.05em] text-ink-faint">
              {group.name}
            </h4>
            <TagRow className="gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill} variant="muted">
                  {skill}
                </Tag>
              ))}
            </TagRow>
          </div>
        ))}
      </div>
    </Section>
  );
}
