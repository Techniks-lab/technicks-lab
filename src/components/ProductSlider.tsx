"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Technicks One",
    tagline: "Retro-inspired handheld with modern internals",
    price: 149,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Technicks Lite",
    tagline: "Pocket-sized gaming on the go",
    price: 89,
    rating: 4.6,
    reviews: 187,
  },
  {
    id: 3,
    name: "Technicks Pro",
    tagline: "Premium build, analog sticks, 5\" IPS display",
    price: 219,
    rating: 4.9,
    reviews: 94,
    badge: "New",
  },
  {
    id: 4,
    name: "Arc Controller",
    tagline: "Ergonomic wireless controller for PC & console",
    price: 59,
    rating: 4.5,
    reviews: 231,
  },
  {
    id: 5,
    name: "Pixel Dock",
    tagline: "USB-C dock with HDMI out and charging pass-through",
    price: 39,
    rating: 4.3,
    reviews: 76,
  },
  {
    id: 6,
    name: "Technicks Case",
    tagline: "Hardshell carry case with game cartridge slots",
    price: 29,
    rating: 4.7,
    reviews: 153,
  },
];

export const ProductSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-t border-border bg-surface py-24 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Products
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="rounded-full border border-border p-2.5 text-muted transition-all hover:border-primary/40 hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="rounded-full border border-border p-2.5 text-muted transition-all hover:border-primary/40 hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-72 shrink-0 snap-start rounded-2xl border border-border bg-surface-alt p-5 transition-all hover:border-primary/40"
            >
              <div className="relative mb-4 flex aspect-square items-center justify-center rounded-xl bg-background">
                <span className="text-4xl font-bold text-muted/30">
                  {product.name.charAt(0)}
                </span>
                {product.badge && (
                  <span className="absolute top-2 left-2 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {product.tagline}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-xs font-medium text-foreground">
                  {product.rating}
                </span>
                <span className="text-xs text-muted">
                  ({product.reviews})
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">
                  ${product.price}
                </span>
                <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
