let myNum = [1,2,3,4,5,6,7]

// const newSankhay = myNum.map( (sankhya) => (sankhya + 10))

// console.log(newSankhay);

//+++++++ chaining of methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newSankhya = myNum.map((sankhaya) => (sankhaya * 10))
                        .map((sankhaya) => (sankhaya + 2))
                        .filter( (sankhaya) => (sankhaya > 30))

console.log(newSankhya);



