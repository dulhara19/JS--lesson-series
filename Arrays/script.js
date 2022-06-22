
//=================================================
//==================--Arrays--=====================
//=================================================

/*

   In JavaScripts, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.

*/

//===--- ways to define an array---====

//01 st way-----
var students = ['ruwan','dulhara','kasun','sindi','nimal'];// array id is starting from 0

// 02 nd way-----
var marks = new Array(60,55,66,44,78); 

// ===---print array---===

console.log(students);
console.log(students.length);
console.log(students[1]+' got '+marks[1]+' marks for maths');

// ===---array mutation---===

students[1] = 'bashini';
students[5] = 'umaya'; // we didn't define [5]th element of array([5]elements is not existed before) now we are going to define with this. 
students[students.length] = 'chamika';

// now lets print again
console.log(students);



// ===---different data types in an array---===

var std1 = ['kamal','perera',22,'civil','panadura', true];
console.log(std1);

//-- add elements

std1.unshift('Mr.'); // add element to the start---
console.log(std1);

std1.push('green'); // add element to the end---
console.log(std1);

//-- remove elements

std1.pop();
console.log(std1); // remove element at the end---

std1.pop();
console.log(std1); // remove the next element at the end---

std1.shift();
console.log(std1); // remove element at the start---


// ===---get index of an element---===

console.log(std1.indexOf(22)); // will display the index of element---
console.log(std1.indexOf(220)); // will display -1 when the element is undefined 



if(std1.indexOf('civil') === -1){// this will not shows -1 it will shows 3 as the result. the element is defined. so if condition is false.

   console.log( std1[0]+' is not a agri student');
}

else{ // else condition is displaying the console.log 
   console.log( std1[0]+' is not a agri student');
}

//------^^^^^^^^^-----------^^^^^^^^^-------------^^^^^^^^^^^------
// ----we cant assign if/else to a var without ternary operator----
//------^^^^^^^^^-----------^^^^^^^^^-------------^^^^^^^^^^^------

// so lets do previous lines with ternary op and assign it for a var

var isCivilStudent = std1.indexOf('civil') === -1 ? console.log( std1[0]+' is not a agri student') : console.log( std1[0]+' is a civil student');// just in case of difference(see this-assigned to a var but its useless)

// ---or---
var isCivilStudent = std1.indexOf('civil') === -1 ? std1[0]+' is not a agri student' : std1[0]+' is a new civil student';

// now print the value
console.log(isCivilStudent);
