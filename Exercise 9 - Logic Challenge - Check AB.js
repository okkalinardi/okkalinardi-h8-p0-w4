function checkAB(str) {
    var posa = [];
    var posb = [];
    var selisih = [];
    for(i=0 ; i<str.length ; i++){
        if(str[i] == 'a'){
            posa.push(i)
        }else if(str[i] == 'b'){
            posb.push(i)
        }
    }
    if(posa == 0 || posb == 0){
      return false
    }else{
      for(j=0 ; j<posa.length ; j++){
          for(k=0 ; k<posb.length ; k++){
              if(posa[j]>posb[k]){
                  selisih.push(posa[j]-posb[k])
              }else if(posa[j]<posb[k]){
                  selisih.push(posb[k]-posa[j])
              }else{
                  selisih.push(0)
              }
          }
      }
      for(l=0 ; l<selisih.length ; l++){
          if(selisih[l] < 5){
              return true;
          }else{
              return false
          }
      }
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false