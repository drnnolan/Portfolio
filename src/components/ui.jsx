export function Eyebrow({ children }) {
  return <p className="mb-3.5 font-mono text-[0.8rem] tracking-[0.02em] text-accent">{children}</p>;
}

export function Tag({ children, variant = "accent" }) {
  const styles =
    variant === "accent"
      ? "bg-accent-soft text-accent-ink"
      : "border border-line bg-surface-alt text-ink";
  return (
    <span className={`rounded font-mono text-[0.72rem] px-2 py-[3px] ${styles}`}>{children}</span>
  );
}

export function TagRow({ children, className = "" }) {
  return <div className={`flex flex-wrap gap-1.5 ${className}`}>{children}</div>;
}

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`border-b border-line py-16 last:border-b-0 ${className}`}
    >
      <div className="mx-auto max-w-[920px]">{children}</div>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "ghost", ...rest }) {
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:brightness-110"
      : "border border-line-strong text-ink hover:border-accent hover:text-accent-ink";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-[5px] px-4 py-2.5 text-[0.88rem] font-semibold no-underline transition ${styles}`}
      {...rest}
    >
      {children}
    </a>
  );
}
