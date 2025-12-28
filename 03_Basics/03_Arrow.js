const user={
    username:"jairaj",
    price:999,
    welcomeMesage: function(){
        console.log(`${this.username} ,welcome to wensdite`);
        console.log(this);
        
        //console.log(`${username} ,welcome to wensdite`); // wont run as it will ask about this
    }
}

// user.welcomeMesage()
// user.username="sam"
// user.welcomeMesage()

// function Chai(){
//     let username="jairaj"
// console.log(this.username); // cannot access username in fucntion, it can be done in objects
// console.log(this);
// }

// const Chai=function(){
//     let username="jairaj"
// console.log(this.username); // cannot access username in fucntion, it can be done in objects
// //console.log(this);
//}

// const chai=(name)=>{
//     let username="jairaj"
//  //console.log(this.username); // cannot access username in fucntion, it can be done in objects
// console.log(name);
// }
// chai("jairaj")

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


//implicit return (when function returns in one line only), there is no need to type return keyword
//const addTwo=(num1,num2)=>  num1+num2
//const addTwo=(num1,num2)=>  (num1+num2) // this can be written like this too. if paranthesis is used then return keyword is required.
const addTwo=(num1,num2)=>({username:"baba"}) // to return the object from implicit return in arrow funct
console.log(addTwo(2,6));