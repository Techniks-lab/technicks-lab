"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Where to Buy", href: "/contact" },
  { label: "Handheld", href: "/contact" },
];

export const Header = ({ forceVisible = false }: { forceVisible?: boolean } = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceVisible);

  useEffect(() => {
    const onScroll = () => setScrolled(forceVisible || window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceVisible]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-300/50 bg-[#ffff] shadow-sm transition-all duration-300 ${
        scrolled ? "md:translate-y-0" : "md:-translate-y-full md:border-transparent md:bg-transparent md:shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Technicks<span className="text-primary">Lab</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-500 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="transition-colors hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-300/50 hover:text-gray-900"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-300/50 hover:text-gray-900"
          >
            <User className="h-5 w-5" />
          </button>
          <Link
            href="#buy"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/50 bg-gray-200/50 px-5 py-2 text-sm font-medium text-gray-900 transition-all hover:border-primary/40 hover:bg-gray-300/50"
          >
            <ShoppingBag className="h-4 w-4" />
            Store
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-300/50 hover:text-gray-900 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-300/50 bg-[#e8e8e8] md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="border-b border-gray-100 py-3 text-sm text-gray-500 transition-colors hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#buy"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingBag className="h-4 w-4" />
              Store
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
