// scope in js............................
let a =10
const b=20
var c = 30

// jyda kuch nahi h bss 'var' hi dikkat krta h global scope aur local/block scope m .
if(true){
    var c=400;
}

console.log(c);  // would print 400 while we use console.log in global field .

// nested function's scope...
function One(){
    const userName = "shubham"
    
    function Two(){
        const website = "youtube.com"
        console.log(userName);
    }
   // console.log(website);      error dega kuki scope se bhar h ye .

    Two();
    
}
//One();

// same for if-else statement ............. 
if (true){
    const userName = "shubham"
    if(userName === "shubham"){
        const website = " linkedin"
        console.log(userName + website);

    }
   // console.log(website);   error dega ...
    
}
//console.log(userName);


//++++++++++++++++++++++++++++ INTRESTING +++++++++++++++++++++++++++++++++

// function declaration is format m AISA HO SKTA H ......

console.log(addOne(5));       //ki humne initilize krne se phle execution kr diya ....

function addOne(num){
    return num+1;
}

// function declaration is format m nahi ho skta ki hum execution phle define kr de  (AISA NAHI HO SKTA H )......

// addTwo(5)  // ki phle execution define kr de , error dega is case mai.
 
const variables =  function addTwo(num){
    return num+2
}