//immediatlely invoked fucntion expression (IIFE)
// Automatically invokes the fucntion
//(function definition)()

// regular expression
// function chai(){
//     console.log(`DB Connected`);
// }

// chai()

//----------IIFE------------------
(function chai(){
    // named IIFE
    console.log(`DB Connected`);
    
})(); // semicolon is required to end the scope of first IIFE. without it next statement wont work

// (()=>console.log(`DB Connected Two`)
// )()

// to pass parameter in IIFE
((name)=>console.log(`DB ${name} connected`)
)("GPdata Database")
