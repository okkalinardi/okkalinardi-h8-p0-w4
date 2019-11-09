function ubahHuruf(kata) {
  var alphabet ='abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for(i=0 ; i<kata.length ; i++){
    if(alphabet.indexOf(kata[i]) == 25){
      result += alphabet[0]
    }else{
    result += alphabet[alphabet.indexOf(kata[i])+1]
  }
  }
  return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu