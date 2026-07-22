"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { products } from "@/lib/products";

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
    <section id="products" className="border-t border-border bg-surface py-24 pt-32">
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
          className="-mx-6 flex select-none snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-6 pr-6 scrollbar-none"
          style={{ scrollbarWidth: "none", scrollPaddingLeft: "1.5rem" }}
        >
          {products.map((product) => (
            <div
              key={product.slug}
              className="w-80 shrink-0 snap-start rounded-2xl border border-border bg-surface-alt p-5 transition-all hover:border-primary/40"
            >
              <Link
                href={`/products/${product.slug}`}
                className="relative mb-4 block aspect-square overflow-hidden rounded-xl bg-background"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {product.badge}
                  </span>
                )}
              </Link>
              <Link href={`/products/${product.slug}`}>
                <h3 className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  {product.icon} {product.name}
                </h3>
              </Link>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {product.tagline}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-muted/80 italic">
                &ldquo;{product.hook}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 rounded-full border border-primary/40 bg-transparent px-4 py-2 text-center text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  Learn More
                </Link>
                <Link
                  href={`/products/${product.slug}#notify`}
                  className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
