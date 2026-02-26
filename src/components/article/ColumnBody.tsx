import type { Article } from "@/lib/articles";

const otherColumns = [
  {
    title: "「いびきは体のSOS」—見逃してはいけない3つのサイン",
    author: "山田 太郎",
    role: "耳鼻咽喉科専門医",
    date: "2026.02.22",
    color: "bg-[#D4C5B0]",
  },
  {
    title: "女性のいびきが増えている。更年期との意外な関係性",
    author: "佐藤 美咲",
    role: "睡眠専門医・医学博士",
    date: "2026.02.18",
    color: "bg-[#B0C5D4]",
  },
];

const references = [
  "Peppard PE, et al. Increased prevalence of sleep-disordered breathing in adults. Am J Epidemiol. 2013;177(9):1006-1014.",
  "Osman AM, et al. Obstructive sleep apnea: current perspectives. Nature and Science of Sleep. 2018;10:21-34.",
  "Lee SA, et al. Effect of mouth breathing on sleep quality. Sleep Medicine Reviews. 2024;73:101883.",
  "日本睡眠学会. 睡眠時無呼吸症候群（SAS）の診療ガイドライン. 2020年改訂版.",
];

export function ColumnBody({ article }: { article: Article }) {
  return (
    <>
      {/* Expert Profile (Large) */}
      <div className="bg-bg-warm rounded-[4px] p-6 mb-8 flex items-start gap-5">
        <div className="w-[80px] h-[80px] rounded-full bg-[#C5D4B0] shrink-0" />
        <div>
          <p className="text-xs font-semibold text-accent-blue tracking-[0.5px] mb-1">
            専門家コラム
          </p>
          <p className="text-lg font-bold text-text-primary mb-1">
            {article.author}
          </p>
          <p className="text-[13px] text-text-secondary mb-2">
            {article.authorRole}
          </p>
          <p className="text-[13px] text-text-muted leading-[1.7]">
            口腔外科専門医。20年以上にわたり口呼吸といびきの研究に取り組む。
            これまでに3,000人以上の患者の治療に携わり、学術論文も多数執筆。
          </p>
        </div>
      </div>

      {/* Lead */}
      <p className="text-base text-text-secondary leading-[2] mb-8">
        {article.description}
        今回は、口呼吸が引き起こす問題と、その改善方法について、最新の知見を交えながらお話しします。
      </p>

      {/* Column Body */}
      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        口呼吸はなぜ問題なのか
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <p className="text-[15px] text-text-primary leading-[2] mb-6">
        口呼吸は、いびきの最も一般的な原因のひとつです。
        鼻で呼吸する場合、空気は鼻腔で加温・加湿・浄化されてから気道に入りますが、
        口呼吸ではこのプロセスが省略されます。
      </p>
      <p className="text-[15px] text-text-primary leading-[2] mb-8">
        さらに重要なのは、口呼吸では舌が後方に落ち込みやすくなり、
        気道が狭窄するということです。この狭窄が空気の乱流を生み、
        周囲の軟部組織が振動することで「いびき」が発生します。
      </p>

      {/* Quote */}
      <div className="flex gap-4 bg-bg-warm p-5 mb-8">
        <div className="w-[3px] bg-accent-warm shrink-0 rounded-full" />
        <p className="text-sm text-text-secondary leading-[1.8] italic">
          私のクリニックでは、いびきで来院される患者さんの約8割が慢性的な口呼吸者です。
          口呼吸を改善するだけで、多くの方のいびきが顕著に軽減されます。
        </p>
      </div>

      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        口呼吸の原因を突き止める
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <p className="text-[15px] text-text-primary leading-[2] mb-6">
        口呼吸の原因は、鼻腔の構造的問題（鼻中隔弯曲、鼻ポリープ、アレルギー性鼻炎など）と、
        習慣的な問題に大別されます。原因を正確に特定することが、
        効果的な治療の第一歩です。
      </p>

      {/* Point Box */}
      <div className="bg-[#EEF2F7] border-l-2 border-accent-blue rounded-[4px] p-6 mb-8">
        <p className="text-sm font-bold text-accent-blue mb-3">口呼吸のセルフチェック</p>
        <ul className="text-sm text-text-primary leading-[1.8] space-y-1">
          <li>• 朝起きたとき、口や喉が乾燥している</li>
          <li>• 唇が荒れやすい、口角が切れやすい</li>
          <li>• 無意識に口が開いていると指摘される</li>
          <li>• 鼻をつまんで1分間口を閉じていられない</li>
        </ul>
      </div>

      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        改善のための実践的アプローチ
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <p className="text-[15px] text-text-primary leading-[2] mb-6">
        口呼吸の改善には、原因に応じた段階的なアプローチが効果的です。
        まずは鼻呼吸のトレーニングから始め、必要に応じて医学的介入を検討します。
      </p>
      <p className="text-[15px] text-text-primary leading-[2] mb-8">
        簡単なトレーニングとして、日中に意識的に口を閉じ、鼻で呼吸する習慣をつけましょう。
        また、就寝前の口テーピングも有効な方法のひとつです（ただし、鼻呼吸が十分にできる方に限ります）。
      </p>

      <h2 className="text-[22px] font-bold text-text-primary mb-3">
        おわりに
      </h2>
      <div className="w-10 h-[3px] bg-accent-blue mb-5" />
      <p className="text-[15px] text-text-primary leading-[2] mb-10">
        口呼吸は、いびきだけでなく、口腔乾燥、虫歯、歯周病、さらには全身の健康にも
        影響を及ぼします。たかが呼吸法と侮らず、
        気になる症状がある方は、ぜひ一度専門医に相談してください。
      </p>

      {/* References */}
      <div className="border-t border-border-light pt-6 mb-8">
        <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-4">
          参考文献
        </p>
        <ol className="text-[12px] text-text-muted leading-[1.8] space-y-1.5 list-decimal list-inside">
          {references.map((ref, i) => (
            <li key={i}>{ref}</li>
          ))}
        </ol>
      </div>

      {/* Other Columns */}
      <div className="border-t border-border-light pt-6">
        <p className="text-xs font-semibold text-text-muted tracking-[0.5px] mb-4">
          他の専門家コラム
        </p>
        <div className="flex flex-col gap-4">
          {otherColumns.map((col, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-bg-warm rounded-[4px]">
              <div className={`w-11 h-11 rounded-full ${col.color} shrink-0`} />
              <div className="flex-1">
                <p className="text-[13px] font-medium text-text-primary leading-[1.5] mb-1">
                  {col.title}
                </p>
                <p className="text-[11px] text-text-muted">
                  {col.author}（{col.role}） · {col.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
