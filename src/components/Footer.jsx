import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-12">
      <div className="mx-auto max-w-[920px]">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[10px] border border-line bg-surface p-7 sm:p-10">
          <div>
            <h2 className="mb-2.5 text-[1.7rem] font-bold">Let's build something.</h2>
            <p className="m-0 max-w-[42ch] text-ink-muted">
              Open to full-stack developer roles — happy to talk about frontend, backend, or anything
              AI-integration related.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2.5 sm:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="text-[0.94rem] no-underline transition hover:text-accent-ink"
            >
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="text-[0.94rem] no-underline transition hover:text-accent-ink"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.94rem] no-underline transition hover:text-accent-ink"
            >
              {profile.linkedinLabel} ↗
            </a>
            <span className="font-mono text-[0.85rem] text-ink-faint">{profile.location}</span>
          </div>
        </div>

        <p className="mt-10 text-center font-mono text-[0.82rem] text-ink-faint">
          built by jake · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
