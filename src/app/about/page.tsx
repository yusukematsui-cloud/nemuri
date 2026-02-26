import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEMURIについて",
  description: "NEMURI（ねむりのミカタ）は、いびき・睡眠改善に特化した専門メディアです。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-14 py-12">
      <nav aria-label="パンくずリスト" className="mb-8">
        <ol className="flex items-center gap-1 text-xs text-text-muted">
          <li><Link href="/" className="text-accent-blue hover:underline">ホーム</Link></li>
          <li>/</li>
          <li>NEMURIについて</li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl font-bold text-text-primary mb-8">NEMURIについて</h1>

      <div className="prose-nemuri">
        <p>
          <strong>NEMURI（ねむりのミカタ）</strong>は、いびき・睡眠改善に特化した専門メディアです。
        </p>
        <p>
          日本では約2,000万人がいびきに悩んでいるとされていますが、正しい情報にアクセスできる機会は限られています。
          NEMURIは、医療従事者や睡眠の専門家の監修のもと、エビデンスに基づいた信頼できる情報を、わかりやすくお届けします。
        </p>

        <h2>ミッション</h2>
        <p>
          すべての人が質の高い睡眠を手に入れられるよう、正しい知識と実践的な改善方法を発信し続けます。
        </p>

        <h2>提供する情報</h2>
        <ul>
          <li><strong>いびきの原因</strong> — メカニズムの科学的な解説</li>
          <li><strong>対策・治療</strong> — エビデンスに基づく改善方法</li>
          <li><strong>グッズ・レビュー</strong> — 実際に検証した防止グッズの評価</li>
          <li><strong>体験談</strong> — いびき改善に取り組んだ方々のリアルな声</li>
          <li><strong>専門家コラム</strong> — 医師・専門家による深掘り記事</li>
        </ul>

        <h2>運営</h2>
        <p>
          NEMURI編集部が運営しています。記事の正確性・信頼性を担保するため、
          公開前に専門家による監修プロセスを設けています。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          ご質問やご要望がございましたら、<Link href="/contact" className="text-accent-blue hover:underline">お問い合わせページ</Link>よりご連絡ください。
        </p>
      </div>
    </div>
  );
}
