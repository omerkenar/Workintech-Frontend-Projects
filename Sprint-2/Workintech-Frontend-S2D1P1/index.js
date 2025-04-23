function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
  const currentYear = new Date().getFullYear();
  const uretimYili = currentYear - yas;
  const carObject = {
    id: id,
    model: model,
    yakit: yakit,
    vites: vites,
    uretimYili: uretimYili,
    fiyat: fiyat,
    kilometre: kilometre,
  };
  return carObject;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getCarObject;
