import Image from "next/image";

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
      <div className="bg-accent-blue flex items-center gap-8 px-14 py-8">
        <div className="w-16 h-16 rounded-[14px] overflow-hidden shrink-0">
          <Image
            src="/ibiki-navi-icon.png"
            alt="いびきナビ"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-white">{headline}</p>
          <p className="text-[13px] text-white/80">{description}</p>
        </div>
        <button className="px-6 py-2.5 rounded-md bg-white text-[13px] font-semibold text-accent-blue hover:bg-white/90 transition-colors shrink-0">
          無料ダウンロード
        </button>
      </div>
    );
  }

  return (
    <div className="bg-accent-blue flex items-center gap-12 px-20 py-14">
      <div className="w-[100px] h-[100px] rounded-[22px] overflow-hidden shrink-0">
        <Image
          src="/ibiki-navi-icon.png"
          alt="いびきナビ"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-semibold text-white/80 tracking-[0.5px] mb-3">
          公式アプリ
        </span>
        <div className="flex items-baseline gap-3 mb-3">
          <h3 className="text-[28px] font-bold text-white">いびきナビ</h3>
          <span className="font-display text-base text-white/50 tracking-[2px]">
            IBIKI NAVI
          </span>
        </div>
        <p className="text-sm text-white/80 leading-[1.8] mb-4">
          {description}
        </p>
        <div className="flex gap-3">
          <button className="px-7 py-3 rounded-md bg-white text-[13px] font-semibold text-accent-blue hover:bg-white/90 transition-colors">
            App Store からダウンロード
          </button>
          <button className="px-7 py-3 rounded-md bg-white/10 border border-white/20 text-[13px] font-medium text-white hover:bg-white/20 transition-colors">
            Google Play で入手
          </button>
        </div>
        <p className="text-xs text-white/50 mt-3">
          ★ 4.8 · 12,000+ レビュー · 無料
        </p>
      </div>
    </div>
  );
}
