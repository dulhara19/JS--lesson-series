const arr1 = [1,2,3];
const arr2 =['x','y','z'];

console.log(arr1,arr2);

function sum(a,b,c){     // define function to get sum
    return a+b+c;
}
console.log(sum(arr1[0],arr1[1],arr1[2])); // call the function by passing array elements. 

// but instead of doing this we can use (spred) like this
console.log(sum(...arr1));

//Copying Arrays-You can use the spread operator to create a shallow copy of an array:
const arr3 = [...arr1];  // Creates a copy of arr1
console.log(arr3);  // [1, 2, 3]

//Merging Arrays-The spread operator allows you to merge multiple arrays into one:
const arr4= [...arr1,...arr2];
console.log(arr4);