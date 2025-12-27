//singleton--> when created by a constructor
//Object.create

//object literals
const mySym=Symbol("Key1")
const JsUser={
    name:"Jairaj",
    "full name":"Jairaj Singh",
    [mySym]:"Keyword1",
    age:40,
    location:"Udaipur",
    email:"jai@gmail.com",
    isloggedIN: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="New Value" // to assign new value to the property of the object

//Object.freeze(JsUser); // to freeze the object
JsUser.email="Newest value";

//console.log(JsUser);

//function in object
JsUser.greeting=function(){
    console.log("Hello JS User");
}



JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
