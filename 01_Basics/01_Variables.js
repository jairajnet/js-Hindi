const accountId=144553
let accountEmail="Jairaj.net@gmail.com"
var accountPassword="12345"
accountCity="Udaipur"
let accountState;
// accountId=2; // not allowed
accountEmail="jai@gmail.com"
accountPassword="785944"
accountCity="Mumbai"

console.log(accountId);

/*
prefer not to use var, because of issue in block and fucntional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
