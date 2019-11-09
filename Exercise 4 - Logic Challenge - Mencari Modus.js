function cariModus(arr) {
  var result = 0;
  var banding = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        banding.push(arr[i])
        break
      }
    }
  }
  var a = 0;
  for (k = 0; k < banding.length; k++) {
    var b = 0;
    for (l = 0; l < banding.length; l++) {
      if (k != l && banding[k] == banding[l]) {
        a++
        if (a > b) {
          b = a
          result = banding[k]
          break
        }
      }
    }
  }
  if (a == arr.length || banding.length == 0) {
    return -1
  } else {
    return result
  }
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1