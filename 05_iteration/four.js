// forin loop................

const object01 = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

//console.log(object01);

for (const key in object01) {
    // console.log(key);
    // console.log(object01[key]);
  //  console.log(`key is ${key} for values ${object01[key]}`);
        
}

const array02 = ["js", "cpp" , "rb"]
for (const key in array02) {
    //console.log(key);
    //  console.log(`${key} : ${array02[key]}`);   
}

// NOTE : map pe ye kaam nhi krta h , not iteratable error ataa h ...............