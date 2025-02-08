function takeShower(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const shower=true;
            if(shower){
            console.log("take shower");
            resolve('you took shower');
        }else{
            reject('you didnt take shower')
        }
        },3000)
    })
}

function doHomework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const homework=true;
           if(homework){
            console.log("you do your homework");
            resolve("you have completed your homework");
           }
           else{
            reject("you didnt do homework");
           }
        },2000)
    })
}

// async function doAll(){
//     await takeShower();
//     await doHomework();
// }
// doAll();  or else we can do try catch as well

async function doAll1(){

   try{

    await takeShower();
    await doHomework();
}
catch(error){
    console.log(error);
};
}

doAll1();