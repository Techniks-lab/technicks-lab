"use client";

import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Where to Buy", href: "/contact" },
  // { label: "Handheld", href: "/contact" },
];

interface Slide {
  image: string;
  mobileImage?: string;
  title: string;
  subtitle: string;
  learn_more?: boolean;
  cta: string;
  ctaHref: string;
  desc?: string;
}

const slides: Slide[] = [
  {
    image: "/hero/device_image1.png",
    title: "Smart MPP",
    subtitle: "Retro-inspired handheld. Modern power.",
    mobileImage: "/products/product-3.jpeg",
    cta: "Shop Now",
    learn_more: true,
    ctaHref: "#buy",
  },
  {
    image: "/hero/product-al.png",
    mobileImage: "/hero/product-1-mobile.png",
    title: "ALTAR",
    subtitle: '5" IPS display. Analog sticks. Premium build.',
    cta: "Shop Now",
    learn_more: true,
    ctaHref: "#buy",
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="group/carousel relative pt-16 md:pt-0 md:h-screen min-h-[600px] overflow-hidden">
      {/* ─── NAV ─── */}
      {/* from-background/70 via-background/60 to-transparent */}
      <nav className="hidden md:block absolute top-0 left-0 right-0 z-20">
        <div className="absolute inset-0 bg-gradient-to-b " />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-200"
          >
            Technicks<span className="text-primary">Lab</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-gray-200 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Search"
              className="rounded-full p-2 text-gray-200 transition-colors hover:bg-gray-200/60 hover:text-gray-900"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label="Account"
              className="rounded-full p-2 text-gray-200 transition-colors hover:bg-gray-200/60 hover:text-gray-900"
            >
              <User className="h-[18px] w-[18px]" />
            </button>
            <Link
              href="#buy"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-primary px-5 py-2 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/70"
            >
              <ShoppingBag className="h-4 w-4" />
              Store
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200/60 hover:text-gray-900 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200/50 bg-white/80 backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="border-b border-gray-100 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
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
            </div>
          </div>
        )}
      </nav>

      {/* ─── SLIDES ─── */}
      <div className="md:absolute md:inset-0 md:z-0 relative w-full h-[50vh] md:h-auto">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`md:absolute md:inset-0 w-full h-full transition-opacity duration-700 ${
              i === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover hidden md:block"
            />
            {slide.mobileImage && (
              <Image
                src={slide.mobileImage}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover md:hidden"
              />
            )}
            {!slide.mobileImage && (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-contain md:hidden"
              />
            )}
          </div>
        ))}
      </div>

      {/* ─── GRADIENT OVERLAY ─── */}
      <div
        className="absolute inset-0 z-5 opacity-20 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, #666 0%, #444 35%, #232323 100%)",
        }}
      />

      {/* ─── TEXT ─── */}
      <div className="relative z-10 md:flex md:h-full md:flex-col md:justify-end pb-8 md:pb-28">
        <div className="absolute inset-x-0 bottom-0 h-52 to-transparent hidden md:block" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-8 md:py-0 md:bg-transparent bg-[#707477]/10">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-900 md:text-gray-300">
            Handhelds &amp; Accessories
          </p>
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-gray-900 md:text-7xl md:text-white">
            {slides[current].title}
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-500 md:text-gray-300">
            {slides[current].subtitle}
          </p>
          <a
            href={slides[current].ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            {slides[current].cta}
          </a>
        </div>
      </div>

      {/* ─── ARROWS ─── */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full hover:bg-white/70 p-3 text-gray-200 opacity-0 backdrop-blur-sm transition-all  group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full hoverbg-white/70 p-3 text-gray-700 opacity-0 backdrop-blur-sm transition-all hover:bg-white/50 group-hover/carousel:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ─── DOTS ─── */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-8 bg-primary"
                : "w-1.5 bg-gray-400/40 hover:bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
