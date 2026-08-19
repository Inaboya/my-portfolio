const links = [
  { href: "#log", label: "Log" },
  { href: "#watchlist", label: "Watchlist" },
  { href: "#positions", label: "Positions" },
  { href: "#profile", label: "Profile" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md transition-all">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Terminal Brand Logo */}
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 font-mono text-sm tracking-tight text-text transition-colors"
        >
          <span className="text-green font-semibold group-hover:underline">
            david@momoh
          </span>
          <span className="text-muted">:~$</span>
          <span className="inline-block h-3.5 w-2 bg-green/80 animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-green group"
              >
                <span>{link.label}</span>
                {/* Subtle underline glow on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Action */}
        <a
          href="mailto:momohdavid21@gmail.com"
          className="inline-flex items-center gap-1.5 rounded border border-green/30 bg-green/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-green transition-all duration-200 hover:border-green hover:bg-green hover:text-ink hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] active:scale-[0.98]"
        >
          <span>Contact</span>
          <span className="text-[10px]">↗</span>
        </a>
      </nav>
    </header>
  );
}