// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Function to calculate the average score
function calculateAverage(scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    let dolphinsAverage = calculateAverage(dolphinsScores);
    let koalasAverage = calculateAverage(koalasScores);
    
    console.log(`Dolphins Average Score: ${dolphinsAverage.toFixed(2)}`);
    console.log(`Koalas Average Score: ${koalasAverage.toFixed(2)}`);
    
    // Bonus 2 requirement
    if (dolphinsAverage >= 100 && koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage) {
            console.log("Dolphins win the trophy!");
        } else if (koalasAverage > dolphinsAverage) {
            console.log("Koalas win the trophy!");
        } else {
            console.log("It's a draw!");
        }
    } else {
        // Bonus 1 requirement
        if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
            console.log("Dolphins win the trophy!");
        } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
            console.log("Koalas win the trophy!");
        } else {
            console.log("No team wins the trophy!");
        }
    }
}

// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

// Bonus 1 Data
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];
console.log("\nBonus Data 1:");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

// Bonus 2 Data
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];
console.log("\nBonus Data 2:");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);

