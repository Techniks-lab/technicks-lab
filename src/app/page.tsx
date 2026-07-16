import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import Image from "next/image";

const products = [
  { src: "/products/product-1.jpeg", alt: "Technicks One" },
  { src: "/products/product-3.jpeg", alt: "Technicks Pro" },
];

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <section className="grid grid-cols-1 md:grid-cols-2 space-x-4 mx-3 my-3">
        {products.map((p) => (
          <div key={p.alt} className="relative aspect-square">
            <Image src={p.src} alt={p.alt} fill className="object-center" />
          </div>
        ))}
      </section>

      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} TechnicksLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
