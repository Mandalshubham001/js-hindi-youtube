// const coding = ["js", "ruby", "cpp", "swift"]

// const values = coding.forEach( (item)=>{
//     //console.log(item);
//     return item
// })

//  console.log(values);   // will return undefined 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const num = [1,2,3,4,5,6,7,8,9,10]

//const value01 = num.filter( (num) => (num > 4))
//console.log(value01);

// NOTE: filter k andar jo call back as a arrow function diya h humne vo implicit arrowfunction diya h , agr humne explicit bala use kiya hota ( are wahi '{}' use kiya hota) th hume khud se return likhna hota h.  example  niche h .

// const value01 = num.filter( (num) => {
//     return num>4
    
// })
// console.log(value01);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const newNum = []

// num.forEach( (num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBook = books.filter( (booksAsObject) => (booksAsObject.edition >= 1999 && booksAsObject.genre=="Fiction"))

 // overwrite kr diya h userBook ko..
 userBook = books.filter( (kitab)=>{
    return kitab.publish >2000  && kitab.edition >2001
})
 console.log(userBook);
 
 