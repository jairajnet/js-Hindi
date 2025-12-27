function abc(){
    console.log("J");
    console.log("A");
    console.log("i");
}

//abc()

// function addTwoNumbers(num1,num2) // when defining a fucntion, input fields are known as parameters eg (num1,num2)
// {
//     console.log(num1+num2)
// }
function addTwoNumbers(num1,num2) // when defining a fucntion, input fields are known as parameters eg (num1,num2)
{
    // let result=num1+num2
    // return result
    //console.log("Jairaj"); // code wont be executed as return keyword is executed before it
    return num1+num2
}

//addTwoNumbers(1,2) // passed number are called arguments. if you dont pass any value in the argument it will be treated as undefined
let result=addTwoNumbers(4,8)

//console.log("Result is : ", result)

//function loginUserMessage(username){
function loginUserMessage(username="sam") // provided initial value
{
    //if (username===undefined) // to check undefined value
    if (!username) // checks if the parameter is undefined
        {
        console.log("please enter user name");
        return
    }
    return `Welcome : ${username}`
}

//console.log(loginUserMessage("Jairaj"));
//console.log(loginUserMessage());

// rest operator
//function addPricetoCart(num1){
    function addPricetoCart(...num1) // adding three dots on the parameter makes it rest operator. makes it value in array
    {
    return num1
}

//console.log(addPricetoCart(2,455,234))

function handleObject(anyobj){
console.log(`user name is : ${anyobj.username} and price is : ${anyobj.price}`);

}

const user={
    username:"jairaj",price:900
}

//handleObject(user)
handleObject({username:"Chimi",price:10000}) // object can be made and sent while calling the funct.

