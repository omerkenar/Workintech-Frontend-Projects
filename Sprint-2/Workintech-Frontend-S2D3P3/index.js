// Sayı son hanelerinde 7 tane 9 rakamı var onu JS otomatik yukarı yuvarlıyor neden?

// Short-Circuit kullanarak || operatörü ile ilk ifade truthy ise kısa tanımlama yapabiliyoruz
const rakamlar = (num) => {
  const result = {};
  for (let char of num.toFixed()) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = rakamlar;
