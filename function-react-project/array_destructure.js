const arr =[1,5,7,0,2];

let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
let e = arr[4];

console.log(a,b,c,d,e);
// but if we do this in other way

const [first,second,...rest_argument]=arr;

console.log(first);
console.log(second);
console.log(rest_argument);

// now lets create object
const obj1 = {one:10,two:20,three:30,four:40}
const {one:x,two,...rest_obj}= obj1;

console.log(x);
console.log(two);
console.log(rest_obj);