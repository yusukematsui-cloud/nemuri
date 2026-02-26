import Link from "next/link";
import Image from "next/image";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { AppCTA } from "@/components/shared/AppCTA";
import { getArticles, getArticlesByType, getArticleImage } from "@/lib/microcms";
import type { Article } from "@/lib/microcms";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const categories = [
  { name: "いびきの原因", href: "/category/cause", accent: false },
  { name: "対策・治療", href: "/category/treatment", accent: false },
  { name: "グッズ・レビュー", href: "/category/goods", accent: true },
  { name: "体験談・インタビュー", href: "/category/experience", accent: false },
];

export const revalidate = 60; // ISR: 60秒ごとに再生成

export default async function HomePage() {
  const [allRes, columnRes] = await Promise.all([
    getArticles(10),
    getArticlesByType("column", 3),
  ]);

  const all = allRes.contents;
  const featured = all[0] as Article | undefined;
  const sideArticles = all.slice(1, 4);
  const latest = all.slice(0, 6);
  const popular = all.slice(0, 5);
  const columns = columnRes.contents;

  if (!featured) {
    return (
      <div className="max-w-[1440px] mx-auto px-14 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-text-primary mb-4">
          NEMURI
        </h1>
        <p className="text-text-secondary mb-6">
          記事がまだ公開されていません。microCMS から記事を追加してください。
        </p>
        <a
          href="https://nemuri.microcms.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-accent-blue text-white rounded-md text-sm font-semibold"
        >
          microCMS 管理画面を開く
        </a>
      </div>
    );
  }

  const featuredImage = getArticleImage(featured, "hero");

  return (
    <>
      {/* H1 — visually present but compact */}
      <h1 className="sr-only">NEMURI — いびき・睡眠改善の専門メディア</h1>

      {/* Hero */}
      <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 px-4 md:px-14 py-12">
        <div className="flex-1">
          <Link href={`/articles/${featured.id}`} className="group block">
            <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-6">
              <Image
                src={featuredImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                sizes="60vw"
              />
            </div>
            <span className="inline-block px-3 py-1 rounded-[2px] bg-tag-bg text-[11px] font-semibold text-tag-text tracking-[1px] mb-3">
              {featured.categoryLabel}
            </span>
            <h2 className="font-display text-[32px] font-bold text-text-primary leading-[1.5] tracking-[-0.5px] mb-3 group-hover:text-accent-blue transition-colors">
              {featured.title}
            </h2>
            <p className="text-sm text-text-secondary leading-[1.8] mb-2">
              {featured.description}
            </p>
            <p className="text-xs text-text-muted">
              <time dateTime={featured.publishedAt || featured.createdAt}>{formatDate(featured.publishedAt || featured.createdAt)}</time> · 読了 {featured.readTime}
            </p>
          </Link>
        </div>

        <div className="w-full lg:w-[380px] shrink-0 flex flex-col">
          {sideArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className={`group flex gap-4 items-center py-4 ${i < sideArticles.length - 1 ? "border-b border-border-light" : ""}`}
            >
              <div className="relative w-[100px] h-[72px] rounded-[3px] overflow-hidden shrink-0">
                <Image
                  src={getArticleImage(article)}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-accent-blue tracking-[0.5px] mb-1">
                  {article.categoryLabel}
                </p>
                <p className="text-sm font-medium text-text-primary leading-[1.6] group-hover:text-accent-blue transition-colors">
                  {article.title}
                </p>
                <p className="text-[11px] text-text-muted mt-1">
                  {formatDate(article.publishedAt || article.createdAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto h-px bg-border-light mx-4 md:mx-auto" />

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-4 md:px-14 py-12">
          <div className="flex items-baseline mb-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              最新記事
            </h2>
            <span className="text-[13px] text-text-muted tracking-[1px] ml-2">
              — Latest
            </span>
            <div className="flex-1" />
            <Link
              href="/category/all"
              className="text-[13px] font-medium text-accent-blue hover:opacity-80"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      <div className="max-w-[1440px] mx-auto h-px bg-border-light mx-4 md:mx-auto" />

      {/* Category & Ranking */}
      <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 px-4 md:px-14 py-12">
        <div className="flex-1">
          <div className="flex items-baseline mb-7">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              カテゴリから探す
            </h2>
            <span className="text-[13px] text-text-muted tracking-[1px] ml-2">
              — Categories
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`flex flex-col justify-end p-6 h-[140px] rounded-[4px] transition-shadow hover:shadow-md ${
                  cat.accent
                    ? "bg-accent-blue text-white"
                    : "bg-card-bg border border-border-light"
                }`}
              >
                <p className={`text-base font-semibold ${cat.accent ? "" : "text-text-primary"}`}>
                  {cat.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[380px] shrink-0">
          <div className="flex items-baseline mb-6">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              人気記事
            </h2>
            <span className="text-[13px] text-text-muted tracking-[1px] ml-2">
              — Ranking
            </span>
          </div>
          <div className="flex flex-col">
            {popular.map((item, i) => (
              <Link
                key={item.id}
                href={`/articles/${item.id}`}
                className={`group flex gap-4 py-4 ${i < popular.length - 1 ? "border-b border-border-light" : ""}`}
              >
                <span className="font-display text-[28px] font-bold text-accent-warm leading-none w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <p className="text-sm font-medium text-text-primary leading-[1.6] group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-text-muted mt-1">
                    {item.categoryLabel} · {formatDate(item.publishedAt || item.createdAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto h-px bg-border-light mx-4 md:mx-auto" />

      {/* Expert Column */}
      {columns.length > 0 && (
        <section className="bg-bg-warm">
          <div className="max-w-[1440px] mx-auto px-4 md:px-14 py-12">
            <div className="flex items-baseline mb-8">
              <h2 className="font-display text-2xl font-bold text-text-primary">
                専門家コラム
              </h2>
              <span className="text-[13px] text-text-muted tracking-[1px] ml-2">
                — Expert Column
              </span>
              <div className="flex-1" />
              <Link
                href="/category/column"
                className="text-[13px] font-medium text-accent-blue hover:opacity-80"
              >
                すべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {columns.map((col) => (
                <Link
                  key={col.id}
                  href={`/articles/${col.id}`}
                  className="group bg-card-bg border border-border-light rounded-[4px] p-7"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4C5B0]" />
                    <div>
                      <p className="text-[13px] font-semibold text-text-primary">
                        {col.author || "NEMURI 編集部"}
                      </p>
                      <p className="text-[11px] text-text-muted">
                        {col.authorRole || ""}
                      </p>
                    </div>
                  </div>
                  <p className="text-[15px] font-medium text-text-primary leading-[1.7] mb-3 group-hover:text-accent-blue transition-colors">
                    {col.title}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    {formatDate(col.publishedAt || col.createdAt)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App CTA */}
      <AppCTA />
    </>
  );
}
