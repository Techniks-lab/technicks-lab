import { Header } from "@/components/Header";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with TechnicksLab. We build embedded systems, IoT solutions, robotics, and full-stack software.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header forceVisible />
      <main className="pt-24">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Contact
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              Have a project in mind or want to discuss a collaboration?
              We would love to hear from you.
            </p>

            <a
              href="mailto:technickslab@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <Mail className="h-5 w-5" />
              technickslab@gmail.com
            </a>

            <p className="mt-8 text-sm text-gray-400">
              We typically respond within 24 hours.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TechnicksLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="transition-colors hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
