// primitive

//7 types : String, Number , Booolean , null ,Undefined,Symbol, Bigint.

const score =100
const scorevalue = 100.3

 const isLoggdin= false
 const outsideTemp = null
 let useremail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log( id === anotherId);

 const bigNumber = 3448095094348n
 console.log(typeof bigNumber);
 
 

 //reference (non primitive)

 //Array , Objects , Functions.


const heros = ["shaktiman","doga","nagaraaj"];  // array

let myObj = {
    name: "shubham",
    age :21,
}    // object

const myFunction = function(){
    console.log("Hello world");
} // function

console.log( typeof myFunction);   // function
console.log( typeof heros);  // bject




/******************************Memory************************/

// stack (Primitive), Heap (Non-primitive)

let myYoutubename = "hiteshdotcom"

let anotherName = myYoutubename
anotherName = "chaicode"

console.log(myYoutubename);
console.log(anotherName);

//.......................................................

let userOne = {
    name: "shubham",
    upi : "8791@ybl"
}

let userTwo = userOne

userTwo.upi = "879185@ybl" 

console.log(userOne.upi);
console.log(userTwo.upi);
