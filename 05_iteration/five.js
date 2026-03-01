// for_each........................

const coding = ["js", "ruby", "cpp", "swift"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// coding.forEach((item)=>{
//     console.log(item);
    
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function Printme(item){
//     console.log(item);
    
// }
// coding.forEach(Printme)   // dhyan rkhna yeha function ka refrence pass hota h , execute nhi krnege .


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

coding.forEach( (item , index , arr)=> {
   // console.log(item, index , arr);
    
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myCoding = [
    {
        languageName : "javascript",
        laguageFilename : "js"
    },
    {
        languageName : "java",
        laguageFilename : "java"
    },
    {
        languageName : "python",
        laguageFilename : "py"
    }
]

//console.log(myCoding);
myCoding.forEach( (item)=>{
    console.log(item.laguageFilename);
    
})
