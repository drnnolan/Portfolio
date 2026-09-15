import { Tag, TagRow } from "./ui";

export default function Entry({ entry, index }) {
  return (
    <article className="relative border-t border-line py-6 pl-11 first:border-t-0">
      <span className="absolute left-0 top-7 font-mono text-[0.78rem] text-ink-faint">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h3 className="text-[1.15rem] font-bold">{entry.title}</h3>
          <p className="mt-0.5 mb-0 text-[0.94rem] text-ink-muted">{entry.org}</p>
        </div>
        {entry.date && (
          <span className="whitespace-nowrap font-mono text-[0.78rem] text-ink-faint">
            {entry.date}
          </span>
        )}
      </div>

      {entry.summary && (
        <p className="mt-2.5 mb-3.5 text-[0.96rem] text-ink-muted">{entry.summary}</p>
      )}

      {entry.tags && (
        <TagRow>
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>
      )}

      {entry.live && (
        <a
          href={entry.live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 inline-block border-b border-accent font-mono text-[0.82rem] font-medium text-accent-ink no-underline transition hover:text-accent"
        >
          Live demo ↗
        </a>
      )}
    </article>
  );
}
