function lottery(arr) {
  // Verilen listedeki ilk 5 ile 10, 20, 30, 40 ve 50. elemanların bulunduğu kazananlar listesini oluşturuyoruz
  const firstFive = arr.slice(0, 5);
  function filterTenth(element, index) {
    if (index % 10 === 9) {
      return true;
    }
    return false;
  }
  const everyTenth = arr.filter(filterTenth);
  const winners = firstFive.concat(everyTenth.slice(0, 5));
  // Kazananlar hariç kalan isimler arasından 1 kişiyi bulup yukarıda oluşturduğumuz kazananlar listesine ekliyoruz
  function excludeWinners(element, index, array) {
    if (!array.includes(element)) {
      return true;
    }
    return false;
  }
  const remaining = arr.filter(excludeWinners);
  const random = Math.floor(Math.random() * remaining.length);
  winners.push(remaining[random]);
  // Tamamladığımız kazananlar listesini dönüyoruz
  return winners;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = lottery;
