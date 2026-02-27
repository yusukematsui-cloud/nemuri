const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

// Article map: id → { title, shortTitle (for anchor text) }
const articles = {
  "n0hmuteew":     { title: "寝る前5分ストレッチ", category: "対策" },
  "t0hei5f1hnh":   { title: "いびきと肥満の関係", category: "原因" },
  "6c1iistnz":     { title: "パートナーのいびき対策", category: "対策" },
  "grqu6gi_jvu":   { title: "横向き寝ガイド", category: "対策" },
  "7gwyqaj0t":     { title: "アルコールといびき", category: "原因" },
  "mdps7ig6tscf":  { title: "口呼吸の改善法", category: "対策" },
  "u7ok49n81":     { title: "CPAP治療の記録", category: "治療" },
  "stywqbngq":     { title: "いびき防止グッズランキング", category: "グッズ" },
  "5qvqa-f16eh":   { title: "睡眠時無呼吸セルフチェック", category: "原因" },
  "0jkettljtv7g":  { title: "7つの改善メソッド", category: "対策" },
};

// Internal link insertions per article
// Each: [findText, replaceText] - contextual inline links
const linkInsertions = {
  "n0hmuteew": [ // ストレッチ記事
    ["口呼吸の予防に効果的です",
     '口呼吸の予防に効果的です。口呼吸の問題について詳しくは「<a href="/articles/mdps7ig6tscf">口呼吸を改善すると、いびきも大きく変わる可能性がある</a>」をご覧ください'],
    ["横向き寝を促すための専用枕",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>を促すための専用枕'],
    ["いびき対策グッズ",
     '<a href="/articles/stywqbngq">いびき対策グッズ</a>'],
  ],

  "t0hei5f1hnh": [ // 肥満記事
    ["アルコール飲料は、アルコールによる筋弛緩作用",
     'アルコール飲料は、<a href="/articles/7gwyqaj0t">アルコールによる筋弛緩作用</a>'],
    ["横向き寝にすることで",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>にすることで'],
    ["睡眠時無呼吸症候群",
     '<a href="/articles/5qvqa-f16eh">睡眠時無呼吸症候群</a>'],
    ["口腔・咽頭の筋力トレーニング",
     '<a href="/articles/n0hmuteew">口腔・咽頭の筋力トレーニング</a>'],
  ],

  "6c1iistnz": [ // パートナー記事
    ["横向きに寝かせるだけで",
     '<a href="/articles/grqu6gi_jvu">横向きに寝かせる</a>だけで'],
    ["市販のいびき対策グッズ",
     '市販の<a href="/articles/stywqbngq">いびき対策グッズ</a>'],
    ["耳鼻咽喉科や睡眠外来の受診",
     '耳鼻咽喉科や睡眠外来の受診（<a href="/articles/5qvqa-f16eh">セルフチェックはこちら</a>）'],
    ["口テープや横向き寝枕",
     '<a href="/articles/mdps7ig6tscf">口テープ</a>や横向き寝枕'],
  ],

  "grqu6gi_jvu": [ // 横向き寝記事
    ["口呼吸を誘発します",
     '口呼吸を誘発します。<a href="/articles/mdps7ig6tscf">口呼吸の改善法</a>も合わせてご確認ください'],
    ["いびき対策グッズ",
     '<a href="/articles/stywqbngq">いびき対策グッズ</a>'],
    ["就寝前のストレッチ",
     '就寝前の<a href="/articles/n0hmuteew">ストレッチ</a>'],
  ],

  "7gwyqaj0t": [ // アルコール記事
    ["横向き寝を徹底しましょう",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>を徹底しましょう'],
    ["口呼吸を誘発します",
     '<a href="/articles/mdps7ig6tscf">口呼吸</a>を誘発します'],
    ["睡眠時無呼吸症候群のリスクも高めます",
     '<a href="/articles/5qvqa-f16eh">睡眠時無呼吸症候群</a>のリスクも高めます'],
    ["体重管理",
     '<a href="/articles/t0hei5f1hnh">体重管理</a>'],
  ],

  "mdps7ig6tscf": [ // 口呼吸記事
    ["横向き寝の際は",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>の際は'],
    ["いびき対策グッズ",
     '<a href="/articles/stywqbngq">いびき対策グッズ</a>'],
    ["睡眠時無呼吸症候群（SAS）",
     '<a href="/articles/5qvqa-f16eh">睡眠時無呼吸症候群（SAS）</a>'],
    ["ストレッチで血流を改善",
     '<a href="/articles/n0hmuteew">ストレッチ</a>で血流を改善'],
  ],

  "u7ok49n81": [ // CPAP記事
    ["いびき対策グッズ",
     '<a href="/articles/stywqbngq">いびき対策グッズ</a>'],
    ["体重管理や横向き寝",
     '<a href="/articles/t0hei5f1hnh">体重管理</a>や<a href="/articles/grqu6gi_jvu">横向き寝</a>'],
    ["口テープ",
     '<a href="/articles/mdps7ig6tscf">口テープ</a>'],
  ],

  "stywqbngq": [ // グッズランキング記事
    ["口呼吸が原因のいびき",
     '<a href="/articles/mdps7ig6tscf">口呼吸</a>が原因のいびき'],
    ["横向き寝を維持しやすい",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>を維持しやすい'],
    ["CPAP治療やマウスピース治療",
     '<a href="/articles/u7ok49n81">CPAP治療</a>やマウスピース治療'],
    ["睡眠時無呼吸症候群セルフチェック",
     '<a href="/articles/5qvqa-f16eh">睡眠時無呼吸症候群セルフチェック</a>'],
  ],

  "5qvqa-f16eh": [ // セルフチェック記事
    ["横向き寝、適度な運動",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>、適度な運動'],
    ["口テープ、鼻腔拡張テープ",
     '<a href="/articles/mdps7ig6tscf">口テープ</a>、<a href="/articles/stywqbngq">鼻腔拡張テープ</a>'],
    ["CPAP治療",
     '<a href="/articles/u7ok49n81">CPAP治療</a>'],
    ["体重を5〜10%減量する",
     '<a href="/articles/t0hei5f1hnh">体重を5〜10%減量する</a>'],
    ["アルコール",
     '<a href="/articles/7gwyqaj0t">アルコール</a>'],
  ],

  "0jkettljtv7g": [ // 7つのメソッド記事
    ["口テープ（ナイトミン等）",
     '<a href="/articles/mdps7ig6tscf">口テープ（ナイトミン等）</a>'],
    ["横向き寝に変えるだけで",
     '<a href="/articles/grqu6gi_jvu">横向き寝</a>に変えるだけで'],
    ["CPAP治療",
     '<a href="/articles/u7ok49n81">CPAP治療</a>'],
    ["体重管理は",
     '<a href="/articles/t0hei5f1hnh">体重管理</a>は'],
    ["飲酒量を純アルコール20g以下に抑える",
     '<a href="/articles/7gwyqaj0t">飲酒量を純アルコール20g以下に抑える</a>'],
  ],
};

async function main() {
  let updated = 0;
  for (const [id, links] of Object.entries(linkInsertions)) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      let newBody = current.body;
      let changeCount = 0;

      for (const [find, replace] of links) {
        // Only replace the FIRST occurrence to avoid duplicate links
        const idx = newBody.indexOf(find);
        if (idx !== -1) {
          newBody = newBody.substring(0, idx) + replace + newBody.substring(idx + find.length);
          changeCount++;
        }
      }

      if (changeCount === 0) {
        console.log(`SKIP: ${id} - no matching text`);
        continue;
      }

      const delRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { method: "DELETE", headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!delRes.ok) throw new Error(`DELETE failed: ${delRes.status}`);

      await new Promise((r) => setTimeout(r, 1500));

      const createRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles`,
        {
          method: "POST",
          headers: {
            "X-MICROCMS-API-KEY": API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            title: current.title,
            description: current.description,
            category: current.category,
            type: current.type,
            readTime: current.readTime,
            author: current.author,
            authorRole: current.authorRole,
            body: newBody.trim(),
          }),
        }
      );
      if (!createRes.ok) {
        const err = await createRes.json();
        throw new Error(`POST ${createRes.status}: ${err.message}`);
      }

      console.log(`UPDATED: ${id} - ${changeCount} internal links added`);
      updated++;
      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log(`\nDone! Updated ${updated}/10 articles with internal links.`);
}

main();
