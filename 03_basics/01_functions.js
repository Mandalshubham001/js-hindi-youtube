// function in java script........

function addition(num1, num2){
    return num1 + num2;
    console.log("shubham");   // will not  execute becuse after return statement no lines would execute.
    
}

//console.log(addition(2,4));
// or
// let result = addition(2,3)
// console.log(result);

// function loginUsername(username){
//     return (`${username} ,just loged in` )
// }
// console.log(loginUsername("shubham"));

// function loginUsername(username){
//     if(!username){
//         console.log("plese enter valid username");
//         return  // isliye return lgya kuki hume aage k lines execut nhi krna tha.
//     }
//     return (`${username} ,just loged in` )
// }
// console.log(loginUsername());


function loginUsername(username = "sam"){
    return (`${username} ,just loged in` )
}
// console.log(loginUsername());
//console.log(loginUsername("raaaj"));   //raaj will overwrite in the place of 'sam'

// jab argument bhut jyda ho .....

function calculateCartprice(...num){
    return num;
}  //... using as rest operator
//console.log(calculateCartprice(200,300,100));

function calculateCartprice(val1,val2,...num){
    return num;
} 
//console.log(calculateCartprice(100,200,300,400));   // here 100,200 goes to val1 ,val2 respectively.


// passing objects and array in function as argument.
const user1 = {
    username :"shubham",
    price : 100
}

function handleObject(anyobject){
    return (`the price for the cart of ${anyobject.username} is ${anyobject.price}. `)
}
// console.log(handleObject(user1));
// console.log(handleObject({
//     username: "raj",
//     price :200
// }));

const myArray = [100,200,300,4000]

function handleArray(anyarray){
    return anyarray[1] // let assume we need 2nd value from the array.
}

//console.log(handleArray(myArray));
console.log(handleArray([1,2,3,4,5,6]));
