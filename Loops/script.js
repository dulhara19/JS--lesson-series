
//===========================================
//==============----Loops----================
//===========================================

/*
   Loops are control structure that repeatedly run a block of code until certain condition get false.
*/

// ---without loops---
console.log(1);
console.log(2);
console.log(3);

//---for loop---
for (var i=0; i<10; i++){  // (;) semi cln will ended up with line.so first i=0 and then go i<10; if the condition is true. then console.log; and then go to i++ .  now again go to the i<10. if the condition is true, loop will start again. always i=0 read once.
    console.log(i);
    // explanation of triple bee--
    /*
    
       i=0, 0<10 true, log i to the console, i++
       i=1, 1<10 true, log i to the console, i++
       ......
       i=9, 9<10 true, log i to the console, i++
       i=10, 10<10 false, exit the loop.
    
    */
}

for (var i=10; i>=0; i--){
    console.log(i);
}

//---iterate an array---
var students =['nimal','kamal','dulhara','kasun','erandi'];
for (var i=0; i<students.length; i++){
    console.log(students[i]);
}

// --- for/in loop---

//this javascript for/in statement loops through the properties of an object.
var person = {fname:'lakshan', lname:'dulhara',age:21};//creating an object
var i; // declaring a var
for (i in person){ // object keys are getting into the (i)
    console.log(i);
    console.log(person[i]);
}

// --- for/of loop---

// for/of lets you loop over data structures that are iterable such as arrays, strings, maps, nodelists, and more. 
var fullName = 'lakshan dulhara';
var j;
for ( j of fullName){
    console.log(j);
   // console.log(fullName);
}

// --- while loop---
var marks = [33,55,66,88,22];
var k = 0;
console.log(marks.length); // just to check the length.
while ( k < marks.length){
    console.log(marks[k]);
    k++;
}

// ---do-while loop---
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 1);

// --- continue and break---
// the break and the continue statements are the only javascript statement that can "jump out of" a code block.
var data = ['saman','galle',1996, 'maths', true,'chocolates'];

// continue ---
// if a specified condition occurs, and continues with the next iteration in the loop.
console.log(data.length);
for (var i=0; i<data.length; i++){
    if(typeof(data[i]) !== 'string') continue; // simply this is if/else but we can write "continue" if theres a only one condition to be checked.
    console.log(data[i]);
} 

// break ---
// breaks the loop and continues executing the code after the loop (if any)
for (var i=0; i<data.length; i++){
    if(typeof(data[i]) !== 'string') break;
    console.log(data[i]);
}