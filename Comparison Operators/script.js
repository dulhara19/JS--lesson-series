//---------------------------------------
//----------comparison operators---------
//---------------------------------------

var a = 20;
var b = '20';
var c = 5;
var d = 15;

//--- equal to---
if(a == b){
    // equal value (and) equal type
    if(a === b){
        console.log('both value and type of (a) is equal to (b)');//value is equal but type is not. so this condition is not true.
    }
    // not equal value (or) not equal type
    else if(a !== b){
        console.log('value or type of (a) is equal to (b)');// value is equal but type is not. so this condition is true.
    }
}

// lets change a and b types for a moment=======
b = 20;
if (b > c){
    if(a === c){
        console.log('both value and type of (a) is equal to (b)');
    }
    else if(a !== b){
        console.log('value or type of (a) is equal to (b) when (b) assigned 200(string)');//the condition is not equal value (or) not equal type. in this case,value and type are not equal. both not equal so above line is executed.
    }
    else if(a === b){
        console.log('type and value of (a) and (b) are equal. both are numbers with same value of 20' );// condition is true
    }
}

// lets get back our first var from now
b = '20'

//---greater than (or) equal---

if(a >= 10){// a is 20. greater than 10 but not equal.but operator is greater than (--or--) equal. condition is true
    //---greater than---
    if(d < 10){
        console.log('(d) is greater than 10');
    }
    else{
        console.log('(d) is greater than 10');
    }
}

//assigned d a new value same as c
d = 5

//---equal to-----
if(c == d){
    console.log('c is equal d after new assigned value of d');
}

//---not equal to---
if (a != d){
    console.log(' a is not equal to d')
}


//============ summary ================
//=====================================
/*

a == b   (equal to)
a != d   (not equal to)
a === b  (equal value (and) equal type)
a !== b  (not equal value (or) not equal type)
d < 10   (less than)
d > 10   (greater than)
a >= 10  (greater than (or) equal)
a <= 10  (less than (or) equal)

*/

//-----ternary operators------

c <=5 ? console.log('c is less than or equal to 5') : console.log('c is greater than 5');

/* 
in this ternary operator,we use this simple structure below 

=======>  (condition ? if : else ;) <========

so we can simplify our code by putting ternary operators in positions.
*/