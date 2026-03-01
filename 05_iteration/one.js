// for loop

// for (let i = 1; i <= 10; i++) {
//     const element = 2*i;
//     console.log("i = ",element);

// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (let i = 0; i < 5; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`inner loop value ${j} , and outer loop ${i}`);
        
//     }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break
        
    }
    console.log(`value of i is ${index}`);
}  


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
}  