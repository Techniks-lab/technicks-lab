import {
  ArrowRight,
  Code2,
  Cloud,
  Shield,
  Cpu,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "End-to-end product engineering — from MVP to scale. Web, mobile, and APIs built with modern stacks.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP architecture, CI/CD pipelines, containerization, and infrastructure-as-code.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Penetration testing, compliance audits, zero-trust architecture, and 24/7 threat monitoring.",
  },
  {
    icon: Cpu,
    title: "AI & Data Engineering",
    description:
      "Machine learning pipelines, LLM integration, data warehousing, and real-time analytics platforms.",
  },
];

const testimonials = [
  {
    quote:
      "TechnicksLab migrated our entire infrastructure to Kubernetes in 6 weeks — zero downtime. Their team is elite.",
    name: "Sarah Chen",
    role: "CTO, NovaPay",
  },
  {
    quote:
      "They didn't just build software — they re-architected our data platform and cut our costs by 40%.",
    name: "Marcus Rivera",
    role: "VP Engineering, FleetCore",
  },
  {
    quote:
      "Response time to incidents went from hours to minutes. The best security investment we've ever made.",
    name: "Aisha Patel",
    role: "CISO, MedBridge Health",
  },
];

const plans = [
  {
    name: "Starter",
    price: "2,500",
    period: "/mo",
    description: "For startups and small teams getting off the ground.",
    features: [
      "Up to 3 engineers",
      "Cloud cost management",
      "Sprint-based delivery",
      "48h response SLA",
      "Weekly standups",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "7,500",
    period: "/mo",
    description: "For scaling teams that need dedicated firepower.",
    features: [
      "Up to 8 engineers",
      "Dedicated tech lead",
      "24/7 priority support",
      "4h response SLA",
      "Architecture reviews",
      "CI/CD pipeline setup",
    ],
    cta: "Start Building",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For orgs with complex, mission-critical systems.",
    features: [
      "Unlimited engineers",
      "Fractional CTO access",
      "Dedicated account manager",
      "1h response SLA",
      "SOC 2 compliance support",
      "Quarterly roadmapping",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Technicks<span className="text-primary">Lab</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="transition-colors hover:text-foreground"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2 font-medium text-white transition-colors hover:bg-primary-light"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                IT & Engineering
              </p>
              <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-foreground md:text-7xl">
                We build the systems
                <br />
                that power{" "}
                <span className="text-primary">your business.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Infrastructure, software, security, and AI — delivered by a
                senior engineering team that ships fast and stands behind their
                work.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-alt"
                >
                  View Services
                </a>
              </div>
            </div>
            {/* stats */}
            <div className="mt-20 grid max-w-xl grid-cols-3 gap-8 border-t border-border pt-10">
              <div>
                <p className="text-3xl font-bold text-foreground">150+</p>
                <p className="mt-1 text-sm text-muted">Projects shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="mt-1 text-sm text-muted">Uptime delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">40+</p>
                <p className="mt-1 text-sm text-muted">Engineers on staff</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                  About Us
                </p>
                <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                  Engineering-first. Results-driven.
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  TechnicksLab was founded on a simple idea: businesses deserve
                  engineering partners who care as much about outcomes as they do
                  about code. We're a team of senior engineers, architects, and
                  consultants who've built and operated systems at every scale.
                </p>
                <p>
                  From early-stage startups to Fortune 500 enterprises, we
                  partner with teams to solve their hardest technical challenges —
                  whether that's re-architecting a monolith, shipping a new
                  product, or hardening security posture.
                </p>
                <p>
                  We don't do body-shopping or long, vague engagements. We ship
                  working software and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="border-t border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Services
              </p>
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                What we do
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-primary/40 hover:bg-surface-alt"
                >
                  <service.icon className="mb-5 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section
          id="testimonials"
          className="border-t border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Testimonials
              </p>
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                Trusted by engineering leaders
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-surface-alt p-8"
                >
                  <p className="mb-6 text-sm leading-relaxed text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="border-t border-border py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Pricing
              </p>
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                Simple, transparent plans
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-8 transition-all ${
                    plan.highlighted
                      ? "border-primary bg-surface shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                      : "border-border bg-surface"
                  }`}
                >
                  {plan.highlighted && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                      Most Popular
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-sm text-muted">$</span>
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <ChevronRight className="h-3 w-3 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-primary text-white hover:bg-primary-light"
                        : "border border-border text-foreground hover:bg-surface-alt"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section
          id="contact"
          className="border-t border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                  Contact
                </p>
                <h2 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                  Let&apos;s build something great.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Tell us about your project and we&apos;ll get back to you
                  within one business day.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Mail className="h-4 w-4 text-primary" />
                    hello@technickslab.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Phone className="h-4 w-4 text-primary" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-primary" />
                    Austin, TX
                  </div>
                </div>
              </div>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
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
