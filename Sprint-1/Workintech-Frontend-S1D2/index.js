function tasKagitMakas(userChoise) {
  const choises = ["taş", "kağıt", "makas"];
  const random = Math.floor(Math.random() * 3);
  const compChoise = choises[random];

  if (userChoise === compChoise) {
    return `Senin seçimin: ${userChoise}. Bilgisayarın seçimi: ${compChoise}. Beraberlik!`;
  } else if (
    (userChoise === "taş" && compChoise === "makas") ||
    (userChoise === "kağıt" && compChoise === "taş") ||
    (userChoise === "makas" && compChoise === "kağıt")
  ) {
    return `Senin seçimin: ${userChoise}. Bilgisayarın seçimi: ${compChoise}. Kazandın!`;
  } else if (
    (userChoise === "makas" && compChoise === "taş") ||
    (userChoise === "taş" && compChoise === "kağıt") ||
    (userChoise === "kağıt" && compChoise === "makas")
  ) {
    return `Senin seçimin: ${userChoise}. Bilgisayarın seçimi: ${compChoise}. Kaybettin!`;
  } else {
    return "Lütfen geçerli bir ifade girin: (taş, kağıt, makas)";
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
