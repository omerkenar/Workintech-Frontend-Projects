function macOzeti(evSahibiTakim, deplasmanTakimi, period = 4) {
  const randomScore = () => Math.floor(Math.random() * 14) + 12;
  const highlights = [];
  const obj = {
    evSahibiTakim: 0,
    deplasmanTakimi: 0,
  };
  for (let i = 0; i < period; i++) {
    highlights.push(
      `${i + 1}. Periyot: ${evSahibiTakim} ${(obj.evSahibiTakim +=
        randomScore())} - ${deplasmanTakimi} ${(obj.deplasmanTakimi +=
        randomScore())}`
    );
  }
  const result =
    obj.evSahibiTakim > obj.deplasmanTakimi
      ? `Maç Sonucu: ${evSahibiTakim} ${obj.evSahibiTakim} - ${obj.deplasmanTakimi} kazandı`
      : obj.evSahibiTakim === obj.deplasmanTakimi
      ? `Maç: ${evSahibiTakim} ${obj.evSahibiTakim} - ${obj.deplasmanTakimi} ile uzatmalara gitti`
      : `Maç Sonucu: ${evSahibiTakim} ${obj.evSahibiTakim} - ${obj.deplasmanTakimi} kaybetti`;

  highlights.push(result);
  return highlights;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = macOzeti;
