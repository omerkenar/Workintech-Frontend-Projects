const tasKagitMakas = require("./index.js");

describe("Taş-Kağıt-Makas Oyunu", () => {
  afterEach(() => {
    jest.spyOn(Math, "random").mockRestore();
  });

  test("Kullanıcı taş seçtiğinde ve bilgisayar kağıt seçtiğinde doğru sonucu döndürüyor mu?", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(tasKagitMakas("taş")).toBe(
      "Senin seçimin: taş. Bilgisayarın seçimi: kağıt. Kaybettin!"
    );
  });

  test("Kullanıcı kağıt seçtiğinde ve bilgisayar makas seçtiğinde doğru sonucu döndürüyor mu?", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.8);
    expect(tasKagitMakas("kağıt")).toBe(
      "Senin seçimin: kağıt. Bilgisayarın seçimi: makas. Kaybettin!"
    );
  });

  test("Kullanıcı makas seçtiğinde ve bilgisayar taş seçtiğinde doğru sonucu döndürüyor mu?", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.2);
    expect(tasKagitMakas("makas")).toBe(
      "Senin seçimin: makas. Bilgisayarın seçimi: taş. Kaybettin!"
    );
  });

  test("Kullanıcı kağıt seçtiğinde ve bilgisayar kağıt seçtiğinde beraberlik sonucunu döndürüyor mu?", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    expect(tasKagitMakas("kağıt")).toBe(
      "Senin seçimin: kağıt. Bilgisayarın seçimi: kağıt. Beraberlik!"
    );
  });

  test("Kullanıcı taş seçtiğinde ve bilgisayar taş seçtiğinde beraberlik sonucunu döndürüyor mu?", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    expect(tasKagitMakas("taş")).toBe(
      "Senin seçimin: taş. Bilgisayarın seçimi: taş. Beraberlik!"
    );
  });
});
