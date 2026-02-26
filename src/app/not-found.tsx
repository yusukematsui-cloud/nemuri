import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-14 py-20 text-center">
      <p className="font-display text-6xl font-bold text-accent-warm mb-4">404</p>
      <h1 className="text-xl font-bold text-text-primary mb-3">
        ページが見つかりませんでした
      </h1>
      <p className="text-sm text-text-secondary mb-8">
        お探しのページは削除されたか、URLが変更された可能性があります。
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-accent-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          トップページへ
        </Link>
        <Link
          href="/category/all"
          className="px-6 py-3 rounded-md border border-border-light text-sm font-semibold text-text-secondary hover:border-accent-blue hover:text-accent-blue transition-colors"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
