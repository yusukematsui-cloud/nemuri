import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/microcms";

const BASE = "https://nemuri.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getArticles(100);

  const articleUrls = res.contents.map((a) => ({
    url: `${BASE}/articles/${a.id}`,
    lastModified: new Date(a.revisedAt ?? a.updatedAt ?? a.publishedAt ?? a.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categories = ["cause", "treatment", "goods", "experience", "column", "all"];
  const categoryUrls = categories.map((c) => ({
    url: `${BASE}/category/${c}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const staticUrls = [
    { url: BASE, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${BASE}/privacy`, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE}/policy`, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE}/contact`, changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  return [...staticUrls, ...categoryUrls, ...articleUrls];
}
