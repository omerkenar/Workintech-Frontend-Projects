const { describe, expect, test } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const rewire = require("rewire");
let myModule = rewire("./index");

const studentCodePath = path.join(__dirname, "index.js");
const studentCode = fs.readFileSync(studentCodePath, "utf8");

let studentCodeToEval;
if (studentCode.includes("if")) {
  const ifPosition = studentCode.search("if");
  const beforeIf = studentCode.slice(0, ifPosition);
  const afterIf = studentCode.slice(ifPosition);
  const afterIfReplaced = afterIf.replaceAll("donemNotu", "semNote");
  studentCodeToEval = beforeIf + afterIfReplaced;
} else {
  studentCodeToEval = studentCode;
}

const fnStr = (semNote) => `(function studentCode(semNote) {
  ${studentCodeToEval};
  return harfNotu;
})(${semNote})`;

let vize, final, donemNotu, harfNotu;

try {
  vize = myModule.__get__("vize");
} catch (error) {
  result = undefined;
}

try {
  final = myModule.__get__("final");
} catch (error) {
  result = undefined;
}

try {
  donemNotu = myModule.__get__("donemNotu");
} catch (error) {
  result = undefined;
}

try {
  harfNotu = myModule.__get__("harfNotu");
} catch (error) {
  result = undefined;
}

describe("Dönem Notu ve Harf Notu Hesaplama Testi", () => {
  test("vize değişkenini tanımladın mı?", () => {
    expect(vize).toBeDefined();
  });

  test("final değişkenini tanımladın mı?", () => {
    expect(final).toBeDefined();
  });

  test("vize ve final notları 0-100 arasında mı?", () => {
    expect(vize).toBeGreaterThanOrEqual(0);
    expect(vize).toBeLessThanOrEqual(100);
    expect(final).toBeGreaterThanOrEqual(0);
    expect(final).toBeLessThanOrEqual(100);
  });

  test("donemNotu doğru hesaplanmış mı?", () => {
    const hesaplananDonemNotu = vize * 0.3 + final * 0.7;
    expect(donemNotu).toEqual(hesaplananDonemNotu);
  });

  test("harfNotu değişkeni doğru harf notunu içeriyor mu?", () => {
    const hesaplananDonemNotu = vize * 0.3 + final * 0.7;
    let beklenenNot = "";
    if (hesaplananDonemNotu >= 90) {
      beklenenNot = "A";
    } else if (hesaplananDonemNotu >= 80) {
      beklenenNot = "B";
    } else if (hesaplananDonemNotu >= 70) {
      beklenenNot = "C";
    } else if (hesaplananDonemNotu >= 60) {
      beklenenNot = "D";
    } else if (hesaplananDonemNotu >= 50) {
      beklenenNot = "E";
    } else {
      beklenenNot = "F";
    }
    expect(harfNotu).toEqual(beklenenNot);
  });

  test("donemNotu 90-100 arasındaysa harfNotu A mı?", () => {
    expect(eval(fnStr(90))).toEqual("A");
    expect(eval(fnStr(100))).toEqual("A");
  });

  test("donemNotu 80-89 arasındaysa harfNotu B mi?", () => {
    expect(eval(fnStr(80))).toEqual("B");
    expect(eval(fnStr(89))).toEqual("B");
  });

  test("donemNotu 70-79 arasındaysa harfNotu C mi?", () => {
    expect(eval(fnStr(70))).toEqual("C");
    expect(eval(fnStr(79))).toEqual("C");
  });

  test("donemNotu 60-69 arasındaysa harfNotu D mi?", () => {
    expect(eval(fnStr(60))).toEqual("D");
    expect(eval(fnStr(69))).toEqual("D");
  });

  test("donemNotu 50-59 arasındaysa harfNotu E mi?", () => {
    expect(eval(fnStr(50))).toEqual("E");
    expect(eval(fnStr(59))).toEqual("E");
  });

  test("donemNotu 50'nin altındaysa harfNotu F mi?", () => {
    expect(eval(fnStr(40))).toEqual("F");
    expect(eval(fnStr(29))).toEqual("F");
  });
});