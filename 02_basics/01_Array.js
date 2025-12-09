//Array.....
const myArr = [2,3,4,5,6,"shubham"]

const myHeroes = ["ironman","hulk"]

const myArr2 = new Array(1,2,3,4,5)

//  console.log(myArr[0]);
//  console.log(myArr2[1]);

myArr.push(10);
myArr.pop()
// console.log(myArr);

myArr.unshift(10)
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(100));
// console.log(myArr.indexOf(100));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));     // string type m convert kr deta h join()  method.

//method ->  slice(), splice()

console.log( "A" , myArr)
console.log(myArr.slice(2,5));  // in slice second parameter is index where need to go for copy
console.log(myArr);


console.log(myArr.splice(2,3));   // in splice second parameter is no. of count need to be deletd.
console.log( "B" , myArr)









