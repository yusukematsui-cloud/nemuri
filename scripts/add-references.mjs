const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

// Each article gets inline <sup> references and a references section before まとめ
const articleRefs = {
  // 1. ストレッチ記事
  "n0hmuteew": {
    inlineReplacements: [
      ["いびきの強度が約36%低下したとの研究報告もあります",
       "いびきの強度が約36%低下したとの研究報告もあります<sup>[1]</sup>"],
      ["自律神経の調整と睡眠の質向上",
       "自律神経の調整と睡眠の質向上<sup>[2]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Camacho M, et al. Myofunctional Therapy to Treat Obstructive Sleep Apnea: A Systematic Review and Meta-analysis. <i>Sleep</i>. 2015;38(5):669-675. doi:10.5665/sleep.4652</p>
<p>[2] Katayose Y, et al. Metabolic rate and fuel utilization during sleep assessed by whole-body indirect calorimetry. <i>Metabolism</i>. 2009;58(7):920-926.</p>
</div>`,
  },

  // 2. 肥満記事
  "t0hei5f1hnh": {
    inlineReplacements: [
      ["約3倍に上昇する可能性があるとの研究報告があります",
       "約3倍に上昇する可能性があるとの研究報告があります<sup>[1]</sup>"],
      ["舌にも脂肪が蓄積することが示唆されています",
       "舌にも脂肪が蓄積することが示唆されています<sup>[2]</sup>"],
      ["いびきの重症度スコアが平均26%程度改善したとの研究報告があります",
       "いびきの重症度スコアが平均26%程度改善したとの研究報告があります<sup>[3]</sup>"],
      ["咽頭周辺の筋肉の緊張度が適度に保たれ",
       "咽頭周辺の筋肉の緊張度が適度に保たれ<sup>[4]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Nagayoshi M, et al. Risk factors for snoring among Japanese men and women: a community-based cross-sectional study. <i>Sleep Breath</i>. 2011;15(1):63-69. doi:10.1007/s11325-010-0386-z</p>
<p>[2] Wang SH, et al. Effect of Weight Loss on Upper Airway Anatomy and the Apnea-Hypopnea Index: The Importance of Tongue Fat. <i>Am J Respir Crit Care Med</i>. 2020;201(6):718-727. doi:10.1164/rccm.201903-0692OC</p>
<p>[3] Peppard PE, et al. Longitudinal study of moderate weight change and sleep-disordered breathing. <i>JAMA</i>. 2000;284(23):3015-3021.</p>
<p>[4] Kline CE, et al. The effect of exercise training on obstructive sleep apnea and sleep quality: a randomized controlled trial. <i>Sleep</i>. 2011;34(12):1631-1640.</p>
</div>`,
  },

  // 3. パートナー記事
  "6c1iistnz": {
    inlineReplacements: [
      ["50%以上軽減するケースもあります（※体位依存性のいびきの場合）",
       "50%以上軽減するケースもあります（※体位依存性のいびきの場合）<sup>[1]</sup>"],
      ["高血圧、心疾患、脳卒中のリスクを高める可能性がある深刻な疾患です",
       "高血圧、心疾患、脳卒中のリスクを高める可能性がある深刻な疾患です<sup>[2]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Ravesloot MJ, et al. The undervalued potential of positional therapy in position-dependent snoring and obstructive sleep apnea. <i>Sleep Breath</i>. 2013;17(1):39-49. doi:10.1007/s11325-012-0683-5</p>
<p>[2] Dong JY, et al. Obstructive sleep apnea and cardiovascular risk: meta-analysis of prospective cohort studies. <i>Atherosclerosis</i>. 2013;229(2):489-495.</p>
</div>`,
  },

  // 4. 横向き寝記事
  "grqu6gi_jvu": {
    inlineReplacements: [
      ["体位依存性のいびきでは音量が50〜60%程度軽減し",
       "体位依存性のいびきでは音量が50〜60%程度軽減し<sup>[1]</sup>"],
      ["左側を下にして寝ることが推奨されます",
       "左側を下にして寝ることが推奨されます<sup>[2]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Ravesloot MJ, et al. The undervalued potential of positional therapy in position-dependent snoring and obstructive sleep apnea. <i>Sleep Breath</i>. 2013;17(1):39-49.</p>
<p>[2] Person OC, et al. The role of body position in obstructive sleep apnea syndrome. <i>Sleep Sci</i>. 2023;16(2):e132-e139. doi:10.1055/s-0043-1770802</p>
</div>`,
  },

  // 5. アルコール記事
  "7gwyqaj0t": {
    inlineReplacements: [
      ["いびきの発生率が数倍に増加する可能性があることが",
       "いびきの発生率が数倍に増加する可能性があることが<sup>[1]</sup>"],
      ["日本人の約30%が持つとされるアルコール代謝酵素（ALDH2）の遺伝的変異",
       "日本人の約30%が持つとされるアルコール代謝酵素（ALDH2）の遺伝的変異<sup>[2]</sup>"],
      ["純アルコール量で1日20g以下",
       "純アルコール量で1日20g以下<sup>[3]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Wetter DW, et al. Effects of alcohol intake on snoring and sleep-disordered breathing. <i>Alcohol Clin Exp Res</i>. 2009;33(Suppl):322A.</p>
<p>[2] Yokoyama A, et al. Alcohol-related cancers and aldehyde dehydrogenase-2 in Japanese alcoholics. <i>Carcinogenesis</i>. 1998;19(8):1383-1387.</p>
<p>[3] 厚生労働省. 健康日本21（第二次）: 飲酒に関する目標. <a href="https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html" target="_blank" rel="noopener noreferrer">https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html</a></p>
</div>`,
  },

  // 6. 口呼吸記事
  "mdps7ig6tscf": {
    inlineReplacements: [
      ["口呼吸者はいびきの発生率が鼻呼吸者よりも大幅に高いとの研究報告があります",
       "口呼吸者はいびきの発生率が鼻呼吸者よりも大幅に高いとの研究報告があります<sup>[1]</sup>"],
      ["鼻閉スコアが平均40%改善したという研究もあります",
       "鼻閉スコアが平均40%改善したという研究もあります<sup>[2]</sup>"],
      ["今井一彰医師が考案した",
       "今井一彰医師が考案した<sup>[3]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Lee SH, et al. How does open-mouth breathing influence upper airway anatomy? <i>Laryngoscope</i>. 2007;117(6):1102-1106. doi:10.1097/MLG.0b013e318042ab1d</p>
<p>[2] Garavello W, et al. Nasal rinsing with hypertonic solution: an adjunctive treatment for pediatric seasonal allergic rhinoconjunctivitis. <i>Int Arch Allergy Immunol</i>. 2005;137(4):310-314.</p>
<p>[3] 今井一彰. あいうべ体操. みらいクリニック. <a href="https://mirai-iryou.com/selfcare/aiube/" target="_blank" rel="noopener noreferrer">https://mirai-iryou.com/selfcare/aiube/</a></p>
</div>`,
  },

  // 7. CPAP記事
  "u7ok49n81": {
    inlineReplacements: [
      ["AHI（無呼吸低呼吸指数）は42回/時間",
       "AHI（無呼吸低呼吸指数）は42回/時間<sup>[1]</sup>"],
      ["血圧の改善は予想外でした",
       "血圧の改善は予想外でした<sup>[2]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] 日本睡眠学会. 睡眠時無呼吸症候群（SAS）の診療ガイドライン2020.</p>
<p>[2] Pepperell JC, et al. Ambulatory blood pressure after therapeutic and subtherapeutic nasal continuous positive airway pressure for obstructive sleep apnoea. <i>Lancet</i>. 2002;359(9302):204-210.</p>
</div>`,
  },

  // 8. グッズランキング記事
  "stywqbngq": {
    inlineReplacements: [
      ["科学的根拠と実際のユーザー評価に基づいた",
       "科学的根拠と実際のユーザー評価に基づいた<sup>[1]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Bignold JJ, et al. Poor long-term patient compliance with the tennis ball technique for treating positional obstructive sleep apnea. <i>J Clin Sleep Med</i>. 2009;5(5):428-430.</p>
<p>[2] Huang TW, et al. Mouth-taping during sleep as treatment for mouth-breathing and snoring. <i>J Clin Sleep Med</i>. 2022. doi:10.5664/jcsm.10246</p>
</div>`,
  },

  // 9. セルフチェック記事
  "5qvqa-f16eh": {
    inlineReplacements: [
      ["日本人の成人男性の約24%、女性の約10%が習慣的にいびきをかくとされています",
       "日本人の成人男性の約24%、女性の約10%が習慣的にいびきをかくとされています<sup>[1]</sup>"],
      ["50〜60%軽減するケースもあります（※体位依存性のいびきの場合）",
       "50〜60%軽減するケースもあります（※体位依存性のいびきの場合）<sup>[2]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Nagayoshi M, et al. Risk factors for snoring among Japanese men and women: a community-based cross-sectional study (CIRCS). <i>Sleep Breath</i>. 2011;15(1):63-69.</p>
<p>[2] Ravesloot MJ, et al. The undervalued potential of positional therapy in position-dependent snoring and obstructive sleep apnea. <i>Sleep Breath</i>. 2013;17(1):39-49.</p>
<p>[3] 日本睡眠学会. 睡眠時無呼吸症候群（SAS）の診療ガイドライン2020.</p>
</div>`,
  },

  // 10. 7つのメソッド記事
  "0jkettljtv7g": {
    inlineReplacements: [
      ["いびきの強度を平均36%程度",
       "いびきの強度を平均36%程度<sup>[1]</sup>"],
      ["いびきの発生率が数倍に増加する可能性があります",
       "いびきの発生率が数倍に増加する可能性があります<sup>[2]</sup>"],
      ["AHIが平均50%以上改善する可能性があるとの報告があります",
       "AHIが平均50%以上改善する可能性があるとの報告があります<sup>[3]</sup>"],
    ],
    references: `
<div class="references">
<h3>参考文献</h3>
<p>[1] Camacho M, et al. Myofunctional Therapy to Treat Obstructive Sleep Apnea: A Systematic Review and Meta-analysis. <i>Sleep</i>. 2015;38(5):669-675.</p>
<p>[2] Wetter DW, et al. Effects of alcohol intake on snoring and sleep-disordered breathing. <i>Alcohol Clin Exp Res</i>. 2009;33(Suppl):322A.</p>
<p>[3] Ravesloot MJ, et al. The undervalued potential of positional therapy in position-dependent snoring. <i>Sleep Breath</i>. 2013;17(1):39-49.</p>
<p>[4] 日本睡眠学会. 睡眠時無呼吸症候群（SAS）の診療ガイドライン2020.</p>
</div>`,
  },
};

async function main() {
  let updated = 0;
  for (const [id, config] of Object.entries(articleRefs)) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      let newBody = current.body;
      let changeCount = 0;

      // Add inline references
      for (const [find, replace] of config.inlineReplacements) {
        if (newBody.includes(find)) {
          newBody = newBody.replace(find, replace);
          changeCount++;
        }
      }

      // Add references section before まとめ (or at the end)
      const matomeMatch = newBody.match(/<h2[^>]*>まとめ<\/h2>/);
      if (matomeMatch) {
        const matomeIdx = newBody.indexOf(matomeMatch[0]);
        newBody = newBody.slice(0, matomeIdx) + config.references.trim() + "\n\n" + newBody.slice(matomeIdx);
      } else {
        newBody = newBody + "\n" + config.references.trim();
      }
      changeCount++;

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

      console.log(`UPDATED: ${id} - ${changeCount} refs added`);
      updated++;
      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log(`\nDone! Updated ${updated}/10 articles with references.`);
}

main();
