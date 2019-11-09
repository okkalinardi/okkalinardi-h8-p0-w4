function cariMedian(arr) {
    var result = 0;
    var temp = 0;
    if(arr.length%2==0){
        temp = Math.ceil((arr.length)/2)
        result = (arr[temp-1] + arr[temp])/2
        return result
    }else{
        temp= Math.ceil((arr.length)/2)
        return arr[temp-1]
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5