const axios = require('axios');
const bilgisayarinHazirMi = require('./index.js');

describe('Yeni İş Testleri', () => {
  let result = bilgisayarinHazirMi();
  let repoResponse = {};
  let hasRepo = false;
  let commits = [];
  beforeAll(async () => {
    if (result.github) {
      let parts = result.github.split('github.com/');
      if (parts.length) {
        let username = parts[1].replaceAll('/', '');
        await axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then((res) => {
            repoResponse = res;
            hasRepo = true;
          })
          .catch((err) => (hasRepo = false));
      }
    }
    if (result.demo_project_url) {
      let parts = result.demo_project_url.split('/');
      if (parts.length) {
        let username = parts[3];
        let repo = parts[4];
        await axios

          .get(
            `https://api.github.com/repos/${username}/${repo}/commits?sha=main&per_page=100&page=1`
          )
          .then((res) => {
            commits = res.data;
          })
          .catch((err) => (commits = []));
      }
    }
  });

  test('Fonksiyonun dönüş değeri nesne mi?', () => {
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
  });

  test('Vscode yüklenmiş, versiyon numarası eklenmiş mi?', () => {
    expect(result.vscode_version.includes('.')).toBe(true);
  });

  test('Node.js yüklenmiş, versiyon numarası eklenmiş mi?', () => {
    expect(result.node_version.includes('.')).toBe(true);
    expect(result.node_version[0].toLowerCase()).toBe('v');
  });

  test('Bilgisayar işletim sistemi girilmiş mi?', () => {
    const computer = result.computer.toLowerCase();
    const system = ['mac', 'windows', 'linux'];
    expect(computer.length).toBeGreaterThan(0);
    expect(system.includes(computer)).toBe(true);
  });

  test("Demo Proje'nin Forklanmış URL'i doğru mu?", () => {
    expect(commits.length).toBeGreaterThan(3);
  });

  test("Demo Projesi'ne en az bir commit atılmış mı?", () => {
    expect(commits.length).toBeGreaterThan(4);
  });
});
