import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, getArticleCategory, getArticleImage } from "@/lib/microcms";
import { AppCTA } from "@/components/shared/AppCTA";

const BASE = "https://nemuri.vercel.app";

function ArticleBody({ body, articleId }: { body: string; articleId: string }) {
  // Split body at <h2> boundaries to insert images between sections
  const sections = body.split(/(?=<h2[\s>])/);
  const totalH2 = sections.length;

  // Insert image after ~1/3 and ~2/3 of sections
  const img1After = Math.max(1, Math.floor(totalH2 / 3));
  const img2After = Math.max(2, Math.floor((totalH2 * 2) / 3));

  const result: React.ReactNode[] = [];

  sections.forEach((section, i) => {
    result.push(
      <div
        key={`s${i}`}
        className="article-body"
        dangerouslySetInnerHTML={{ __html: section }}
      />
    );

    if (i === img1After) {
      result.push(
        <figure key="img1" className="my-8">
          <Image
            src={`/images/articles/${articleId}-1.png`}
            alt=""
            width={760}
            height={428}
            className="w-full rounded-[4px]"
          />
        </figure>
      );
    }
    if (i === img2After) {
      result.push(
        <figure key="img2" className="my-8">
          <Image
            src={`/images/articles/${articleId}-2.png`}
            alt=""
            width={760}
            height={428}
            className="w-full rounded-[4px]"
          />
        </figure>
      );
    }
  });

  return <>{result}</>;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const res = await getArticles(100);
  return res.contents.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);
    const imageUrl = getArticleImage(article, "hero");
    return {
      title: article.title,
      description: article.description,
      openGraph: {
        type: "article",
        title: article.title,
        description: article.description,
        url: `${BASE}/articles/${slug}`,
        images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
        publishedTime: article.publishedAt,
        modifiedTime: article.revisedAt || article.updatedAt,
        authors: article.author ? [article.author] : ["NEMURI 編集部"],
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        images: [imageUrl],
      },
      alternates: { canonical: `/articles/${slug}` },
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
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

  const imageUrl = getArticleImage(article, "hero");
  const date = formatDate(article.publishedAt || article.createdAt);
  const isoDate = article.publishedAt || article.createdAt;
  const category = getArticleCategory(article);
  const pageUrl = `${BASE}/articles/${article.id}`;
  const shareText = encodeURIComponent(article.title);
  const shareUrl = encodeURIComponent(pageUrl);

  const relatedRes = await getArticles(4);
  const related = relatedRes.contents.filter((a) => a.id !== article.id).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: imageUrl.startsWith("/") ? `${BASE}${imageUrl}` : imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.revisedAt || article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author || "NEMURI 編集部",
    },
    publisher: {
      "@type": "Organization",
      name: "NEMURI",
      logo: { "@type": "ImageObject", url: `${BASE}/ibiki-navi-icon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: article.categoryLabel, item: `${BASE}/category/${category}` },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="パンくずリスト" className="max-w-[1440px] mx-auto px-4 md:px-14 py-3">
        <ol className="flex items-center gap-1 text-xs text-text-muted">
          <li><Link href="/" className="text-accent-blue hover:underline">ホーム</Link></li>
          <li>/</li>
          <li><Link href={`/category/${category}`} className="text-accent-blue hover:underline">{article.categoryLabel}</Link></li>
          <li>/</li>
          <li className="truncate max-w-[200px]">{article.title}</li>
        </ol>
      </nav>

      {/* Article Hero */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-14 pb-8 flex flex-col items-center text-center">
        <span className="inline-block px-3.5 py-1 rounded-[2px] bg-tag-bg text-[11px] font-semibold text-tag-text tracking-[1px] mb-5">
          {article.categoryLabel}
        </span>
        <h1 className="font-display text-2xl md:text-4xl font-bold text-text-primary leading-[1.5] tracking-[-0.5px] max-w-[800px] mb-5">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-[13px] text-text-muted mb-8">
          <time dateTime={isoDate}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>読了 {article.readTime}</span>
          {article.author && (
            <>
              <span aria-hidden="true">·</span>
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
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 px-4 md:px-14 py-12">
        <div className="flex-1 max-w-[760px]">
          {/* Medical Disclaimer */}
          <div className="bg-tag-bg border border-border-light rounded-[4px] p-4 mb-8 text-[13px] text-text-secondary leading-[1.8]">
            本記事は情報提供を目的としており、医療行為の代替を意図するものではありません。症状が気になる方は、医療機関への受診をお勧めします。
          </div>

          {/* Lead */}
          <p className="text-base text-text-secondary leading-[2] mb-8">
            {article.description}
          </p>

          {/* Rich Editor Content with inline images */}
          <ArticleBody body={article.body} articleId={article.id} />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0">
          <div className="sticky top-24">
            <div className="pb-5 mb-5">
              <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-3">
                シェアする
              </p>
              <div className="flex gap-2">
                <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Xでシェア" className="w-10 h-10 rounded-[4px] bg-[#1A1A1A] flex items-center justify-center text-sm font-bold text-white hover:opacity-80 transition-opacity">
                  X
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Facebookでシェア" className="w-10 h-10 rounded-[4px] bg-[#1877F2] flex items-center justify-center text-base font-bold text-white hover:opacity-80 transition-opacity">
                  f
                </a>
                <a href={`https://social-plugins.line.me/lineit/share?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="LINEでシェア" className="w-10 h-10 rounded-[4px] bg-[#06C755] flex items-center justify-center text-sm font-bold text-white hover:opacity-80 transition-opacity">
                  L
                </a>
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
                      <Image
                        src={getArticleImage(rel)}
                        alt={rel.title}
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-text-primary leading-[1.5] group-hover:text-accent-blue transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-[10px] text-text-muted mt-1">
                        <time dateTime={rel.publishedAt || rel.createdAt}>
                          {formatDate(rel.publishedAt || rel.createdAt)}
                        </time>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Author Card */}
      <div className="bg-bg-warm">
        <div className="max-w-[1440px] mx-auto px-4 md:px-14 py-8 flex items-center gap-5">
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
