// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Function to calculate the tip based on the bill value
function calculateTip(bill) {
    // Use ternary operator to decide the tip percentage
    const tipPercentage = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
    
    // Calculate the tip
    const tip = bill * tipPercentage;
    
    // Calculate the total amount
    const total = bill + tip;
    
    // Print the result
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Test Data 1
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

console.log("Test Data 1:");
calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);
