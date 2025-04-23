import axios from "axios";
import cypressTestProjesi from "./index";

describe("Yeni İş Testleri", () => {
  let result = cypressTestProjesi();
  let hasRepo = false;
  let commits = [];
  beforeAll(async () => {
    if (result.project_url) {
      let parts = result.project_url.split("/");
      if (parts.length >= 5) {
        let username = parts[3];
        let repo = parts[4];
        try {
          await axios.get(`https://api.github.com/repos/${username}/${repo}`);
          hasRepo = true;

          const branchResponse = await axios.get(
            `https://api.github.com/repos/${username}/${repo}/branches/main`
          );
          commits = branchResponse.data.commit
            ? [branchResponse.data.commit]
            : [];
        } catch (error) {
          console.error("Error fetching commits:", error);
          hasRepo = false;
          commits = [];
        }
      } else {
        console.error("Invalid GitHub URL format");
      }
    } else {
      console.error("No GitHub URL provided");
    }
  });

  test("Proje'nin gitHub adresi index.js'e eklenmiş", () => {
    expect(result.project_url.length).toBeGreaterThan(10);
    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
  });

  test("Proje'nin gitHub adresi public olarak erişilebiliyor.", () => {
    expect(hasRepo).toBe(true);
  });

  test("Proje'ye en az 4 commit atılmış.", () => {
    expect(commits.length).toBeGreaterThan(3);
  });
});
