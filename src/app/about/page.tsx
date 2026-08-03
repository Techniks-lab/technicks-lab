import { Header } from "@/components/Header";
import { Cpu, Wrench, Code, Bot } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TechnicksLab — a specialized engineering firm focused on embedded systems, IoT, mechatronics, and full-stack software development.",
  alternates: {
    canonical: "/about",
  },
};

const capabilities = [
  {
    icon: Cpu,
    title: "Embedded Firmware",
    text: "Highly optimized firmware for responsive, professional-grade products with deep hardware-software integration.",
  },
  {
    icon: Wrench,
    title: "Hardware & PCB Design",
    text: "Schematic capture, custom PCB layout, power electronics, and advanced battery management solutions.",
  },
  {
    icon: Code,
    title: "Software & Web",
    text: "Scalable web applications and software ecosystems that interface with physical hardware — dashboards, data management, remote control.",
  },
  {
    icon: Bot,
    title: "Robotics & Autonomy",
    text: "Computer vision, depth perception, and precision control integrated into intelligent autonomous systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header forceVisible />
      <main className="pt-24">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Who We Are
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              About Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              Tech Nicks Lab is a specialized engineering firm focused on the
              intersection of embedded systems, the Internet of Things,
              mechatronics, and full-stack software development. We build
              robust, scalable technologies engineered to perform reliably in
              dynamic, real-world infrastructure landscapes.
            </p>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-gray-50/50 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Core Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-500">
                Precision electronics, smart automation, autonomous robotics,
                and seamless software integration.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {cap.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Vision
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              We do not just assemble components — we architect complete,
              end-to-end solutions. Whether it is designing robust IoT
              architectures, building custom 3D-printed robotic systems, or
              writing the web infrastructure that keeps a smart home running
              securely offline, our focus remains absolute: engineering
              practical, powerful, and intelligent systems for the modern world.
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
