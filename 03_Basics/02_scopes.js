// let a =10
// const b=20
// var c=30
if (true){
let a =10
const b=20
var c=30
}

//console.log(a); //defined in the if condition then cant be used outside that scope
//console.log(b); //defined in the if condition then cant be used outside that scope
console.log(c); // it shows that var can be used outside the scope also.

//++++++++++++ Mini Hoisting++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}


//console.log( AddTwo(8)) // cannot access this addtwo because it is defined below this

const AddTwo=function(num){
    return num+2
}
