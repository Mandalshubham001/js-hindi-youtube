// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   // flase  
console.log(null >= 0);   //true

console.log(null == 0);  // false

// the reason is that an equality chehk == and comperision > < >= <=  work diffrently. 
//  compersion  convert null to a number , treating it as 0. thats why (3) null >= is true an (1)null > 0 is false.

console.log(undefined > 0);   // flase  
console.log(undefined >= 0);   //false

console.log(undefined == 0);  // false

// always avoide the above 6 types or similiar types conversion. always prefer readeable and clean code .



// ===   (check strictly  ,  data types bhi check karta h ,js khud se convert nhi krta h "=="" ki case ki trha is case m  )

console.log("2"===2);   // false

