// array thda bsics se upper...

const marvel_Heros = ['ironman','hulk','spiderman']

const dc_heros = ['superman','batman','flash']

// console.log(dc_heros);
// marvel_Heros.push(dc_heros)

// console.log(marvel_Heros);

//const all_heros = marvel_Heros.concat(dc_heros)  // concat return new array while push give chnges in existing array and return the same one.

 // console.log(all_heros)

const all_heros = [...marvel_Heros,...dc_heros]
// console.log(all_heros);

console.log("............................................");
// console.log(typeof(marvel_Heros));

// console.log(typeof all_heros);

// console.log(all_heros[2]);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("shubham"));
console.log(Array.from("shubham_mandal"));
console.log(Array.from({name:"shubham"}));  // return empty array, ( INTRESTING )

let sc_1 =100;
let sc_2 =200;
let sc_3 =300;
let sc_4 =400;

console.log(Array.of(sc_1,sc_2,sc_3,sc_4));





