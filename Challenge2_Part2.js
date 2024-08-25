// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// 1. Function to calculate the tip based on the bill value
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Test the function with a bill value of 100
console.log(`Tip for a bill of 100: ${calcTip(100)}`);

// 2. Create an array with test data
const bills = [125, 555, 44];

// 3. Create an array containing the tip for each bill
const tips = bills.map(calcTip);

// 4. Bonus: Create an array containing the total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Print the results
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
