// truthy and falsy values .....................

// falsy values.
// false , 0 , -0 , BigInt 0n , null , undefined , NaN ,"",

//remaiining all are truthy values.



//const value = {}

// if (value) {
//     console.log(" i am truthy value.");
    
// }else{
//     console.log(" i am falsy value");
    
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const value = ""

// if (value) {
//     console.log(" i am truthy value.");
    
// }else{
//     console.log(" i am falsy value");
    
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const array01 = []

// if(array01.length == 0){
//     console.log("array is empty");
    
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const object01 ={}

// if(Object.keys(object01).length == 0){
//     console.log("object is empty");
    
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish coalescing Operator (??):   work on only:- null , undefined

// const one = null ?? 3 
// console.log(one);

// const two = {} ?? 3 
// console.log(two);

// const three = 4 ?? 3 ?? 30    // prefer most first element.
// console.log(three);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// terniary operator.

// condition ? true : false

const  money = 40
money >= 50 ? console.log("i have rupees more than 50"): console.log("i have less than 50 rupees");

