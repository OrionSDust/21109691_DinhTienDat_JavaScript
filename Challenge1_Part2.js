// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// 1. Arrow function to calculate the average of three scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Calculate the average scores for both teams using the function
const avgDolphinsData1 = calcAverage(44, 23, 71);
const avgKoalasData1 = calcAverage(65, 54, 49);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);

// 3. Function to check the winner based on the average scores
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log("No team wins!");
    }
};

// 4. Determine the winner for both Data 1 and Data 2
console.log("Data 1:");
checkWinner(avgDolphinsData1, avgKoalasData1);

console.log("\nData 2:");
checkWinner(avgDolphinsData2, avgKoalasData2);
