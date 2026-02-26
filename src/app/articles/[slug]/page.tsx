import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, getArticleCategory } from "@/lib/microcms";
import { AppCTA } from "@/components/shared/AppCTA";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const res = await getArticles(100);
  return res.contents.map((a) => ({ slug: a.id }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const imageUrl = article.image?.url || "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=600&fit=crop";
  const date = formatDate(article.publishedAt || article.createdAt);

  // Fetch related articles
  const relatedRes = await getArticles(4);
  const related = relatedRes.contents.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-14 py-3">
        <p className="text-xs text-text-muted">
          <Link href="/" className="text-accent-blue hover:underline">ホーム</Link>
          {" / "}
          <Link href={`/category/${getArticleCategory(article)}`} className="text-accent-blue hover:underline">
            {article.categoryLabel}
          </Link>
          {" / "}
          <span>{article.title.slice(0, 30)}...</span>
        </p>
      </div>

      {/* Article Hero */}
      <div className="max-w-[1440px] mx-auto px-14 pb-8 flex flex-col items-center text-center">
        <span className="inline-block px-3.5 py-1 rounded-[2px] bg-tag-bg text-[11px] font-semibold text-tag-text tracking-[1px] mb-5">
          {article.categoryLabel}
        </span>
        <h1 className="font-display text-4xl font-bold text-text-primary leading-[1.5] tracking-[-0.5px] max-w-[800px] mb-5">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-[13px] text-text-muted mb-8">
          <span>{date}</span>
          <span>·</span>
          <span>読了 {article.readTime}</span>
          {article.author && (
            <>
              <span>·</span>
              <span className="text-text-secondary">
                監修: {article.author}（{article.authorRole}）
              </span>
            </>
          )}
        </div>
        <div className="relative w-full aspect-[16/7] rounded-[4px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-[1440px] mx-auto flex gap-12 px-14 py-12">
        <div className="flex-1 max-w-[760px]">
          {/* Lead */}
          <p className="text-base text-text-secondary leading-[2] mb-8">
            {article.description}
          </p>

          {/* Rich Editor Content */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>

        {/* Sidebar */}
        <div className="w-[300px] shrink-0">
          <div className="sticky top-24">
            <div className="pb-5 mb-5">
              <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-3">
                シェアする
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-[4px] bg-[#1A1A1A] flex items-center justify-center text-sm font-bold text-white">
                  X
                </div>
                <div className="w-10 h-10 rounded-[4px] bg-[#1877F2] flex items-center justify-center text-base font-bold text-white">
                  f
                </div>
                <div className="w-10 h-10 rounded-[4px] bg-[#06C755] flex items-center justify-center text-sm font-bold text-white">
                  L
                </div>
                <div className="w-10 h-10 rounded-[4px] bg-bg-warm border border-border-light flex items-center justify-center text-base">
                  🔗
                </div>
              </div>
            </div>

            <div className="border-t border-border-light pt-5">
              <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-4">
                関連記事
              </p>
              <div className="flex flex-col gap-4">
                {related.map((rel) => (
                  <Link key={rel.id} href={`/articles/${rel.id}`} className="group flex gap-3">
                    <div className="relative w-[72px] h-[52px] rounded-[3px] overflow-hidden shrink-0 bg-border-light">
                      {rel.image?.url && (
                        <Image
                          src={rel.image.url}
                          alt={rel.title}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-text-primary leading-[1.5] group-hover:text-accent-blue transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-[10px] text-text-muted mt-1">
                        {formatDate(rel.publishedAt || rel.createdAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Card */}
      <div className="bg-bg-warm">
        <div className="max-w-[1440px] mx-auto px-14 py-8 flex items-center gap-5">
          <div className="w-[72px] h-[72px] rounded-full bg-[#D4C5B0] shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-text-muted tracking-[0.5px] mb-1">
              この記事の監修者
            </p>
            <p className="text-base font-semibold text-text-primary mb-1">
              {article.author || "NEMURI 編集部"}
            </p>
            <p className="text-[13px] text-text-secondary leading-[1.7]">
              {article.authorRole || "いびき・睡眠改善の専門メディア"}。
              エビデンスに基づいた信頼できる情報をお届けします。
            </p>
          </div>
        </div>
      </div>

      {/* App CTA Banner */}
      <AppCTA
        variant="banner"
        headline="いびきナビで今夜から測定スタート"
        description="あなたのいびきを録音・分析。改善の第一歩を踏み出しましょう。"
      />
    </>
  );
}
