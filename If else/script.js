//---------------------------------------------
//-----------if else---------------------------
//---------------------------------------------

var a = 10;
var b = 20;

//---condition------------

if(a>b){
    console.log('a is greater than b'); //if the condition is true, other conditions will be ignored. in this case condition is not true. so else condition will be checked automatically and execute.
}
else if(a==15){
    console.log('a is equal to 10');
}
else if(a==20){
    console.log('a is equal to 20')
}
else{
    console.log('a is less than b or equal') // this is true condition.
}

//---condition-2----------
a=b // assigning b to a 
if(a==b){
    console.log('a is equal to b')
}

// when it comes to another "if" that will be another condition.it is not depending on previous "if". simply, this is new flow.