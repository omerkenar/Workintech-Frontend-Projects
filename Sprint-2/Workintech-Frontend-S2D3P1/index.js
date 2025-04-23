//aşağıdaki satırı silmeyin
const { fifaData } = require("./fifa.js");

const finallerdekiGolSayilari = (objArray) => {
  // filter ve forEach kullanılarak çözüm
  const result = {};
  objArray
    .filter((item) => item["Stage"] === "Final")
    .forEach((element) => {
      result[element["Home Team Name"]] =
        (result[element["Home Team Name"]] || 0) + element["Home Team Goals"];
      result[element["Away Team Name"]] =
        (result[element["Away Team Name"]] || 0) + element["Away Team Goals"];
    });
  return result;

  // reduce kullanılarak çözüm
  // const result = {};
  // objArray.reduce((obj, element) => {
  //   if (element['Stage'] === 'Final') {
  //     obj[element['Home Team Name']] =
  //       (obj[element['Home Team Name']] || 0) + element['Home Team Goals'];
  //     obj[element['Away Team Name']] =
  //       (obj[element['Away Team Name']] || 0) + element['Away Team Goals'];
  //   }
  //   return obj;
  // }, result);
  // return result;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finallerdekiGolSayilari;
