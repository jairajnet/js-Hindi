const tinderUser=new Object() // example of sngleton object

// we can define the object like below too
const tinderUser1={}
tinderUser1.email="abcd@hai.com"
tinderUser1.loggedIn=true
tinderUser1.id="abc123"

// console.log(tinderUser1);

// const regularUser={
//     email:"abc123@jai.com",
//     fulldetail:{
//         namedetail:{
//             firstname:"Jairaj",
//             lastname:"singh"
//         }
//     }
// }
// console.log(regularUser.fulldetail.namedetail);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// to add objects in one
//const obj3={obj1,obj2} // wrong method
//const obj3=Object.assign(obj1,obj2) // method 1
//const obj3=Object.assign({},obj1,obj2) // method 2 does the same as above statement


// const obj3={...obj1, ...obj2} //spread the objects in one
// console.log(obj3);

// // when data comes from the database, it may have many objects in an array
// const user=[{
//     id:1,name:"jairaj"
// },
// {
//     id:2,name:"durgesh"
// },{
//     id:3,name:"bubble"
// },{
//     id:4,name:"Chimi"
// },
// ]
// console.log(user[1].name);

// console.log(Object.keys(tinderUser1)); // to display the keys of the object
// console.log(Object.values(tinderUser1));  // to display the values of keys of the object
// console.log(Object.entries(tinderUser1));  // to display the key value pair in array of the object
// console.log(tinderUser1.hasOwnProperty('LoggedIn'));  // to display if the key exists in the object

//de-structuring objects
const cource={
    coureseName:"PHP in java",
    price:8989, 
    instructorname:"Hitesh Sidhwani"
}

//const {instructorname}=cource // this is how we can destructure the object
const {instructorname : alv}=cource // aliasing the 
//console.log(instructorname);
console.log(alv);

