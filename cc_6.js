// Task 1 - Business Profit Calculations //
function calculateProfit(costPrice, sellingPrice, unitsSold) {
let profit = ((sellingPrice - costPrice) * unitsSold);
return profit;
};

console.log(`Profits Earned 1: $${calculateProfit(20, 30, 100)}`);
console.log(`Profits Earned 2: $${calculateProfit(50, 70, 200)}`);