function tutarHesapla(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const text = arr[i][j].toLowerCase("TR-tr");
      if (text === "a") {
        counter++;
      } else if (text === "h") {
        counter++;
      } else if (text === "m") {
        counter++;
      } else if (text === "e") {
        counter++;
      } else if (text === "t") {
        counter++;
      }
    }
  }
  return counter * 1000;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;
