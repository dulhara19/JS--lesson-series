//--------------------------------------
//-------B M I - Comparison-------------
//--------------------------------------

/* 
Kasun and Chamal are trying to compare their BMI(body mass index), which is calculated using the formula : BMI = MASS / (HEIGHT ^ 2) 
(mass is kg and height in meter)

1. Store Chaml's and Kasun's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Kasun has a higher BMI than Chamal.
4. Print a string to in alert box containing the variables from step 3
*/

var mass,height,bmik,bmic,isKasun; 

// Kasun's BMI
mass = prompt("Kasun's mass :");
height = prompt("Kasun's height :");
bmik = mass / height**2;


// Chaml's BMI
 mass = prompt("Chamal's mass ");
 height = prompt("Chamal's height ");
 bmic = mass / height**2;

 // alert BMI
 alert("BMI of Kasun is "+ bmik);
 alert("BMI of Chamal is "+ bmic);

 // boolean
 isKasun = bmik < bmic ;
 alert('FUCK '+isKasun);