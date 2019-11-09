function fpb(angka1, angka2) {
    var tempAngka1 = [];
    var tempAngka2 = [];
    for(i=1 ; i<=angka1 ; i++){
        if(angka1 % i ==0){
            tempAngka1.push(i);
        }
    }
    for(j=1 ; j<=angka2 ; j++){
        if(angka2 % j ==0){
            tempAngka2.push(j);
        }
    }
    for(k=tempAngka1.length-1 ; k>=0 ; k--){
        for(l=tempAngka2.length-1 ; l>=0 ; l--){
            if(tempAngka1[k]==tempAngka2[l]){
                return tempAngka1[k];
                break;
            }
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1