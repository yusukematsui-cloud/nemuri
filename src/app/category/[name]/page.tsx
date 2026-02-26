import Link from "next/link";
import { getArticles, getArticlesByCategory } from "@/lib/microcms";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { AppCTA } from "@/components/shared/AppCTA";

const categoryMeta: Record<string, { label: string; description: string }> = {
  cause: {
    label: "いびきの原因",
    description: "いびきが起こるメカニズムや原因について、専門家の視点から詳しく解説します。",
  },
  treatment: {
    label: "対策・治療",
    description: "エビデンスに基づいた、いびきの効果的な対策と治療方法をご紹介します。",
  },
  goods: {
    label: "グッズ・レビュー",
    description: "実際に使って検証した、いびき防止グッズのレビューとランキング。",
  },
  experience: {
    label: "体験談・インタビュー",
    description: "いびきと向き合い、改善した方々のリアルな体験談をお届けします。",
  },
  column: {
    label: "専門家コラム",
    description: "各分野の専門家が、いびきと睡眠に関する知見を深掘りします。",
  },
  all: {
    label: "すべての記事",
    description: "NEMURI に掲載されたすべての記事を新着順でご覧いただけます。",
  },
};

export const revalidate = 60;

export function generateStaticParams() {
  return [
    { name: "cause" },
    { name: "treatment" },
    { name: "goods" },
    { name: "experience" },
    { name: "column" },
    { name: "all" },
  ];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const meta = categoryMeta[name] || categoryMeta.all;

  const res =
    name === "all"
      ? await getArticles(50)
      : await getArticlesByCategory(meta.label, 50);

  const articles = res.contents;

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-14 py-3">
        <p className="text-xs text-text-muted">
          <Link href="/" className="text-accent-blue hover:underline">
            ホーム
          </Link>
          {" / "}
          <span>{meta.label}</span>
        </p>
      </div>

      {/* Category Header */}
      <div className="max-w-[1440px] mx-auto px-14 pb-8">
        <h1 className="font-display text-[32px] font-bold text-text-primary tracking-[-0.5px] mb-3">
          {meta.label}
        </h1>
        <p className="text-sm text-text-secondary leading-[1.8] max-w-[600px] mb-2">
          {meta.description}
        </p>
        <p className="text-xs text-text-muted">
          {articles.length} 件の記事
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto h-px bg-border-light" />

      {/* Article Grid */}
      <section className="max-w-[1440px] mx-auto px-14 py-12">
        {articles.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-text-muted mb-4">
              このカテゴリの記事はまだありません。
            </p>
            <a
              href="https://nemuri.microcms.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-blue hover:underline"
            >
              microCMS から記事を追加する →
            </a>
          </div>
        )}
      </section>

      {/* Category Navigation */}
      <div className="max-w-[1440px] mx-auto h-px bg-border-light" />
      <section className="max-w-[1440px] mx-auto px-14 py-12">
        <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-5">
          他のカテゴリ
        </p>
        <div className="flex gap-3">
          {Object.entries(categoryMeta)
            .filter(([key]) => key !== name && key !== "all")
            .map(([key, val]) => (
              <Link
                key={key}
                href={`/category/${key}`}
                className="px-5 py-2.5 rounded-[4px] border border-border-light text-sm text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {val.label}
              </Link>
            ))}
        </div>
      </section>

      {/* App CTA */}
      <AppCTA
        variant="banner"
        headline="いびきナビで今夜から測定スタート"
        description="あなたのいびきを録音・分析。改善の第一歩を踏み出しましょう。"
      />
    </>
  );
}
