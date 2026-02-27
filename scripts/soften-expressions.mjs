const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

const ids = [
  "n0hmuteew", "t0hei5f1hnh", "6c1iistnz", "grqu6gi_jvu", "7gwyqaj0t",
  "mdps7ig6tscf", "u7ok49n81", "stywqbngq", "5qvqa-f16eh", "0jkettljtv7g",
];

// Title changes for overly assertive titles
const titleFixes = {
  "mdps7ig6tscf": "口呼吸を改善すると、いびきも大きく変わる可能性がある",
  "0jkettljtv7g": "いびきは改善できる。最新の睡眠医学が示す7つの改善メソッド",
  "7gwyqaj0t": "アルコールといびきの意外な関係｜飲酒後にいびきが悪化する理由",
};

// Body text replacements: [pattern, replacement]
const bodyReplacements = [
  // --- 断定表現 → 可能性・示唆表現 ---
  [/必ず改善できます/g, "改善が期待できます"],
  [/必ず改善する/g, "改善が期待される"],
  [/劇的に改善/g, "大幅に改善する可能性が"],
  [/劇的な改善/g, "大きな改善の可能性"],
  [/確実に/g, "より効果的に"],
  [/間違いありません/g, "と考えられています"],
  [/証明しています/g, "示唆しています"],
  [/証明されています/g, "示されています"],
  [/が証明した/g, "が示す"],

  // --- 「確認されています」→「報告されています」 ---
  [/が確認されています/g, "が報告されています"],
  [/ことが確認されて/g, "ことが報告されて"],
  [/が明らかになりました/g, "が示唆されています"],

  // --- 「分かっています」→「考えられています」 ---
  [/が分かっています/g, "と考えられています"],
  [/ことが分かって/g, "と考えられて"],
  [/が判明しています/g, "が示唆されています"],

  // --- 具体的数値の断定 → 研究報告として ---
  [/約3倍に上昇するというデータがあります/g, "約3倍に上昇する可能性があるとの研究報告があります"],
  [/約5倍に達するという結果が報告されています/g, "約5倍に達する可能性があるとの研究もあります"],
  [/が36%減少したというデータも報告されています/g, "が約36%減少したとの研究報告もあります（※効果には個人差があります）"],
  [/が平均26%改善したという大規模研究があります/g, "が平均26%程度改善したとの研究報告があります（※個人差があります）"],
  [/50%以上改善するという研究結果があります/g, "50%以上改善する可能性があるとの報告があります"],
  [/約2倍に増加することが/g, "約2倍に増加する可能性があることが"],

  // --- 「最も効果的」→ 「効果的とされる」---
  [/最も効果的です/g, "特に効果的とされています"],
  [/最も効果的な/g, "効果的とされる"],

  // --- 「〜できます」(医療的断定) → 「〜が期待できます」 ---
  [/大幅に改善できます/g, "大幅に改善が期待できます"],
  [/改善することができます/g, "改善が期待できます"],
  [/防ぐことができます/g, "防ぐ効果が期待できます"],

  // --- その他の断定的表現 ---
  [/は非常に有効です/g, "が有効とされています"],
  [/高い効果があります/g, "効果が期待できます"],
  [/最大の/g, "主な"],
  [/完全に/g, "大幅に"],
  [/飛躍的に高まります/g, "高まることが期待できます"],
  [/非常に多いと考えられます/g, "多いと推測されます"],
  [/大幅に高める/g, "高める可能性がある"],
  [/非常に重要な役割です/g, "重要な役割と考えられます"],
  [/極めて重要です/g, "非常に重要とされています"],

  // --- 「〜してください」→ 少し柔らかく ---
  [/を強くお勧めします/g, "をお勧めします"],
  [/一刻も早い受診をお願いします/g, "早めの受診をご検討ください"],

  // --- 体験談系の数値断定をソフトに ---
  [/50%近く改善するケースも報告されています/g, "大幅に改善するケースも報告されています"],

  // --- 追加の柔軟化 ---
  [/が顕著に高まることが/g, "が高まる傾向があることが"],
  [/精度が高いという研究報告もあります/g, "より正確に予測できる可能性があるとの指摘もあります"],
];

async function main() {
  let updated = 0;
  for (const id of ids) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      let newBody = current.body;
      let changeCount = 0;

      // Apply body replacements
      for (const [pattern, replacement] of bodyReplacements) {
        const before = newBody;
        newBody = newBody.replace(pattern, replacement);
        if (before !== newBody) changeCount++;
      }

      // Check if title needs updating
      const newTitle = titleFixes[id] || current.title;
      const titleChanged = newTitle !== current.title;

      if (changeCount === 0 && !titleChanged) {
        console.log(`SKIP: ${id} - no changes needed`);
        continue;
      }

      // DELETE + POST
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
            title: newTitle,
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

      console.log(`UPDATED: ${id} - ${changeCount} body fixes${titleChanged ? " + title fix" : ""} (${newTitle.substring(0, 30)}...)`);
      updated++;

      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log(`\nDone! Updated ${updated}/${ids.length} articles.`);
}

main();
