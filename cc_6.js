// Task 1 - Business Profit Calculations //
function calculateProfit(costPrice, sellingPrice, unitsSold) { // starting a function to calcualte profit
let profit = ((sellingPrice - costPrice) * unitsSold); // stating the equation
return profit;
};

console.log(`Profits Earned 1: $${calculateProfit(20, 30, 100)}`); // logging profits earned with given numbers
console.log(`Profits Earned 2: $${calculateProfit(50, 70, 200)}`); // logging profits earned with given numbers