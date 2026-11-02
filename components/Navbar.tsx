"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const BRAND = "IELTS Buddy"; // change me

type NavLink = {
  href: string;
  label: string;
  variant?: "ielts"; // gives the red styling
};

// Edit this list as pages get added.
const LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ielts", label: "IELTS Mock", variant: "ielts" },
  { href: "/resources", label: "Resources" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          {BRAND}
        </Link>

        <nav
          id="primary-nav"
          className={`nav__links${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {LINKS.map(({ href, label, variant }) => (
            <Link
              key={href}
              href={href}
              className={`nav__link${variant ? ` nav__link--${variant}` : ""}`}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <Link href="/ielts" className="btn-accent">
            Get started
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav__menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}