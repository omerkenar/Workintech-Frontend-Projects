//aşağıdaki satırı silmeyin
const { fifaData } = require("./fifa.js");

// toFixed() metodunu hangi sayıda kullanırsak, o sayıyı aldığı parametre miktarı kadar haneye yuvarlar ve sayısı "String" ifadeye çevirir
const ortalamaGol = (objArray) => {
  const total = objArray.reduce(
    (sum, obj) => sum + obj["Home Team Goals"] + obj["Away Team Goals"],
    0
  );
  const average = total / objArray.length;
  return average.toFixed(2);
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = ortalamaGol;
