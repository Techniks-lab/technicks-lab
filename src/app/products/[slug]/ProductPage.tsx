"use client";

import type { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell, Check, Mail } from "lucide-react";
import { useState, useTransition } from "react";

export function ProductPage({ product }: { product: Product }) {
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    startTransition(async () => {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          product: product.name,
        }),
      });
      setSubmitted(true);
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "TechnicksLab",
    },
    image: product.image,
    url: `https://technickslab.com/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
    },
    category: "IT Infrastructure",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Hook",
        value: product.hook,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Technicks<span className="text-primary">Lab</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              {product.icon} Harmonicks
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-gray-500">
              {product.tagline}
            </p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Hook
              </p>
              <p className="mt-2 text-lg leading-relaxed text-gray-800 italic">
                &ldquo;{product.hook}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="border-t border-gray-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            About {product.name}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {product.description}
          </p>
        </div>
      </section>

      {/* Notification Signup CTA */}
      <section
        id="notify"
        className="border-t border-gray-200 bg-gray-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Bell className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Be First to Know
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {product.name} is coming soon. Sign up to receive launch
            notifications, exclusive early-bird pricing, and updates delivered
            straight to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-50 px-6 py-4 text-green-700">
              <Check className="h-5 w-5" />
              <span className="text-sm font-medium">
                You&apos;re on the list! We&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <div className="relative w-full max-w-sm">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:opacity-50 sm:w-auto"
                >
                  {isPending ? "Signing up..." : "Notify Me"}
                </button>
              </div>
            </form>
          )}

          <p className="mt-4 text-xs text-gray-400">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Ecosystem Note */}
      <section className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm leading-relaxed text-gray-500 italic">
            {product.ecosystemNote}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} TechnicksLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-gray-600">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-gray-600">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-gray-600">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
