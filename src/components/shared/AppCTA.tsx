import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/jp/app/%E3%81%84%E3%81%B3%E3%81%8D%E3%83%8A%E3%83%93/id675928665";

export function AppCTA({
  headline = "質の高い睡眠を、あなたに。",
  description = "いびきの録音・分析から改善トラッキングまで。あなたの睡眠を見える化する、いびき改善の専門アプリです。",
  variant = "full",
}: {
  headline?: string;
  description?: string;
  variant?: "full" | "banner";
}) {
  if (variant === "banner") {
    return (
      <div className="bg-accent-blue flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-4 md:px-14 py-6 sm:py-8">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] overflow-hidden shrink-0">
          <Image
            src="/ibiki-navi-icon.png"
            alt="いびきナビ"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-base font-semibold text-white">{headline}</p>
          <p className="text-[13px] text-white/80">{description}</p>
        </div>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-md bg-white text-[13px] font-semibold text-accent-blue hover:bg-white/90 transition-colors shrink-0"
        >
          App Store で入手
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-accent-blue flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-20 py-10 md:py-14">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[22px] overflow-hidden shrink-0">
        <Image
          src="/ibiki-navi-icon.png"
          alt="いびきナビ"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-semibold text-white/80 tracking-[0.5px] mb-3">
          公式アプリ
        </span>
        <div className="flex items-baseline justify-center md:justify-start gap-3 mb-3">
          <h3 className="text-[28px] font-bold text-white">いびきナビ</h3>
          <span className="font-display text-base text-white/50 tracking-[2px]">
            IBIKI NAVI
          </span>
        </div>
        <p className="text-sm text-white/80 leading-[1.8] mb-4">
          {description}
        </p>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-white text-[13px] font-semibold text-accent-blue hover:bg-white/90 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
          App Store からダウンロード
        </Link>
        <p className="text-xs text-white/50 mt-3">
          ★ 4.8 · 12,000+ レビュー · 無料（iOS対応）
        </p>
      </div>
    </div>
  );
}
