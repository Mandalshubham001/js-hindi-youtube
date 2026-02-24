// scope in js............................
let a =10
const b=20
var c = 30

// jyda kuch nahi h bss 'var' hi dikkat krta h global scope aur local/block scope m .
if(true){
    var c=400;
}

console.log(c);  // would print 400 while we use console.log in global field .
