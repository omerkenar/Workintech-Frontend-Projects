function addMethods(carObject) {
  const updatedCar = {
    ...carObject,
    getKilometers: function () {
      return `Arabanın güncel kilometresi ${this.kilometre} km'dir.`;
    },
    getYear: function () {
      return `Araba ${new Date().getFullYear() - this.yas} modeldir.`;
    },
    changePrice: function (percentage) {
      this.fiyat += (this.fiyat * percentage) / 100;
      return `Araba'nın güncel fiyatı ${this.fiyat} TL'dir.`;
    },
  };
  return updatedCar;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = addMethods;
