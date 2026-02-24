// concept of arrowFunctions 

const user = {
    username : "shubham",
    price : 900 ,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this);
        
    }
}

// console.log(user.welcomeMessage());
// user.username= "sammer"
// console.log(user.welcomeMessage());

// console.log(this);  //will empty object

// function chai(){
//     let userName =" shubh "
//     console.log(this.userName);
    
// }
// chai();   // will produces undefined.

// const chai = function (){
//     let userName =" shubh "
//     console.log(this.userName);
    
// }
// chai();   // will also produce undefined.



// const chai = () => {
//     let username = "shubham"
//     console.log(this.username);
    
// }
// chai();   //produce undefiend ...


function chai(){
    let userName =" shubh "
    console.log(this);
    
}
//chai(); 

const addTwo = (num1, num2) => {
    return num1+num2
}
// console.log(addTwo(5,4));

const AddTwo = (num1,num2) => (num1 + num2)

//console.log(AddTwo(2,4));

const add = (x,y) => ({username: "gojo"})

console.log(add());



