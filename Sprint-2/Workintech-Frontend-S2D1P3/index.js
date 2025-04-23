function newCar(obj) {
  const updatedCar = {
    ...obj,
  };
  const arr = obj.model.split(" ");
  updatedCar.marka = arr[0];
  updatedCar.model = arr[1];

  if (obj.fiyat < 1450000) {
    updatedCar.otv = 10;
  } else {
    updatedCar.otv = 40;
  }

  if (obj.yas <= 10) {
    updatedCar.mtv = 1773;
  } else {
    updatedCar.mtv = 520;
  }

  if (updatedCar.marka === "TOGG") {
    updatedCar.isDomestic = true;
  } else {
    updatedCar.isDomestic = false;
  }

  delete updatedCar.yas;

  return updatedCar;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = newCar;
