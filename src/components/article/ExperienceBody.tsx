import type { Article } from "@/lib/articles";

const timeline = [
  {
    period: "治療前",
    label: "2025年6月",
    description: "毎晩ひどいいびきで妻から別室を提案される。日中の眠気がひどく、仕事にも支障が出始めた。",
  },
  {
    period: "診断",
    label: "2025年8月",
    description: "睡眠外来を受診。PSG検査の結果、AHI 38（重度の睡眠時無呼吸症候群）と診断。",
  },
  {
    period: "治療開始",
    label: "2025年9月",
    description: "CPAP治療を開始。最初の1週間はマスクに慣れず苦労したが、徐々に適応。",
  },
  {
    period: "3ヶ月後",
    label: "2025年12月",
    description: "日中の眠気が劇的に改善。仕事の効率も上がり、妻との関係も改善した。",
  },
  {
    period: "現在",
    label: "2026年2月",
    description: "CPAP使用を継続中。AHIは3まで改善。「もっと早く治療を始めればよかった」と実感。",
  },
];

const qa = [
  {
    q: "いびきが気になり始めたのはいつ頃ですか？",
    a: "3年くらい前から妻に指摘されていたんですが、「まあ、いびきくらい」と軽く考えていました。でも去年、日中の眠気がひどくなって、さすがにこれはまずいなと思い始めたんです。",
  },
  {
    q: "病院に行くきっかけは何でしたか？",
    a: "会議中に居眠りしてしまったことがありまして…。それと、妻が「息が止まっている瞬間がある」と言い始めたのが決定的でした。怖くなってすぐ睡眠外来を予約しました。",
  },
  {
    q: "CPAP治療を始めた感想は？",
    a: "正直、最初は「こんなマスクをつけて寝られるのか」と不安でした。最初の3日間は眠れませんでしたね。でも1週間くらいで慣れて、2週間目には「なんでこんなに朝スッキリなんだ」と驚きました。",
  },
  {
    q: "生活にどんな変化がありましたか？",
    a: "一番大きいのは日中の眠気がなくなったことです。午後の会議でも集中できるようになりました。あと、妻と同じ部屋で寝られるようになったのは嬉しかったですね。",
  },
];

export function ExperienceBody({ article }: { article: Article }) {
  return (
    <>
      {/* Profile Card */}
      <div className="bg-bg-warm border border-border-light rounded-[4px] p-6 mb-8 flex items-center gap-5">
        <div className="w-[72px] h-[72px] rounded-full bg-[#B0C5D4] shrink-0" />
        <div>
          <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-1">
            体験者プロフィール
          </p>
          <p className="text-base font-semibold text-text-primary">
            田村さん（仮名）・45歳・会社員
          </p>
          <p className="text-[13px] text-text-secondary leading-[1.7]">
            重度の睡眠時無呼吸症候群（AHI 38）と診断。CPAP治療を6ヶ月間継続中。
          </p>
        </div>
      </div>

      {/* Lead */}
      <p className="text-base text-text-secondary leading-[2] mb-10">
        {article.description}
        いびきの悩みを抱える方にとって、実際の治療体験は何より参考になるはず。
        田村さんが語る、診断から治療、そして現在までのリアルな記録をお届けします。
      </p>

      {/* Timeline */}
      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        治療タイムライン
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-6" />

      <div className="relative mb-10 pl-8">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-border-light" />

        {timeline.map((item, i) => (
          <div key={i} className="relative flex gap-5 mb-8 last:mb-0">
            {/* Dot */}
            <div className={`absolute left-[-21px] top-1.5 w-[14px] h-[14px] rounded-full border-2 ${
              i === timeline.length - 1
                ? "border-accent-blue bg-accent-blue"
                : "border-accent-blue bg-card-bg"
            }`} />

            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-semibold text-accent-blue px-2 py-0.5 rounded bg-tag-bg">
                  {item.period}
                </span>
                <span className="text-xs text-text-muted">{item.label}</span>
              </div>
              <p className="text-[15px] text-text-primary leading-[1.8]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interview Q&A */}
      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        インタビュー
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-6" />

      <div className="flex flex-col gap-6 mb-10">
        {qa.map((item, i) => (
          <div key={i}>
            {/* Question */}
            <div className="flex gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-accent-blue text-white text-xs font-bold flex items-center justify-center shrink-0">
                Q
              </span>
              <p className="text-[15px] font-semibold text-text-primary leading-[1.7] pt-1">
                {item.q}
              </p>
            </div>
            {/* Answer */}
            <div className="flex gap-3 ml-2">
              <span className="w-8 h-8 rounded-full bg-bg-warm border border-border-light text-text-secondary text-xs font-bold flex items-center justify-center shrink-0">
                A
              </span>
              <p className="text-[15px] text-text-secondary leading-[2] pt-1">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="bg-[#EEF2F7] border-l-2 border-accent-blue rounded-[4px] p-6 mb-8">
        <p className="text-sm font-bold text-accent-blue mb-3">この体験談のポイント</p>
        <ul className="text-sm text-text-primary leading-[1.8] space-y-1">
          <li>• 「いびきくらい」と放置せず、早めの受診が重要</li>
          <li>• CPAPは最初の1〜2週間を乗り越えれば快適に使える</li>
          <li>• 治療により日中のパフォーマンスが劇的に改善</li>
          <li>• 家族関係の改善にもつながる</li>
        </ul>
      </div>

      {/* Editor Note */}
      <div className="flex gap-4 bg-bg-warm p-5 mb-8">
        <div className="w-[3px] bg-accent-warm shrink-0 rounded-full" />
        <div>
          <p className="text-xs font-semibold text-text-muted mb-2">編集部より</p>
          <p className="text-sm text-text-secondary leading-[1.8]">
            田村さんのケースは重度の睡眠時無呼吸症候群でしたが、適切な治療で大きく改善しました。
            いびきが気になる方は、まずセルフチェックから始めてみてはいかがでしょうか。
            いびきナビアプリでは、毎晩のいびきを録音・分析して、受診の参考データを作成できます。
          </p>
        </div>
      </div>
    </>
  );
}
