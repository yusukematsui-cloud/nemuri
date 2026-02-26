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

export type Article = {
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  type: ArticleType;
  readTime: string;
  author?: string;
  authorRole?: string;
  image: MicroCMSImage;
  body: string; // rich editor HTML
} & MicroCMSListContent;

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

export async function getArticlesByCategory(category: Category, limit = 20) {
  return client.getList<Article>({
    endpoint: "articles",
    queries: {
      limit,
      filters: `category[equals]${category}`,
      orders: "-publishedAt",
    },
  });
}

export async function getArticlesByType(type: ArticleType, limit = 5) {
  return client.getList<Article>({
    endpoint: "articles",
    queries: {
      limit,
      filters: `type[equals]${type}`,
      orders: "-publishedAt",
    },
  });
}
