const arr1 = [5,5,5,5];

function sum(...arrd){
    let sum= 0;
    for( const arg of arrd){
        sum = sum + arg;
    }
    console.log(sum);
}

sum(...arr1);