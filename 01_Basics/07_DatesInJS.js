// dates
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2025,4,25)
console.log(myCreatedDate.toDateString()); // month starts with 0

let myCreatedDate1=new Date("01-14-2025")
console.log(myCreatedDate1);

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myTimeStamp);
console.log(myCreatedDate1.getDay());


