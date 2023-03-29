

//  var students = [
//     {
//         name: 'David',
//         age: 12
//     },
//     {
//         name: 'Daniel',
//         age: 13
//     },
//     {
//         name: 'Alex',
//         age: 10
//     }
// ];

// var onSearch = (input) => {
//     let NewArr=[]
//     for(i=0; i<students.length; i++){
//         if(students[i].name. includes (input))
//         NewArr.push (students[i])
//     }
//     console.log(NewArr);
// }
// onSearch('a')




let users = [
   { id:1, year:1998, engine: 1, name: 'Tico'},
   { id:2, year:2005, engine: 1.2, name: 'Matiz'},
   { id:3, year:2010, engine: 1.6, name: 'Gentra'},
   { id:4, year:2010, engine: 1.5, name: 'Cobalt'},
   { id:5, year:2012, engine: 2, name: 'Malibu'},
   { id:6, year:2000, engine: 1.2, name: 'Damas'},
   { id:7, year:2018, engine: 2.4, name: 'Tracker'}
];



  let checking = users.map( (users) => {
  if(users.year < 2000){
    users.status = 'Eski'
    console.log(users);
  } 
    
})













//   let checking = users.map( (users) => {
//   if(users.year <= 2000) {
//     return 'Eski moshina'
//   }else if(users.year <= 2010 ){
//     return 'orta'
//   }else {
//     return 'yangi'
//   }
    
// })
// console.log(checking);
















              
// console.log(users.sort((a, b) => a.year - b.year))                     //3
// console.log(users.sort((a, b) => a.engine - b.engine))                 //4
// console.log(users.sort((a, b) => a.name.localeCompare (b.name)))       //5







// ================================1
// users.map( users => {
//   if(users.year < 2000) {
//     console.log(users);
//   }
// })

//=================================2
// users.map( users => {
//   if(users.year >= 2010) {
//     console.log(users);
//   }
// })

//==================================3


