import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "NEMURIにおける個人情報の取り扱いについてご説明します。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-14 py-12">
      <nav aria-label="パンくずリスト" className="mb-8">
        <ol className="flex items-center gap-1 text-xs text-text-muted">
          <li><Link href="/" className="text-accent-blue hover:underline">ホーム</Link></li>
          <li>/</li>
          <li>プライバシーポリシー</li>
        </ol>
      </nav>

      <h1 className="font-display text-3xl font-bold text-text-primary mb-8">プライバシーポリシー</h1>

      <div className="prose-nemuri">
        <p>
          NEMURI（以下「当サイト」）は、ユーザーの個人情報の保護を重要視し、
          以下のとおりプライバシーポリシーを定めます。
        </p>

        <h2>1. 収集する情報</h2>
        <p>当サイトでは、以下の情報を収集する場合があります。</p>
        <ul>
          <li>お問い合わせフォームに入力されたお名前・メールアドレス</li>
          <li>アクセスログ（IPアドレス、ブラウザ情報、閲覧ページ等）</li>
          <li>Cookie を通じた利用状況データ</li>
        </ul>

        <h2>2. 利用目的</h2>
        <p>収集した情報は、以下の目的で利用します。</p>
        <ul>
          <li>お問い合わせへの回答</li>
          <li>サイトの改善・コンテンツの最適化</li>
          <li>アクセス解析によるサービス向上</li>
        </ul>

        <h2>3. 第三者への提供</h2>
        <p>
          法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
        </p>

        <h2>4. アクセス解析ツール</h2>
        <p>
          当サイトでは、Google Analytics等のアクセス解析ツールを使用する場合があります。
          これらのツールは、トラフィックデータの収集のためにCookieを使用しています。
          データは匿名で収集されており、個人を特定するものではありません。
        </p>

        <h2>5. ポリシーの変更</h2>
        <p>
          本ポリシーの内容は、必要に応じて変更することがあります。
          変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
        </p>

        <p className="text-text-muted text-sm mt-8">制定日: 2026年2月26日</p>
      </div>
    </div>
  );
}
