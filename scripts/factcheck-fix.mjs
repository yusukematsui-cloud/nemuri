const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

// Specific fact-check corrections per article
const corrections = {
  // Article 1: n0hmuteew - ストレッチ記事
  "n0hmuteew": [
    // Fix: 36% is about "intensity" not "frequency", and duration is 2-3 months
    ["いびきの頻度が約36%減少したとの研究報告もあります（※効果には個人差があります）",
     "いびきの強度が約36%低下したとの研究報告もあります（※効果には個人差があります）"],
    // Fix: "8週間" should be more accurate
    ["8週間続けた被験者の",
     "2〜3ヶ月間継続した被験者の"],
  ],

  // Article 5: 7gwyqaj0t - アルコール記事
  "7gwyqaj0t": [
    // Fix: 0.08% BAC increases snoring by ~4x, not ~2x
    ["0.08%以上（ビール3杯以上）でいびきの発生率が正常時の約2倍に増加する可能性があることが",
     "0.08%以上（ビール3杯以上）でいびきの発生率が数倍に増加する可能性があることが"],
    // Also check the original unfixed version
    ["0.08%以上でいびきの発生率が正常時の約2倍に増加する",
     "0.08%以上でいびきの発生率が数倍に増加する可能性がある"],
  ],

  // Article 6: mdps7ig6tscf - 口呼吸記事
  "mdps7ig6tscf": [
    // Fix: 30-40% figure for adults lacks solid citation
    ["日本人の約30〜40%が日常的に口呼吸をしているとされ",
     "一部の調査では、日本人の相当数が日常的に口呼吸をしている可能性があるとされ"],
    // Fix: "5倍" claim needs hedging
    ["口呼吸者のいびき発生率は鼻呼吸者の約5倍に達する可能性があるとの研究もあります",
     "口呼吸者はいびきの発生率が鼻呼吸者よりも大幅に高いとの研究報告があります"],
    // Check if original unfixed version exists
    ["口呼吸者のいびき発生率は鼻呼吸者の約5倍に達するという結果が報告されています",
     "口呼吸者はいびきの発生率が鼻呼吸者よりも大幅に高いとの研究報告があります"],
  ],

  // Article 10: 0jkettljtv7g - 7つのメソッド
  "0jkettljtv7g": [
    // Fix: 36% is intensity, not frequency
    ["いびきの頻度を平均36%",
     "いびきの強度を平均36%程度"],
    // Fix: BAC and snoring claim
    ["いびきの発生率は通常の約2倍に増加します",
     "いびきの発生率が数倍に増加する可能性があります"],
  ],

  // Article 3: 6c1iistnz - パートナー記事
  "6c1iistnz": [
    // Fix: "50%以上減少" needs qualifier for positional snorers
    ["50%以上減少するケースもあります",
     "50%以上軽減するケースもあります（※体位依存性のいびきの場合）"],
  ],

  // Article 4: grqu6gi_jvu - 横向き寝記事
  "grqu6gi_jvu": [
    // Fix: 50-60% claim needs positional snorer qualifier
    ["いびきの音量が平均50〜60%減少し",
     "体位依存性のいびきでは音量が50〜60%程度軽減し"],
  ],

  // Article 9: 5qvqa-f16eh - セルフチェック記事
  "5qvqa-f16eh": [
    // Fix: 50-60% with qualifier
    ["50〜60%軽減するケースもあります",
     "50〜60%軽減するケースもあります（※体位依存性のいびきの場合）"],
    ["50〜60%減少するケースもあります",
     "50〜60%軽減するケースもあります（※体位依存性のいびきの場合）"],
  ],

  // Article 2: t0hei5f1hnh - 肥満記事
  "t0hei5f1hnh": [
    // Fix: "首周り38cm" for women is below typical threshold
    ["女性で38cm以上",
     "女性で約38〜40cm以上"],
  ],
};

async function main() {
  let updated = 0;
  for (const [id, fixes] of Object.entries(corrections)) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      let newBody = current.body;
      let changeCount = 0;

      for (const [find, replace] of fixes) {
        if (newBody.includes(find)) {
          newBody = newBody.replace(find, replace);
          changeCount++;
        }
      }

      if (changeCount === 0) {
        console.log(`SKIP: ${id} - no matching text found`);
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

      console.log(`FIXED: ${id} - ${changeCount} factual corrections`);
      updated++;
      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log(`\nDone! Fixed ${updated} articles.`);
}

main();
