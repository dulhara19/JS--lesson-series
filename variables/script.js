//--------------variables---------
//--------------------------------

// primitive data types---------
/* Numbers-floating point numbers, for decimals and integers.
   string-sequence of characters,used for text
   boolean-logical data type that can only be true or false
   undefined-data type of a variable that does not have a value yet
   null-non-existent */

// you can only start a variable name with a letter,underscore or a dollar sign
// you cant use any reserved keyword as variable names

//-------create variables---------
var firstName = 'lakshan';
var lastName = 'dulhara';
var age = 20
var isOk = true
var job,type;

//--print only variable
console.log(firstName);
console.log(lastName);

// print variable with a string
console.log('my name is '+ firstName +' '+ lastName)

// type coercion
console.log ('my name is '+age);
console.log ('it is '+ isOk);
console.log ('i am a '+ job);

// get variable type
console.log(typeof(lastName));
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

// define
job = 'doctor';

// variable mutation
lastName = 'kaluthotage' ; // console.log(lastName)
console.log('i am '+lastName+' and i am a '+job);

// display an alert
alert('my name is '+ firstName+'. i am '+age+' years old '+ 'and it is '+isOk+'.');

//get user input 
height = prompt('what is your height?');
alert('my height is '+height+' feet');