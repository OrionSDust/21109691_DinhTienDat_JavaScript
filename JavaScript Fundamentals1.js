
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Data 1
let markMass1 = 78; // in kg
let markHeight1 = 1.69; // in meters
let johnMass1 = 92; // in kg
let johnHeight1 = 1.95; // in meters

// Calculate BMIs for Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);


let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

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

// Print results for Data 2
console.log("Data 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);
