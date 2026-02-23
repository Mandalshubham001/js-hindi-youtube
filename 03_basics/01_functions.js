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
console.log(loginUsername("raaaj"));   //raaj will overwrite in the place of 'sam'
