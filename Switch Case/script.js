
//=====================================
//=========--switch case--=============
//=====================================

var empName = "Dulhara";
var jobRole = "Doctor";

switch (jobRole.toLocaleLowerCase()){

    case 'teacher':
        console.log( empName+' is a teacher');
        break;
     
    case 'engineer':
        console.log(empName+' is an engineer');
        break;

    case 'doctor':
    case 'professor':
    case 'gangster':   // we can write many cases to get single output
        console.log(empName+' is a doctor');
        break;

    case 'singer':
        console.log(empName+' is a singer');
        break;
    
    default:
        console.log(empName+' does something else');
        break;
}

//=====================================

var age = 20;

switch(true){
    case age < 20:
        console.log(empName+' is under age');
        break; // this condition is false

    case age<=20 && age<30:
        console.log(empName+' is perfect age');
        break;  //this condition is true

    case age>=20 && age<10:
        console.log(empName+' is mature');
        break; // this condition is false
    
    default:
        console.log(empName+' is too old'); // this condition is false
}
// we can combine any operators, at any time we need them 