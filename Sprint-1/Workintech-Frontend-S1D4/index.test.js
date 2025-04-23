const aboveAverage = require('./index.js');

describe('Ortalamadan Büyükler testleri', () => {
  test('[1,2,3,4,5,6,7,8,9] için 4 dönüyor mu?', () => {
    expect(aboveAverage([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(4);
  });

  test('[1,12,13,14,15,100] için 1 dönüyor mu?', () => {
    expect(aboveAverage([1, 12, 13, 14, 15, 100])).toBe(1);
  });

  test('[1,13,14,15] için 3 dönüyor mu?', () => {
    expect(aboveAverage([1, 13, 14, 15])).toBe(3);
  });

  test('Boş array için doğru sonucu dönüyor mu?', () => {
    expect(aboveAverage([])).toBe(0);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = aboveAverage([2, 9, 13, 14]);
    expect(typeof result).toBe('number');
  });
});
