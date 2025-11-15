let score = "123abc"   // place the values to check its type and conversion take place or not .

//console.log( typeof(score));
 
let valueInscore = Number (score);
//console.log(typeof(valueInscore));
//console.log(valueInscore);

// "33" => 33
// "33abc" => NaN ...etc

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

// 1=> true;  0 => false
// "" => false
// "shubham" => true

let someNumber = 33
//console.log(someNumber);
//console.log(typeof(someNumber));

let  stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);


/*****************Operations**************************/

// console.log("1"+2);  // 12
// console.log(1 + "2");  //12
// console.log("1"+2 +2); //122
// console.log(1+2+"3");  //33

let gameCounter = 100;
gameCounter++;
//console.log(gameCounter);
//console.log(1+gameCounter);

let x = 3;
const y = x++;

//console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

//console.log(`a:${a}, b:${b}`);

//prefer mdn to recall and revise pre and post increement.





