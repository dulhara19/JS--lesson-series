let promise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
        if(success){
            resolve('success');
        }
        else{
            reject('failed');
        }
    },3000)
})

promise
    .then( 
        resultr => console.log(resultr), // resultr is the value passing from resolve
        error => console.log(error))
    
    // Executes when resolved , .then() is a method used in Promises that executes a function when the Promise is successfully resolved (fulfilled).
    // 
    // 
    //  { promise.then(onFulfilled, onRejected);}


    .catch(error => console.log(error)) // Executes when rejected
    .finally(() => console.log("Promise Completed!")); 