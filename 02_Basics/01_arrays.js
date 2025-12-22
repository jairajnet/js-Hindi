//Arrasy

let myArray=[0,1,2,3,4,5]
// arrays are resizable, mixed
// it makes shallow copies (reference type)

// console.log(myArray[2])

// Array Methods
// myArray.push(6) // to add element at nd
// myArray.push(7)
// myArray.pop() /// delerte last element from end

// myArray.unshift(9) // adds element to the start
// console.log(myArray);

// myArray.shift() // removes element from the start
// console.log(myArray)

// console.log(myArray.includes(9)); // get boolean if the value exists
// console.log(myArray.indexOf(9)); // get boolean if the value exists
console.log("A", myArray);
const myn1=myArray.slice(1,3); // get part of an array

console.log(myn1);

console.log("B", myArray);

const myn2=myArray.splice(1,3) // splice removes the elements from the base array
console.log("C", myArray)
console.log(myn2);



