import Image from "next/image";
import type { Article } from "@/lib/articles";

const rankingItems = [
  {
    rank: 1,
    name: "ブリーズライト エクストラ",
    price: "¥980（14枚入り）",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
    pros: ["即効性がある", "薬局で手軽に購入可能", "肌にやさしい素材"],
    cons: ["毎日の消耗品でコストがかかる", "肌の弱い人はかぶれる場合あり"],
    description: "鼻腔を物理的に広げることで鼻呼吸を促進。最も手軽ないびき対策グッズとして不動の人気を誇る。",
  },
  {
    rank: 2,
    name: "スノアサークル スマートリング",
    price: "¥12,800",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop",
    pros: ["装着感が軽い", "睡眠データの記録も可能", "充電式で経済的"],
    cons: ["初期費用が高い", "効果を実感するまで時間がかかる"],
    description: "指にはめるだけでいびきを検知し、微弱な振動で寝姿勢の変更を促すスマートデバイス。",
  },
  {
    rank: 3,
    name: "ナステント クラシック",
    price: "¥350（1本）",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    pros: ["医療機器として認可済み", "高い効果が臨床試験で実証", "使い方が簡単"],
    cons: ["鼻腔への挿入に慣れが必要", "毎日使うとコストが高い"],
    description: "鼻腔に挿入して気道を確保するチューブ型デバイス。医学的エビデンスに裏付けされた効果。",
  },
  {
    rank: 4,
    name: "いびき防止マウスピース（歯科用）",
    price: "¥5,000〜¥30,000",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
    pros: ["歯科医師によるフィッティングで効果的", "繰り返し使えて経済的", "装着感が良い"],
    cons: ["歯科受診が必要", "初期費用が高い", "顎関節に負担がかかる場合あり"],
    description: "下顎を前方に固定することで気道を確保。歯科医師のもとで作成するカスタムメイド品が最も効果的。",
  },
  {
    rank: 5,
    name: "横向き寝サポート枕",
    price: "¥4,980〜¥15,000",
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=400&h=300&fit=crop",
    pros: ["自然な寝姿勢をサポート", "追加コストなし", "睡眠の質も向上"],
    cons: ["寝返りで仰向けに戻ることがある", "合う枕を見つけるまで時間がかかる"],
    description: "横向き寝を自然に維持できるよう設計された専用枕。仰向け寝によるいびきを物理的に防止する。",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < full
              ? "text-accent-warm"
              : i === full && half
                ? "text-accent-warm"
                : "text-border-light"
          }`}
        >
          {i < full ? "★" : i === full && half ? "★" : "☆"}
        </span>
      ))}
      <span className="text-sm font-semibold text-text-primary ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function RankingBody({ article }: { article: Article }) {
  return (
    <>
      {/* Lead */}
      <p className="text-base text-text-secondary leading-[2] mb-6">
        {article.description}
        編集部が実際に使用し、コスパ・効果・使いやすさの観点から徹底比較しました。
      </p>

      {/* Summary Box */}
      <div className="bg-[#EEF2F7] border-l-2 border-accent-blue rounded-[4px] p-6 mb-10">
        <p className="text-sm font-bold text-accent-blue mb-3">この記事でわかること</p>
        <ul className="text-sm text-text-primary leading-[1.8] space-y-1">
          <li>• 2026年最新のいびき防止グッズランキングTOP5</li>
          <li>• 各グッズのメリット・デメリット比較</li>
          <li>• 自分に合ったグッズの選び方</li>
        </ul>
      </div>

      {/* Ranking Items */}
      {rankingItems.map((item) => (
        <div
          key={item.rank}
          className="border border-border-light rounded-[4px] mb-6 overflow-hidden"
        >
          {/* Rank Header */}
          <div className="flex items-center gap-3 bg-bg-warm px-6 py-3 border-b border-border-light">
            <span className="font-display text-[28px] font-bold text-accent-warm leading-none">
              {String(item.rank).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-bold text-text-primary">
              {item.name}
            </h3>
          </div>

          <div className="flex gap-6 p-6">
            {/* Product Image */}
            <div className="relative w-[200px] h-[150px] rounded-[3px] overflow-hidden shrink-0 bg-border-light">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <StarRating rating={item.rating} />
                <span className="text-sm font-semibold text-text-primary">
                  {item.price}
                </span>
              </div>
              <p className="text-[15px] text-text-secondary leading-[1.8] mb-4">
                {item.description}
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-xs font-semibold text-[#2B7E4C] mb-2">
                    メリット
                  </p>
                  <ul className="text-[13px] text-text-primary leading-[1.8] space-y-0.5">
                    {item.pros.map((pro, i) => (
                      <li key={i}>+ {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#C45A5A] mb-2">
                    デメリット
                  </p>
                  <ul className="text-[13px] text-text-primary leading-[1.8] space-y-0.5">
                    {item.cons.map((con, i) => (
                      <li key={i}>- {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Comparison Table */}
      <h2 className="text-[22px] font-bold text-text-primary mb-3 mt-10">
        比較表
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-bg-warm">
              <th className="text-left p-3 border border-border-light font-semibold text-text-primary">商品名</th>
              <th className="text-center p-3 border border-border-light font-semibold text-text-primary">価格</th>
              <th className="text-center p-3 border border-border-light font-semibold text-text-primary">評価</th>
              <th className="text-center p-3 border border-border-light font-semibold text-text-primary">即効性</th>
              <th className="text-center p-3 border border-border-light font-semibold text-text-primary">コスパ</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "ブリーズライト", price: "¥980", rating: "4.5", speed: "◎", cost: "△" },
              { name: "スノアサークル", price: "¥12,800", rating: "4.3", speed: "○", cost: "◎" },
              { name: "ナステント", price: "¥350/本", rating: "4.2", speed: "◎", cost: "△" },
              { name: "マウスピース", price: "¥5,000〜", rating: "4.0", speed: "○", cost: "◎" },
              { name: "横向き枕", price: "¥4,980〜", rating: "3.8", speed: "○", cost: "◎" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-card-bg" : "bg-bg-warm/50"}>
                <td className="p-3 border border-border-light font-medium text-text-primary">{row.name}</td>
                <td className="p-3 border border-border-light text-center text-text-secondary">{row.price}</td>
                <td className="p-3 border border-border-light text-center text-accent-warm font-semibold">{row.rating}</td>
                <td className="p-3 border border-border-light text-center">{row.speed}</td>
                <td className="p-3 border border-border-light text-center">{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        まとめ：自分に合ったグッズを選ぼう
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <p className="text-[15px] text-text-primary leading-[2] mb-8">
        いびき防止グッズは、原因や症状の程度によって最適なものが異なります。
        まずは手軽に試せるブリーズライトや横向き枕から始め、改善が見られない場合は
        マウスピースやスマートデバイスの導入を検討しましょう。
        重度の場合は専門医への相談をおすすめします。
      </p>
    </>
  );
}
