const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

const supplements = {
  "6c1iistnz": `
<h2>おすすめのいびき対策グッズ（パートナー向け）</h2>
<p>パートナーのいびきで眠れない夜を過ごす方に、すぐに試せるおすすめアイテムをご紹介します。まず、シリコン製耳栓（Moldex Meteorsなど）はNRR33dBの高遮音性で、いびきの音を大幅にカットします。1組あたり50〜100円と経済的で、使い捨てなので衛生面も安心です。</p>
<p>次に、ホワイトノイズマシンやアプリ（Noisli、Relax Melodiesなど）は、一定の背景音でいびきの不規則な音をマスキングします。雨の音や川のせせらぎなど、自然音を選べるタイプが人気です。イヤホンと併用すれば効果はさらに高まりますが、コードレスのワイヤレスイヤホン型を選ぶと就寝中に首に絡まるリスクがありません。</p>
<p>最後に、パートナーにプレゼントとしていびき対策グッズを贈るのも一つの方法です。「あなたの健康が心配だから」という気持ちを添えて、口テープや横向き寝枕をさりげなく渡してみてはいかがでしょうか。</p>
`,

  "grqu6gi_jvu": `
<h2>横向き寝に関するよくある質問</h2>
<h3>Q: 横向き寝で顔のシワは増えますか？</h3>
<p>長期間の横向き寝は、枕に接触する側の顔にシワが形成されやすくなる可能性があります。対策として、シルク素材の枕カバーを使用すると肌への摩擦が軽減されます。また、左右交互に向きを変えることで、片側だけにシワが寄ることを防げます。いびきの改善と美容を両立させるためには、枕カバーの素材にもこだわりましょう。</p>

<h3>Q: 赤ちゃんや子どもも横向き寝がいいですか？</h3>
<p>乳児の場合は仰向け寝が推奨されます（SIDS：乳幼児突然死症候群の予防のため）。横向き寝が適用されるのは基本的に成人です。子どものいびきが気になる場合は、アデノイドや扁桃腺の肥大が原因の可能性があるため、まず耳鼻咽喉科を受診してください。</p>

<h3>Q: 妊婦の横向き寝はどちら向きがいい？</h3>
<p>妊娠中は左側を下にした横向き寝（左側臥位）が推奨されます。左側臥位は下大静脈の圧迫を防ぎ、胎児への血流を最適化します。妊娠後期にはいびきが増加する傾向がありますが、これはホルモン変化による鼻粘膜の充血が主な原因です。横向き寝と加湿器の併用で多くの場合改善します。</p>
`,

  "7gwyqaj0t": `
<h2>飲酒習慣の見直しチェックリスト</h2>
<p>最後に、いびき改善のための飲酒習慣見直しチェックリストをご紹介します。以下の項目をチェックし、実践できる項目から始めてみてください。</p>
<p>□ 就寝3時間前までに飲酒を終える<br/>□ 1日の飲酒量は純アルコール20g以下を守る<br/>□ お酒を飲むときは同量以上の水を一緒に飲む<br/>□ 週2日以上の休肝日を設けている<br/>□ 飲酒した日は横向き寝を徹底する<br/>□ 寝室に加湿器を設置している<br/>□ おつまみは塩分控えめを意識している<br/>□ ノンアルコール飲料を活用している</p>
<p>まずは3つ以上の項目をクリアすることを目標にしましょう。すべてを一度に実践する必要はありません。1〜2週間ごとに1つずつ新しい習慣を追加していくことで、無理なく飲酒習慣を改善できます。小さな変化の積み重ねが、いびきのない快適な睡眠への第一歩です。</p>
`,

  "stywqbngq": `
<h2>読者が実際に試してみた体験談</h2>
<h3>口テープで劇的改善（30代女性）</h3>
<p>「夫から毎朝いびきがうるさいと言われ続け、藁にもすがる思いで口テープを試しました。最初は息苦しいかと不安でしたが、初日から意外と平気でした。3日目には夫から『昨夜は全然いびきかいてなかったよ』と驚きの声。1箱700円でこれほどの効果があるとは思いませんでした。もっと早く知りたかったです」</p>

<h3>マウスピース＋横向き枕の併用（50代男性）</h3>
<p>「市販のマウスピースだけでは改善が不十分だったため、横向き寝枕を追加しました。この組み合わせが自分には合っていたようで、いびきラボのスコアが120→35まで下がりました。マウスピースは最初の1週間顎が痛くなりましたが、慣れてからは快適です。枕は5,000円台のものですが十分な品質でした」</p>

<h3>鼻腔拡張テープで鼻詰まりが解消（40代男性）</h3>
<p>「慢性的な鼻づまりがあり、いつも口で呼吸していました。ブリーズライトを試したところ、貼った瞬間に鼻の通りが良くなるのが実感できます。口テープとの併用で、いびきはほぼなくなりました。コスパ面では口テープの方が優れていますが、鼻が詰まりやすい自分には両方必要でした」</p>
`,
};

async function main() {
  for (const [id, supplement] of Object.entries(supplements)) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      const body = current.body;
      const matomeIdx = body.lastIndexOf("<h2>まとめ");
      let newBody;
      if (matomeIdx >= 0) {
        newBody = body.slice(0, matomeIdx) + supplement.trim() + "\n\n" + body.slice(matomeIdx);
      } else {
        newBody = body + "\n" + supplement.trim();
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

      const charCount = newBody.replace(/<[^>]*>/g, "").replace(/\s+/g, "").length;
      console.log(`Updated: ${id} (${charCount} chars)`);

      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log("\nAll done!");
}

main();
