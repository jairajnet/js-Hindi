// method one
const promiseOne=new Promise(function(resolve,reject){
// Do an async task like db call, network, cryptography
setTimeout(() => {
console.log('Async task completed');    
resolve();    
}, 1000);


});

promiseOne.then(function(){
    console.log('Promise Consumed');
    })
//--------------------------------------

//Method two (Without maintaining variable)
  
    const PromiseTwo=new Promise(function(resolve,reject){
setTimeout(() => {
    console.log('Async 2 Task');
    resolve();
}, 1000);
    }).then(function(){
        console.log('Promise Two Consumed');
        
    })
//-----------------------------------------------------------

// Example three to have data in resolve part
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({userName:'Jairaj',email:'Jairaj@example.com'})
    }, 1000);
})

promiseThree.then(function(user){
console.log(user);
console.log('Promise three callled');

})
//---------------------

//Method four Reject is also included with Finally
const ProFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        // let found=true;
        let found=false;
        if (!found){
            resolve({userName:'Dhivu',Password:'Tara-Tasha'})
        }
        else{
            reject('Error: not resolved')
        }
    }, 1000);
})

ProFour.then(function(user){
    //console.log(user.userName);
    return user.userName
}).then(function(User1){
    console.log(User1);
    
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>console.log('Finally of Promise four called'))

//---------------------------------------

// Method Five (using without then, catch and finally--> Async and Awai)
const proFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let found=true
        if (!found)
        resolve({Course:'JavaScript',Fee:'2000',Duration:'2 Years'})
    else
        reject('error : no course found')
    }, 1000);
})

async function consumePromiseFive(){
    try {
            const promise= await proFive
    console.log(promise);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()
//-----------------------------------------------------