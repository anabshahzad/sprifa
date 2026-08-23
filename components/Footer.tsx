import { Mail } from "lucide-react";
import { LogoFull } from "./Logo";

function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.5l-5.3-6.9L5 22H1.9l8.1-9.3L1 2h6.9l4.8 6.3L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6l12.1 16.1Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Products", href: "#products" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "QRServe", href: "#products" },
      { label: "InvoCanvas", href: "#products" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LogoFull className="h-7" />
            <p className="mt-4 max-w-[220px] text-sm text-muted">
              Digital studio &amp; product house.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-muted">
                {col.heading.toUpperCase()}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-fg/80 transition-colors hover:text-teal">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-muted">CONNECT</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-teal hover:text-teal"
              >
                <LinkedinGlyph />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-teal hover:text-teal"
              >
                <InstagramGlyph />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-teal hover:text-teal"
              >
                <XGlyph />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-teal hover:text-teal"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <span>© 2026 Sprifa. All rights reserved.</span>
          <span>Built with care, one launch at a time.</span>
        </div>
      </div>
    </footer>
  );
}
