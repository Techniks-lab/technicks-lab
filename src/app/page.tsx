import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductSlider } from "@/components/ProductSlider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />

        <section className="border-t border-border bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              IT & Engineering
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Building systems that power
              <br />
              your business
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              From intelligent power protection to autonomous site surveying, we
              engineer hardware and software that work together seamlessly. One
              ecosystem. Zero compromises.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Explore Products
              </a>
              <a
                href="#"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-muted transition-all hover:border-primary/40 hover:text-foreground"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <ProductSlider />
      </main>

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
