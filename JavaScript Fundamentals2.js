// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Data 1
let markMass1 = 78; // in kg
let markHeight1 = 1.69; // in meters
let johnMass1 = 92; // in kg
let johnHeight1 = 1.95; // in meters


let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Create a Boolean variable to check if Mark has a higher BMI than John
let markHigherBMI1 = markBMI1 > johnBMI1;

// Print results for Data 1 with a nice output
console.log("Data 1:");
if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
}

// Data 2
let markMass2 = 95; // in kg
let markHeight2 = 1.88; // in meters
let johnMass2 = 85; // in kg
let johnHeight2 = 1.76; // in meters

// Calculate BMIs for Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Create a Boolean variable to check if Mark has a higher BMI than John
let markHigherBMI2 = markBMI2 > johnBMI2;

// Print results for Data 2 with a nice output
console.log("Data 2:");
if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
}
