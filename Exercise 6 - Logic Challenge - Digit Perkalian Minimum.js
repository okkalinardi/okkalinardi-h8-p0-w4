function digitPerkalianMinimum(angka) {
  var tempAngka = [];
  var tempPasangan = [];
  for (i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      tempAngka.push(i)
    }
  }
  var l = tempAngka.length - 1
  for (j = 0; j < tempAngka.length / 2; j++) {
    tempPasangan.push(tempAngka[j] + '' + tempAngka[l])
    l -= 1
  }
  tempPasangan.sort(function (a, b) { return b - a }).reverse();

  return tempPasangan[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2