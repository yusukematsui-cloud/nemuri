import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/microcms";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export function ArticleCard({ article }: { article: Article }) {
  const imageUrl = article.image?.url || "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop";

  return (
    <Link href={`/articles/${article.id}`} className="group flex-1 min-w-0">
      <div className="relative w-full aspect-[16/10] rounded-[3px] overflow-hidden mb-3">
        <Image
          src={imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="px-1">
        <p className="text-[10px] font-semibold text-accent-blue tracking-[0.5px] mb-1">
          {article.categoryLabel}
        </p>
        <h3 className="text-[15px] font-medium text-text-primary leading-[1.65] group-hover:text-accent-blue transition-colors mb-1">
          {article.title}
        </h3>
        <p className="text-[11px] text-text-muted">
          {formatDate(article.publishedAt || article.createdAt)}
        </p>
      </div>
    </Link>
  );
}
