// John's team scores
var johnTeamScore1 = 89;
var johnTeamScore2 = 103;
var johnTeamScore3 = 120;

// mike's team scores
var mikeTeamScore1 = 116;
var mikeTeamScore2 = 94;
var mikeTeamScore3 = 123;

// Mercy's team score 
var mercyTeamScore1 = 97;
var mercyTeamScore2 = 134;
var mercyTeamScore3 = 105;


// Averages
// John's Team Average Score 
var JohnTeamAverageScore = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
console.log( 'The Average Score for John\'s Team is ' + JohnTeamAverageScore);

// Mike's Team Average Score
var MikeTeamAverageScore = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
console.log( 'The Average Score for Mike\'s Team is ' + MikeTeamAverageScore);

// Mercy's Team Average Score
var MercyTeamAverageScore = (mercyTeamScore1 + mercyTeamScore2 + mercyTeamScore3) / 3;
console.log( 'The Average Score for Mercy\'s Team is ' + MercyTeamAverageScore);

// prints winner with average high score to the console
if (JohnTeamAverageScore >  MikeTeamAverageScore && JohnTeamAverageScore > MercyTeamAverageScore){
    var AverageHighScore = JohnTeamAverageScore;
    console.log('John\'s Team won with an average highscore of ' + AverageHighScore);
} else if (MikeTeamAverageScore > JohnTeamAverageScore && MikeTeamAverageScore > MercyTeamAverageScore) {
    var AverageHighScore = MikeTeamAverageScore;
    console.log('Mike\'s Team won with an average highscore of ' + AverageHighScore);
} else if(MercyTeamAverageScore > JohnTeamAverageScore && MercyTeamAverageScore > MikeTeamAverageScore) {
    var AverageHighScore = MercyTeamAverageScore;
    console.log('Mercy\'s Team won with an average highscore of ' + AverageHighScore);
} else {
    console.log('Both Three teams has equal points');
}