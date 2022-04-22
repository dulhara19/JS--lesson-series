
//--------------------------------
//----Arithmetic Operators--------
//--------------------------------

//---single operators---
var myAge,yourAge,year,result;

myAge= 21;
yourAge=10;
year=2022;

//---subtraction----
result = year-myAge;
console.log('i was born in '+result)// here the result is not a defined variable. its volatile, depending on other defined variable 

//---addition----
result = year+10;
console.log('after 10 years, it will be '+result);// result is different from subtraction. because when it comes to this code line,it will read result as  above line number 14 (year+10)

//---multiplication---
result = myAge*yourAge;
console.log('product of our ages '+result);

//---division---
result = myAge/yourAge
console.log('division of our ages '+ result);

console.log('division of our ages '+ (myAge/yourAge)); //we can put division like this in a console.log without define the result again with division equation.

//---modulus---
console.log('modulus of our ages '+(myAge%yourAge));

//---exponentiation---
console.log('exponent of my age '+(myAge**2));


//---increment---

console.log(myAge++) // myAge+1 (this is post increment) | increment happens after myAge var.so we cant display the difference now. but for display result, we have to put console.log again. 
console.log('post increment of my age '+myAge); //show the increment difference

console.log(++myAge) // 1+myAge (this pre increment) | after above line myAge should be 22, but this increment happens before myAge var. so we have nothing to do again with console.log to display but lets display again
console.log('pre increment of my age '+ myAge);

console.log(myAge); // when it comes to this line, a new value from line 44 will definitely assigned. so its 23 | this is just to show the new value of myAge


//---decrement---


console.log(myAge--);// myAge-1 (this is post decrement) | decrement happens after myAge var.so we cant display the difference now. but for display result, we have to put console.log again.

console.log('post decrement of my age '+myAge);

console.log(--myAge);

console.log('pre decrement of my age '+myAge);


//---======= operators precedence =======---

var cal= (20+30)/10+4.5-2*4**2;
console.log(cal); // google "operator precedence" there is MDN reference of all precedences.

//---multiple operators--

var ans1,ans2;
ans1 = ans2
console.log(ans1) // ans2 is assigned for ans1. ans1 is undefined so the ans2 is also undefined. assigning value is always from right to left

ans1 = ans2 = (((30+40-29)*2)/8)**4;
console.log(ans1 +' | '+ans2); // (((30+40-29)*2)/8)**4; will assigned to ans2 and ans2 will assign to ans1. so the ans1 ans ans2 is assigned the same value.



