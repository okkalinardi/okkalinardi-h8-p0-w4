function highestScore (students) {
  var result = {};
   var kelas = [];
   for(i=0 ; i<students.length ; i++){
     if(kelas.includes(students[i].class)==false){
       kelas.push(students[i].class)
     }
   }
  
   for(j=0 ; j<kelas.length ; j++){
     var tinggi = {};
     var nilai = 0;
     for(k=0 ; k<students.length ; k++){
       if(kelas[j]==students[k].class && students[k].score>nilai){
        nilai = students[k].nilai;
        tinggi.name = students[k].name;
        tinggi.score = students[k].score;
       }
     }
     result[kelas[j]] = tinggi
   }
   return result
    }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Alexei2',
      score: 45,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}