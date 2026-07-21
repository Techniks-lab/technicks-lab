import { products, getProductBySlug } from "@/lib/products";
import { ProductPage } from "./ProductPage";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = "https://technickslab.com";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const productUrl = `${baseUrl}/products/${product.slug}`;

  return {
    title: product.name,
    description: `${product.tagline}. ${product.hook}`,
    keywords: [
      product.name,
      "TechnicksLab",
      "Harmonicks",
      "IT infrastructure",
      "environmental monitoring",
      "power protection",
      "solar energy",
      "autonomous surveying",
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: productUrl,
      siteName: "TechnicksLab",
      title: `${product.name} | TechnicksLab`,
      description: `${product.tagline}. ${product.hook}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | TechnicksLab`,
      description: `${product.tagline}. ${product.hook}`,
      images: [product.image],
    },
  };
}

export default async function ProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Product Not Found</h1>
          <Link
            href="/"
            className="mt-6 inline-block text-primary underline underline-offset-4 hover:text-primary-light"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return <ProductPage product={product} />;
}
