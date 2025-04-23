function getBelowTheAverage(arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].puan;
    average = sum / arr.length;
  }
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].puan < average) {
      result.push(arr[j].isim);
    }
  }
  return result;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getBelowTheAverage;
