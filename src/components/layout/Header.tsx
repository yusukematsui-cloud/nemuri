import Link from "next/link";

const navItems = [
  { label: "いびきの原因", href: "/category/cause" },
  { label: "対策・治療", href: "/category/treatment" },
  { label: "グッズ", href: "/category/goods" },
  { label: "体験談", href: "/category/experience" },
  { label: "コラム", href: "/category/column" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card-bg border-b border-border-light">
      <div className="max-w-[1440px] mx-auto flex items-center px-4 md:px-14 py-4 md:py-5">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-[22px] md:text-[26px] font-bold tracking-[2px] text-text-primary">
            NEMURI
          </span>
          <span className="text-[11px] tracking-[1px] text-text-secondary hidden sm:inline">
            ねむりのミカタ
          </span>
        </Link>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: category link */}
        <Link
          href="/category/all"
          className="md:hidden text-[13px] font-medium text-accent-blue"
        >
          記事一覧
        </Link>
      </div>
    </header>
  );
}
