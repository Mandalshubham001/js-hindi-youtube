// immediately invoked function expression (IIFE)

(function chai(){
    console.log("DB Connected");
})();    // ';'  lgana bhulna nahi nahi do iife ek sath execute nhi hoga or error ayega ...

(  (name) => {
    console.log(`DB Connected by ${name}`);
})("SHUBHAM")