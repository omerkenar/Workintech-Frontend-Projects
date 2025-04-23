const { fifaData } = require('./fifa.js');
const finaller = require('./index.js');
// const finaller = require('./solution.js');

describe('Dünya Kupası Final Maçlarında Atılan Gol Sayısı Testleri', () => {
  const result = finaller(fifaData);

  test('Volvo Kurallarına dikkat edilmiş mi? finaller fonksiyonu arrow function yapılmış mı?', () => {
    expect(finaller.toString().replaceAll(' ', '').includes('function')).toBe(
      false
    );
  });

  test('Fonksiyonun dönüş değeri string mi?', () => {
    expect(typeof result).toBe('string');
  });

  test('Volvo Kurallarına dikkat edilmiş mi? .filter() metodu kullanılmış mı?', () => {
    expect(finaller.toString().replaceAll(' ', '').includes('.filter(')).toBe(
      true
    );
  });

  test('Volvo Kurallarına dikkat edilmiş mi? .forEach() metodu kullanılmış mı?', () => {
    expect(finaller.toString().replaceAll(' ', '').includes('.forEach(')).toBe(
      true
    );
  });

  test('Volvo Kurallarına dikkat edilmiş mi? Metodlara gönderilen fonksiyonlar arrow function olarak yazılmış mı?', () => {
    expect(finaller.toString().replaceAll(' ', '').includes('=>')).toBe(true);
  });

  test('Doğru metni dönüyor mu?', () => {
    expect(result).toBe('2014 yılına kadar finallerde 68 gol atılmıştır.');
  });
});
