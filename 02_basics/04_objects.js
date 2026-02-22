//  objects singleton..........
//const tinderUser = new Object()

const  tinderUser = {}

tinderUser.id = "123efg"
tinderUser.name = "logan"
tinderUser.age = 23
tinderUser.isLogedin = true



//console.log(tinderUser);

// nesting of objects...
const regularUser = {
    email : "spider123@gmail.com",
    username :{
        fullname :{
            firstName: "spider",
            lastName : "man"
        }
    }
 
 }
 // console.log(regularUser.username.fullname);

//merging of objects........
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj3 ={5:"a",6:"b"}
const obj4 ={7:"a",8:"b"}

//const objReal = Object.assign({}, obj1,obj2, obj3, obj4)  // but we use it less of the time. while we use most of the time the spread method to merging aray as well as in objects also.
// using spread method(...)
const objReal = {...obj1,...obj2,...obj3,...obj4}  // mostly we use this methd

// console.log(objReal);

// array of objects (database se jab aata h tb aisa hota h data )
const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {

    },
    {
        
    }
]
users[1].email

// important methods ...........................................
console.log(tinderUser);

console.log(Object.keys(tinderUser));             // return in the form of array .
console.log(Object.values(tinderUser));               // return in the form of array.
console.log(Object.entries(tinderUser));            // return in the form of array .

// to check existance of any key in  objects .......................
console.log(tinderUser.hasOwnProperty('isLogedin'));



// filal itna hi objects m , baki time k sath age sikhenge jb APIs padenge.








