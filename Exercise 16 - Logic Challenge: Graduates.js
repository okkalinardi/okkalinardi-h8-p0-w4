function graduates (students) {
  var kelas = [];
  for(i=0 ; i<students.length ;i++){
    if(kelas.includes(students[i].class)==false){
      kelas.push(students[i].class)
    }
  }

  var finalresult = {};
  
  for(j=0 ; j<kelas.length ; j++){
    finalresult[kelas[j]] = [];
    for(k=0 ; k<students.length ; k++){
      var lulus = {};
      if(kelas[j]==students[k].class && students[k].score >= 75){
        lulus.name = students[k].name
        lulus.score = students[k].score
        finalresult[kelas[j]].push(lulus)
      }
    }
  }
  return finalresult
  }

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}