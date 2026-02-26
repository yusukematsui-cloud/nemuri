import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "編集ポリシー",
  description: "NEMURIの記事制作における編集方針・品質管理の基準をご紹介します。",
  alternates: { canonical: "/policy" },
};

export default function PolicyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-14 py-12">
      <nav aria-label="パンくずリスト" className="mb-8">
        <ol className="flex items-center gap-1 text-xs text-text-muted">
          <li><Link href="/" className="text-accent-blue hover:underline">ホーム</Link></li>
          <li>/</li>
          <li>編集ポリシー</li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl font-bold text-text-primary mb-8">編集ポリシー</h1>

      <div className="prose-nemuri">
        <p>
          NEMURIは、いびき・睡眠改善に関する正確で信頼性の高い情報を提供するために、
          以下の編集方針に基づいて記事を制作しています。
        </p>

        <h2>1. エビデンスに基づく情報発信</h2>
        <p>
          記事の根拠となる情報は、査読付き学術論文、公的機関のガイドライン、
          専門学会の公式見解など、信頼性の高いソースに基づいています。
          参考文献は可能な限り記事内に明記します。
        </p>

        <h2>2. 専門家による監修</h2>
        <p>
          医療・健康に関する記事は、該当分野の専門家（医師、歯科医師、睡眠技師等）による監修を受けています。
          監修者の氏名・資格は記事内に明示します。
        </p>

        <h2>3. 中立性の確保</h2>
        <p>
          商品レビューやランキング記事において、広告主の影響を受けない公正な評価を行います。
          広告・タイアップ記事にはその旨を明記します。
        </p>

        <h2>4. 定期的な見直し</h2>
        <p>
          公開済みの記事は定期的に内容を見直し、最新の医学的知見やガイドラインに基づいて更新します。
          最終更新日を記事に表示します。
        </p>

        <h2>5. 医療行為の代替ではありません</h2>
        <p>
          NEMURIが提供する情報は、医療行為の代替を意図するものではありません。
          症状が気になる方は、必ず医療機関を受診されることをお勧めします。
        </p>
      </div>
    </div>
  );
}
