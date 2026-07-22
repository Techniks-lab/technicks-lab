export interface Product {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  badge?: string;
  hook: string;
  description: string;
  ecosystemNote: string;
}

export const products: Product[] = [
  {
    slug: "sentrytriguard",
    name: "SentryTriguard",
    tagline: "The Ultimate Three-in-One Environmental Shield",
    icon: "",
    image: "/products/SentryTriguard.jpeg",
    badge: "Core Product",
    hook: "Complete vigilance, zero compromise.",
    description:
      "Meet the unblinking eye of your safety ecosystem. SentryTriguard doesn't just react to threats—it anticipates them. By seamlessly integrating perimeter security with proactive environmental monitoring, it detects motion anomalies, toxic gas accumulation, and open flames before they become catastrophes. Constant vigilance, wrapped in an elegant design.",
    ecosystemNote:
      "All powered by the Harmonicks App. One seamless interface to monitor, manage, and synchronize your safety, power, and energy in real time.",
  },
  {
    slug: "powerguard",
    name: "PowerGuard",
    tagline: "Intelligent Protection for Your Critical Loads",
    icon: "",
    image: "/products/power-guard.jpeg",
    badge: "Essential",
    hook: "Total command over your power safety.",
    description:
      "Power is nothing without stability. PowerGuard is your defense against unpredictable electrical environments. Designed to monitor, isolate, and mitigate harmful voltage abnormalities and current leaks, it keeps your equipment running safely under optimal conditions. It's not just a safeguard; it's the foundation of electrical peace of mind.",
    ecosystemNote:
      "All powered by the Harmonicks App. One seamless interface to monitor, manage, and synchronize your safety, power, and energy in real time.",
  },
  {
    slug: "synenergy",
    name: "SynEnergy",
    tagline: "Synchronized Power. Maximum Efficiency.",
    icon: "",
    image: "/products/synEnergy.jpeg",
    badge: "Green Tech",
    hook: "Never waste a single watt of sunlight.",
    description:
      "Harvest the sun with mathematical precision. SynEnergy is an intelligent MPPT solar charger designed to extract peak power from your solar array under any weather condition. By constantly synchronizing panel output with optimal battery charging profiles, it ensures your system stays energized, efficient, and completely self-sustaining. Power generation, evolved.",
    ecosystemNote:
      "All powered by the Harmonicks App. One seamless interface to monitor, manage, and synchronize your safety, power, and energy in real time.",
  },
  {
    slug: "altar",
    name: "ALTAR",
    tagline: "Autonomous Intelligence. Uncompromising Precision.",
    icon: "",
    image: "/hero/product-al.png",
    badge: "Industrial",
    hook: "Rugged mobility meets intelligent site surveying.",
    description:
      "Take human error and harsh environments out of the equation. ALTAR is a fully autonomous, multi-terrain surveying rover engineered for high-precision site inspection and real-time quality analysis. Equipped with omnidirectional mobility and edge-computing vision intelligence, it navigates complex surroundings to analyze materials, detect defects, and audit site integrity completely offline. It doesn't just scan your environment—it masters it.",
    ecosystemNote:
      "Industrial-grade autonomy, fully integrated. Monitor ALTAR's real-time inspection telemetry, path logistics, and structural safety data directly alongside your power and security metrics on the Harmonicks App.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
} 
