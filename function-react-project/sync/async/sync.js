// if i use sync that means one after one but when it comes to async processes are working simultaniousely 

function onetofive(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");

}
    // this is inbuild function where it takes two param, function and the tie it takes to execute
    setTimeout(onetofive,0);
    

    
for (i=0;i<10;i++){

    console.log(i);

}

// another example, 
console.log("Start");
setTimeout(() => {
    console.log("This runs after 4 seconds");
}, 4000);
console.log("End");

//he code inside the setTimeout function is executed asynchronously. This means that the rest of your code continues to run without waiting for the setTimeout to complete