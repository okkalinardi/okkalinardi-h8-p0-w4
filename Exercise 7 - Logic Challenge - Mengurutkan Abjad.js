function urutkanAbjad(str) {
    var alphabet ='abcdefghijklmnopqrstuvwxyz';
    var posisi = [];
    var temp = 0;
    var result = '';
    for(i=0 ; i<str.length ; i++){
        posisi.push(alphabet.indexOf(str[i]))
    }
    for(j=0 ; j<posisi.length ; j++){
      for(k=0 ; k<posisi.length ; k++){
        if(posisi[k]>posisi[k+1]){
          temp = posisi[k]
          posisi[k] = posisi[k+1]
          posisi[k+1] = temp
        }
      }
    }
    for(l=0 ; l<posisi.length ; l++){
      result += alphabet[posisi[l]];
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'