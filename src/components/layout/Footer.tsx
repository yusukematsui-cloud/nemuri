import Link from "next/link";

const contentLinks = [
  { label: "いびきの原因", href: "/category/cause" },
  { label: "対策・治療", href: "/category/treatment" },
  { label: "グッズ・レビュー", href: "/category/goods" },
  { label: "体験談", href: "/category/experience" },
  { label: "専門家コラム", href: "/category/column" },
];

const siteLinks = [
  { label: "NEMURIについて", href: "/about" },
  { label: "編集ポリシー", href: "/policy" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "運営会社", href: "/company" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-14 pt-12 pb-8">
        <div className="flex gap-16 mb-10">
          <div className="w-[300px] shrink-0">
            <p className="font-display text-[22px] font-bold text-white tracking-[2px] mb-3">
              NEMURI
            </p>
            <p className="text-[13px] text-[#999] leading-[1.8]">
              いびき・睡眠改善の専門メディア。
              <br />
              エビデンスに基づいた信頼できる情報を、
              <br />
              わかりやすくお届けします。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white tracking-[0.5px]">
              コンテンツ
            </p>
            {contentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#888] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-white tracking-[0.5px]">
              サイト情報
            </p>
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#888] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#333] pt-6 flex items-center">
          <p className="text-xs text-[#666]">
            © 2026 NEMURI. All rights reserved.
          </p>
          <div className="flex-1" />
          <p className="text-xs text-[#666]">X · Instagram · LINE</p>
        </div>
      </div>
    </footer>
  );
}
