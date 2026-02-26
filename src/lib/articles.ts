export type ArticleType = "standard" | "ranking" | "experience" | "column";
export type Category = "cause" | "treatment" | "goods" | "experience" | "column";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  categoryLabel: string;
  type: ArticleType;
  date: string;
  readTime: string;
  author?: string;
  authorRole?: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "obesity-and-snoring",
    title: "なぜ太ると、いびきをかきやすくなるのか？BMIとの相関を徹底解説",
    description:
      "耳鼻咽喉科の専門医が解説する、肥満がいびきを引き起こすメカニズム。最新の研究データに基づく解説。",
    category: "cause",
    categoryLabel: "いびきの原因",
    type: "standard",
    date: "2026.02.10",
    readTime: "6分",
    author: "山田太郎",
    authorRole: "耳鼻咽喉科専門医",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
  },
  {
    slug: "cpap-experience",
    title: "CPAP治療を始めて6ヶ月。人生が変わった話",
    description:
      "重度の睡眠時無呼吸症候群と診断され、CPAP治療を始めた田村さんの体験談。",
    category: "experience",
    categoryLabel: "体験談",
    type: "experience",
    date: "2026.02.08",
    readTime: "8分",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
  },
  {
    slug: "couple-survey",
    title: "いびきは夫婦関係にどう影響する？カップル500組調査",
    description:
      "いびきが原因で寝室を別にしたカップルは全体の23%。調査データから見える夫婦関係への影響。",
    category: "column",
    categoryLabel: "コラム",
    type: "standard",
    date: "2026.02.05",
    readTime: "5分",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=500&fit=crop",
  },
  {
    slug: "side-sleeping-guide",
    title: "横向き寝がいびきに効く理由。正しい寝姿勢ガイド",
    description: "寝姿勢を変えるだけで改善できるいびき対策を解説。",
    category: "treatment",
    categoryLabel: "対策・治療",
    type: "standard",
    date: "2026.02.03",
    readTime: "5分",
    image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=800&h=500&fit=crop",
  },
  {
    slug: "nasal-strip-comparison",
    title: "鼻腔拡張テープ徹底比較。本当に効くのはどれ？",
    description: "人気の鼻腔拡張テープを実際に使って効果を比較検証しました。",
    category: "goods",
    categoryLabel: "グッズ",
    type: "ranking",
    date: "2026.01.28",
    readTime: "10分",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=500&fit=crop",
  },
  {
    slug: "alcohol-and-snoring",
    title: "アルコールといびきの関係。飲酒後にいびきが悪化する理由",
    description: "飲酒がいびきを悪化させるメカニズムを解説。",
    category: "cause",
    categoryLabel: "いびきの原因",
    type: "standard",
    date: "2026.01.25",
    readTime: "4分",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop",
  },
  {
    slug: "snoring-goods-ranking",
    title: "2026年版いびき防止グッズおすすめランキング15選",
    description:
      "実際に使って検証。コスパ・効果・使いやすさで徹底比較しました。",
    category: "goods",
    categoryLabel: "グッズ",
    type: "ranking",
    date: "2026.02.15",
    readTime: "12分",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=500&fit=crop",
  },
  {
    slug: "stretch-before-sleep",
    title: "寝る前5分でできる、いびき軽減ストレッチ",
    description: "簡単なストレッチでいびきを軽減する方法を紹介。",
    category: "treatment",
    categoryLabel: "対策・治療",
    type: "standard",
    date: "2026.02.18",
    readTime: "4分",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
  },
  {
    slug: "partner-snoring",
    title: "パートナーのいびきで眠れない夜、どう向き合う？",
    description: "パートナーのいびきへの向き合い方と具体的な対処法。",
    category: "cause",
    categoryLabel: "いびきの原因",
    type: "standard",
    date: "2026.02.12",
    readTime: "5分",
    image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=800&h=500&fit=crop",
  },
  {
    slug: "7-methods",
    title: "いびきは治る。最新医学が証明した7つの改善メソッド",
    description:
      "耳鼻咽喉科の専門医が解説する、エビデンスに基づいたいびき改善法。",
    category: "treatment",
    categoryLabel: "特集",
    type: "standard",
    date: "2026.02.20",
    readTime: "8分",
    author: "山田太郎",
    authorRole: "耳鼻咽喉科専門医",
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&h=500&fit=crop",
  },
  {
    slug: "mouth-breathing",
    title: "口呼吸を治すだけで、いびきの8割は改善できる",
    description: "歯科医師が解説する、口呼吸といびきの関係性と改善方法。",
    category: "column",
    categoryLabel: "専門家コラム",
    type: "column",
    date: "2026.02.14",
    readTime: "7分",
    author: "田中健一",
    authorRole: "歯科医師・口腔外科",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.slug === "7-methods")!;
}

export function getLatestArticles(count: number = 6): Article[] {
  return articles
    .filter((a) => a.slug !== "7-methods")
    .slice(0, count);
}

export function getPopularArticles(): { title: string; category: string; date: string }[] {
  return [
    { title: "いびきを録音してわかった衝撃の事実", category: "体験談", date: "2026.01.20" },
    { title: "睡眠外来の選び方。初診で聞かれること", category: "対策・治療", date: "2026.01.15" },
    { title: "マウスピースは本当に効く？歯科医の見解", category: "グッズ", date: "2026.01.10" },
    { title: "子どものいびき、放置は危険？小児科医に聞く", category: "いびきの原因", date: "2026.01.05" },
    { title: "無呼吸症候群セルフチェック。この症状は要注意", category: "いびきの原因", date: "2025.12.28" },
  ];
}
