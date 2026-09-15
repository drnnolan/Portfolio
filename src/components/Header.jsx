import { profile, navLinks } from "../data/content";
import { ButtonLink } from "./ui";

export default function Header({ theme, onToggleTheme }) {
  const [first, middle, last] = profile.brand.split("_");
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[920px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
        <a href="#top" className="font-mono text-[0.95rem] font-semibold text-ink no-underline">
          {first}
          <span className="text-accent">_</span>
          {middle}
          <span className="text-accent">_</span>
          {last}
        </a>

        <nav className="flex flex-wrap gap-4 sm:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent py-1 text-[0.88rem] text-ink-muted no-underline transition hover:border-accent hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-[5px] border border-line-strong px-2.5 py-2 text-[0.88rem] leading-none text-ink transition hover:border-accent hover:text-accent-ink"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <ButtonLink href={`mailto:${profile.email}`}>Say hello</ButtonLink>
        </div>
      </div>
    </header>
  );
}
