//==============================================
//============== Winning Team ==================
//==============================================

/*
   Sri lanka and England both played 3 match one day cricket series. In last three games, Sri lanka scored 250,277,300 runs while England scored 185,244,360 runs.

     1. Calculate the average score for each team
     2. Decides which teams wins in average(highest average score), and   display the winner with the average score
     3. Then change scores to show different winners. Dont forget to tae into accounts there might be a draw

*/

var score1,score2,score3,averageSri,averageEng;

// Sri Lanka average

score1 = parseInt(prompt('first match score of sri lanka'));
score2 = parseInt(prompt('second match score of sri lanka'));
score3 = parseInt(prompt('third match score of sri lanka')); 
// here we have to use parseInt. because prompt will give us string type value. the case of here is different from BMI comparison challenge is here we use addition of prompt values. not division and multiplication. so we should covert prompt value from string type to number type.

averageSri = (score1+score2+score3)/3;

// England average

score1 = parseInt(prompt('first match score of england'));
score2 = parseInt(prompt('second match score of england'));
score3 = parseInt(prompt('third match score of england'));

averageEng = (score1+score2+score3)/3;

// Find the winner
if(averageSri > averageEng){
    alert('winner is team SRI LANKA | Average score: '+averageSri);
    console.log('winner is sri lanka| Avg :'+averageSri);
}
else if(averageEng > averageSri){
    alert('winner is team ENGLAND | Average score: '+averageEng);
    console.log('winner us england| Avg :'+averageEng);
}
else{
    alert('match is drawn, average scores are equal');
    console.log('match is drawn, average scores are equal');
}

