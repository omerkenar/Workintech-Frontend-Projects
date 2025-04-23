function carSimulator(brand, mdl, km, price) {
  const carObject = {
    marka: brand,
    model: mdl,
    kilometre: km,
    fiyat: price,
    depo: 50,
    getPrice: function () {
      return `Arabanın güncel piyasa değeri ${this.fiyat} TL'dir.`;
    },
    refuel: function (percentage) {
      this.depo += percentage;
      if (this.depo > 100) {
        this.depo = 100;
      }
      return `Depo %${this.depo} doludur.`;
    },
    drive: function (additionalKm) {
      this.kilometre += additionalKm;
      this.depo -= (additionalKm / 100) * 5;
      this.fiyat -= (additionalKm / 100) * 50;
      return `Araba'nın güncel kilometresi: ${this.kilometre}`;
    },
  };
  return carObject;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
