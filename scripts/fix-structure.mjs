const API_KEY = "ulgDGd7CGSdtljH5m8dxAthHEOBPHkU2y3ic";

const ids = [
  "n0hmuteew", "t0hei5f1hnh", "6c1iistnz", "grqu6gi_jvu", "7gwyqaj0t",
  "mdps7ig6tscf", "u7ok49n81", "stywqbngq", "5qvqa-f16eh", "0jkettljtv7g",
];

async function main() {
  for (const id of ids) {
    try {
      const getRes = await fetch(
        `https://nemuri.microcms.io/api/v1/articles/${id}`,
        { headers: { "X-MICROCMS-API-KEY": API_KEY } }
      );
      if (!getRes.ok) throw new Error(`GET failed: ${getRes.status}`);
      const current = await getRes.json();

      const body = current.body;

      // Find the まとめ section (with id attribute from microCMS)
      const matomeMatch = body.match(/<h2[^>]*>まとめ<\/h2>/);
      if (!matomeMatch) {
        console.log(`SKIP: ${id} - no まとめ found`);
        continue;
      }

      const matomeIdx = body.indexOf(matomeMatch[0]);
      const beforeMatome = body.slice(0, matomeIdx);
      const matomeAndAfter = body.slice(matomeIdx);

      // Find end of まとめ section (next <h2 or end of string)
      const afterMatomeHeading = matomeAndAfter.slice(matomeMatch[0].length);
      const nextH2InMatome = afterMatomeHeading.search(/<h2[^>]*>/);

      let matomeSection, afterMatomeContent;
      if (nextH2InMatome >= 0) {
        matomeSection = matomeAndAfter.slice(0, matomeMatch[0].length + nextH2InMatome);
        afterMatomeContent = matomeAndAfter.slice(matomeMatch[0].length + nextH2InMatome);
      } else {
        // まとめ is already the last section
        console.log(`OK: ${id} - まとめ is already at the end`);
        continue;
      }

      // Rebuild: [before まとめ] + [content that was after まとめ] + [まとめ section]
      const newBody = beforeMatome + afterMatomeContent + matomeSection;

      // Delete and recreate
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

      // Verify まとめ is now last
      const headings = newBody.match(/<h2[^>]*>([^<]+)<\/h2>/g) || [];
      const lastH2 = headings[headings.length - 1]?.replace(/<[^>]*>/g, "");
      console.log(`FIXED: ${id} - last H2: "${lastH2}"`);

      await new Promise((r) => setTimeout(r, 1500));
    } catch (e) {
      console.error(`Failed: ${id}`, e.message);
    }
  }
  console.log("\nAll done!");
}

main();
