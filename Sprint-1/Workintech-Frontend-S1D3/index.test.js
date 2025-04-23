const totalCharCount = require('./index.js');

describe('Kelime karakter sayısı hesaplama', () => {
  test('Cümledeki kelimelerin toplam karakter sayısı doğru hesaplanıyor mu?', () => {
    expect(totalCharCount(['Issız', 'bir', 'adada', 'yalnız', 'kaldı'])).toBe(
      24
    );
  });

  test('Kısa cümledeki kelimelerin toplam karakter sayısı doğru hesaplanıyor mu?', () => {
    expect(totalCharCount(['Tren', 'kaçtı', 'bir', 'kere'])).toBe(16);
  });

  test('Boş array verildiğinde 0 döndürüyor mu?', () => {
    expect(totalCharCount([])).toBe(0);
  });
});