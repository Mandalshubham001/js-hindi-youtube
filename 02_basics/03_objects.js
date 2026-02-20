// singleton objects......
// objects literals......(object.create)

const mysym = Symbol("key")

const jsUser = {
    [mysym] : "mykey1",
    name:"shubham",
    id : 230000101097,
    email :"shubham@gmail.com",
    statusofLogi : false,
    lastLogin : ["monday", "tuesday"]


}
console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["id"]);
console.log(jsUser[mysym]);

console.log(typeof(jsUser[mysym]));


// change values..
jsUser.lastLogin[1] = "wednesday"

jsUser.age = 29   // to add any keys

console.log(jsUser); 

// freez to remain umchanged the values in object...........

// Object.freeze(jsUser)
// jsUser.email = "shubham1234@gmail.com"
// console.log(jsUser);

// functions................

jsUser.greeting = function(){
    console.log("hlooo jsUser, u have created a function in js . ");
    console.log("congrats!");
    
    
}

console.log(jsUser);   // isme function thda alg arha h (anonymous aarha h)
console.log(jsUser.greeting());  // isme alg arha h , ku?

// string interpolation... (backtiks` ${} `). and this keyword in js....

jsUser.greeting2 = function(){
    console.log(`hello dear jsUser , ${this.name} , have a nice day!`);
    
}
console.log(jsUser.greeting2());




