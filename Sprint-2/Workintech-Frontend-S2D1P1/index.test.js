const newCar = require('./index.js');
// const newCar = require('./solution.js');

describe('Spread İle Kopyalama Testleri', () => {
  const car = {
    id: 121,
    model: 'VW Passat',
    yakit: 'Benzin',
    vites: 'Otomatik',
    yas: 11,
    fiyat: 800000,
  };

  const car2 = {
    model: 'Toyota Corolla',
    yas: 5,
    fiyat: 1500000,
  };

  const car3 = {
    model: 'TOGG T10S',
    yas: 5,
    fiyat: 1500000,
  };

  const result = newCar(car);
  const result2 = newCar(car2);
  const result3 = newCar(car3);
  const funcString = newCar.toString();

  test('Fonksiyonun dönüş değeri nesne mi?', () => {
    expect(typeof result).toBe('object');
    expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
  });

  test('Spread ile kopyalanmış mı', () => {
    expect(funcString.includes('...')).toBe(true);
  });

  test('ÖTV oranı eklenmiş mi?', () => {
    expect(result).toHaveProperty('otv');
  });

  test("ÖTV oranı fiyatı 1450000'den az olan araba için doğru dönüyor mu?", () => {
    expect(result).toHaveProperty('otv');
    expect(result).toHaveProperty('otv', 10);
  });

  test("ÖTV oranı fiyatı 1450000'den fazla olan araba için doğru dönüyor mu?", () => {
    expect(result2).toHaveProperty('otv');
    expect(result2).toHaveProperty('otv', 40);
  });

  test('MTV eklenmiş mi?', () => {
    expect(result).toHaveProperty('mtv');
  });

  test("MTV ücreti 10'yaşından büyük araba için doğru dönüyor mu?", () => {
    expect(result).toHaveProperty('mtv');
    expect(result).toHaveProperty('mtv', 520);
  });

  test("MTV ücreti 10'yaşından küçük araba için doğru dönüyor mu?", () => {
    expect(result2).toHaveProperty('mtv');
    expect(result2).toHaveProperty('mtv', 1773);
  });

  test('Marka özelliği eklenmiş mi?', () => {
    expect(result).toHaveProperty('marka');
  });

  test('Marka özelliğinin değeri doğru mu?', () => {
    expect(result).toHaveProperty('marka');
    expect(result2).toHaveProperty('marka');
    expect(result).toHaveProperty('marka', 'VW');
    expect(result2).toHaveProperty('marka', 'Toyota');
  });

  test('Model özelliğinin değeri güncellenmiş?', () => {
    expect(result).toHaveProperty('model', 'Passat');
    expect(result2).toHaveProperty('model', 'Corolla');
  });

  test('isDomestic özelliği eklenmiş mi?', () => {
    expect(result).toHaveProperty('isDomestic');
  });

  test('isDomestic özelliği yerli olmayan araba için doğru dönüyor mu?', () => {
    expect(result3).toHaveProperty('isDomestic');
    expect(result3).toHaveProperty('isDomestic', true);
  });

  test('isDomestic özelliği yerli araba için doğru dönüyor mu?', () => {
    expect(result).toHaveProperty('isDomestic');
    expect(result).toHaveProperty('isDomestic', false);
  });

  test('yas özelliği çıkartılmış mı?', () => {
    expect(result).not.toHaveProperty('yas');
  });
});
