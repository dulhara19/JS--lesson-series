//===========================================
//======== logical operators=================
//===========================================

var a = 20;
var b = 20;
var c = 5;

//---and---

if (a == 10 && a == b){
    console.log('this is okay');
    // a is equal to b but a is not assigned to 10.so condition is wrong
}
else{
    console.log('a is equal to b but a is not assigned to 10.so condition is wrong');
}

if( a == 20 && a == b){
    console.log('a is equal to b and a is assigned to 20, so condition is true')
}

// using ternary operator
a == 20 && a == c ? console.log('ternary op') : console.log('ternary op-else part')

//---or---

if(a > 10 || c == b){
    console.log('a is greater than 10 but c is not equal to b');
}

//---not---

if(a != c){
    console.log('a is not equal to c');
}
