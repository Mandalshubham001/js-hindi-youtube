const name = "shubham";
const repoCount = 10

// console.log(name + repoCount + "values")  generaly not prefer to use ..

//insted use ` `

console.log(`my name is ${name} and my repocount is ${repoCount}.`);    // always a good choice

//.........................
// mrthods (imp).......

const gameName = new String('shubham-sm')

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    shubham     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://shubham.com%20hyper"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));


// note: refer mdn to learn and practice more methods and do practice more the concept of string.











