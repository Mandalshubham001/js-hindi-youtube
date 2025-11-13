const accountId = 14425
let accountEmail = "shubham@gmail.com"
var accountPassword = "1234567"
accountCity="jaipur"

// accountId = 2     //not allowed

accountEmail ="hcahsgh@gamil.com"
accountPassword ="7654321"
accountCity = "Sitarganj" // not a good idea to assign varibale while it is possible to declare .

let accountState;

console.log(accountId);


/*
prefer not use "var"
because of issue in block and  functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


