// for of loop..................................

const array01 = ["ironman", "batman", "spiderman"]
for (const value of array01) {
    //console.log(`values in array is : ${value}`);
      
}

const string01 = "shubham mandal"
for (const character of string01) {
   // console.log(`character of string is :- ${character}`);
    
}


// map (a datatype)

const map = new Map()
map.set('IN', 'india')
map.set('CAN', 'canada')
map.set('NEP', 'nepal')

//console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    //console.log(`${key} :-  ${value}`);
}

// object pe dekhte h ab .....

const gameObj = {
    g1 : "minimilita",
    g2 : "pubg",
    g3 : "hillclimb"

}

//console.log(gameObj);

for (const key of gameObj) {   // or we use [key,value]    result will same !
   // console.log(key);
    
}   // gives error :- object is not iteratable
