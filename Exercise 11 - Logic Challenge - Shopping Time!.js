function shoppingTime(memberId, money) {
    var result = {} ;
    var harga = [1500000 , 500000 , 250000 , 175000 ,50000];
    var list = ['Sepatu brand Stacattu', 'Baju brand Zoro', 'Baju brand H&N', 'Sweater brand Uniklooh', 'Casing Handphone'];
    var sisa = money;
    var belanja = []

    if(money<harga[harga.length-1]){
        return 'Mohon maaf, uang tidak cukup';
    }else if(memberId == '' || typeof memberId !== 'string'){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else {
        for(i=0 ; i<harga.length ; i++){
            if(sisa>=harga[i]){
                sisa -= harga[i]
                belanja.push(list[i])
                }
            }
        }
    result.memberId = memberId
    result.money = money
    result.listPurchased = belanja
    result.changeMoney = sisa

    return result
    }
  
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja