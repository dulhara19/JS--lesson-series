//===========================================
//==========----function----=================
//===========================================

/*
   function is a re-usable peace of code that does a specific thing
*/

//-- define functions--

// without return
function addNumber(num1,num2){
   //num1,num2 are parameters
   var ans = num1 + num2;
   console.log('addition '+ans);
}

// with return
function subNumbers(num1,num2){
   // return the value to where we called the function
   // exit function
   return num1-num2;
}
  
// calling function
addNumber(20,32.5); // function is calling from here
// 20,32.5 are arguments

var sub = subNumbers(30,10);
console.log('subtraction '+ sub);

//---------------------------------------------------------
//---------------------------------------------------------

// define
function calculateAge(birthYear){
   return 2022 - birthYear;

}
// calling 
var age =calculateAge(2001);// from return for calling.
console.log(age); // we can assigned is for a var and then display it with a console.log. this result will be a number type


console.log('my age is '+ calculateAge(2001)); // we can directly use return for calling, without assigning to a var. directly with a console.log. but this result will be a string
console.log('her age is '+ calculateAge(2005));
console.log('he is '+calculateAge(2003)+' years old now');

// define
function retiringYear(firstName,birthYear){
   
   var age = calculateAge(birthYear);//calling - calling from previous function. this can be anywhere
   var retire = 60 - age;
   console.log(firstName+' retires in '+retire+' years, in '+(birthYear+age+retire));
}
// calling -second function
retiringYear('dulhara',2001);


//===========================================
//==========----function-expression----=================
//===========================================

//--function declaration--
//function profession(job,firstName){}

//--function expression--
var profession = function(job,firstName){

   switch(job){

      case 'doctor':
         return firstName+' is treating patients'; //we dont use break here because the return is the last and it exits the function

      case 'teacher':
         return firstName+' is teaching students';
      case 'engineer':
         return firstName+' is working with buildings';
      default:
         return firstName+' is doing something else';   

   }
}

// calling
console.log(profession('doctor','dulhara'));
console.log(profession('engineer','dilipa'));
console.log(profession('professor','dulhara'));




