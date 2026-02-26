import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

// Client
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// Types
export type ArticleType = "standard" | "ranking" | "experience" | "column";
export type Category = "cause" | "treatment" | "goods" | "experience" | "column";

export const categoryLabelMap: Record<Category, string> = {
  cause: "いびきの原因",
  treatment: "対策・治療",
  goods: "グッズ・レビュー",
  experience: "体験談",
  column: "専門家コラム",
};

export type Article = {
  title: string;
  description: string;
  category: string[];
  categoryLabel: string;
  type: string[];
  readTime: string;
  author?: string;
  authorRole?: string;
  image?: MicroCMSImage;
  body: string;
} & MicroCMSListContent;

// Image helper — prefer local images, then microCMS, then fallback
export function getArticleImage(article: Article, size: "hero" | "card" = "card"): string {
  if (article.image?.url) return article.image.url;
  return `/images/articles/${article.id}.png`;
}

// Helpers
export function getArticleType(article: Article): ArticleType {
  return (article.type?.[0] as ArticleType) || "standard";
}

export function getArticleCategory(article: Article): Category {
  // Try to find category from categoryLabel
  for (const [key, label] of Object.entries(categoryLabelMap)) {
    if (article.categoryLabel === label) return key as Category;
  }
  return "cause";
}

// Fetch functions
export async function getArticles(limit = 20, offset = 0) {
  return client.getList<Article>({
    endpoint: "articles",
    queries: {
      limit,
      offset,
      orders: "-publishedAt",
    },
  });
}

export async function getArticleBySlug(contentId: string) {
  return client.get<Article>({
    endpoint: "articles",
    contentId,
  });
}

export async function getArticlesByCategory(categoryLabel: string, limit = 20) {
  return client.getList<Article>({
    endpoint: "articles",
    queries: {
      limit,
      filters: `categoryLabel[equals]${categoryLabel}`,
      orders: "-publishedAt",
    },
  });
}

export async function getArticlesByType(type: string, limit = 5) {
  return client.getList<Article>({
    endpoint: "articles",
    queries: {
      limit,
      filters: `type[contains]${type}`,
      orders: "-publishedAt",
    },
  });
}
