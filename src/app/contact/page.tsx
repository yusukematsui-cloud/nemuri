import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "NEMURIへのお問い合わせはこちらから。記事内容に関するご質問やご要望をお寄せください。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-14 py-12">
      <nav aria-label="パンくずリスト" className="mb-8">
        <ol className="flex items-center gap-1 text-xs text-text-muted">
          <li><Link href="/" className="text-accent-blue hover:underline">ホーム</Link></li>
          <li>/</li>
          <li>お問い合わせ</li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl font-bold text-text-primary mb-4">お問い合わせ</h1>
      <p className="text-sm text-text-secondary leading-[1.8] mb-8">
        NEMURIに関するご質問・ご要望・記事の修正依頼などがございましたら、
        下記メールアドレスまでお気軽にご連絡ください。
      </p>

      <div className="bg-bg-warm border border-border-light rounded-[4px] p-8">
        <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-2">
          メールでのお問い合わせ
        </p>
        <p className="text-lg font-semibold text-accent-blue mb-4">
          info@nemuri-media.com
        </p>
        <p className="text-[13px] text-text-secondary leading-[1.8]">
          通常、3営業日以内にご返信いたします。
          <br />
          お急ぎの場合はその旨を件名にご記載ください。
        </p>
      </div>

      <div className="mt-8 text-[13px] text-text-muted leading-[1.8]">
        <p>※ 医療相談への個別回答は行っておりません。症状が気になる方は医療機関を受診してください。</p>
        <p>※ 記事内容に誤りを見つけた場合は、該当記事のURLとともにお知らせください。</p>
      </div>
    </div>
  );
}
