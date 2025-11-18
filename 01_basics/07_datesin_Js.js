// dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log( typeof myDate);   // object

 let myCreatedDate = new Date(2023 , 1 , 25)
 console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023 , 1 , 25 ,2 ,40)
console.log(myCreatedDate2.toLocaleString());

let mycreatedDate3 = new Date("01-14-2025")
console.log(mycreatedDate3.toLocaleString());


// timeStamp..............

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log("....................................................");


console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday: "long" 
})   // yaad rkhe ye trika bhi.................


 




