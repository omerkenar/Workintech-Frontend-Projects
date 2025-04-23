const macOzeti = require('./index.js');
// const macOzeti = require('./solution.js');

describe('Maç Özeti Testleri', () => {
  const takim1 = 'Beşiktaş';
  const takim2 = 'Fenerbahçe';

  let result = macOzeti(takim1, takim2);

  test('Fonksiyonun dönüş değeri array mi?', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('Fonksiyonun dönüş değeri 5 elemanlı mı?', () => {
    expect(result).toHaveLength(5);
  });

  test('Fonksiyonun dönüş değerinin her elemanı string mi?', () => {
    expect(typeof result[0]).toBe('string');
    expect(typeof result[1]).toBe('string');
    expect(typeof result[2]).toBe('string');
    expect(typeof result[3]).toBe('string');
    expect(typeof result[4]).toBe('string');
  });

  test('Fonksiyonun dönüş değerinde Ev Sahibi Takımın adı geçiyor mu?', () => {
    expect(result[0].includes(takim1)).toBe(true);
    expect(result[1].includes(takim1)).toBe(true);
    expect(result[2].includes(takim1)).toBe(true);
    expect(result[3].includes(takim1)).toBe(true);
  });

  test('Fonksiyonun dönüş değerinde Deplasman Takımının adı geçiyor mu?', () => {
    expect(result[0].includes(takim2)).toBe(true);
    expect(result[1].includes(takim2)).toBe(true);
    expect(result[2].includes(takim2)).toBe(true);
    expect(result[3].includes(takim2)).toBe(true);
  });

  test('Fonksiyonun dönüş değerinde periyot numaraları doğru mu? (1. periyot gibi)', () => {
    expect(result[0].indexOf('1')).toBe(0);
    expect(result[1].indexOf('2')).toBe(0);
    expect(result[2].indexOf('3')).toBe(0);
    expect(result[3].indexOf('4')).toBe(0);
  });

  test('Maç Sonucu: kaybetti, kazandı, uzatmalara gitti metinlerinden birini içeriyor mu?', () => {
    expect(
      result[4].includes('kaybetti') ||
        result[4].includes('kazandı') ||
        result[4].includes('ile uzatmalara gitti')
    ).toBe(true);
  });

  test('Maç Sonucuna göre kaybetti, kazandı, uzatmalara gitti doğru kullanılmış mı?', () => {
    if (result[4].includes('Maç Sonucu:')) {
      let sonuc = false;
      let evSahibiTakimSkor = Number(
        result[4].substring(takim1.length + 13, takim1.length + 15)
      );
      let deplasmanTakimiSkor = Number(
        result[4].substring(takim1.length + 18, takim1.length + 20)
      );
      if (
        (evSahibiTakimSkor > deplasmanTakimiSkor &&
          result[4].includes('kazandı')) ||
        (evSahibiTakimSkor < deplasmanTakimiSkor &&
          result[4].includes('kaybetti'))
      ) {
        sonuc = true;
      }
      expect(sonuc).toBe(true);
    } else {
      let evSahibiTakimSkor = Number(result[4].substring(4, 6));
      let deplasmanTakimiSkor = Number(result[4].substring(9, 11));
      expect(evSahibiTakimSkor).toBe(deplasmanTakimiSkor);
    }
  });

  test('Volvo Kurallarına dikkat edilmiş mi. (Backtick ile stringler birleştirilmiş mi)?', () => {
    expect(macOzeti.toString().includes('${')).toBe(true);
  });

  test('Volvo Kurallarına dikkat edilmiş mi. (arrow function kullanılmış mı)?', () => {
    expect(macOzeti.toString().includes('=>')).toBe(true);
  });
});
