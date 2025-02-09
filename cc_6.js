// Task 1 - Business Profit Calculations //
function calculateProfit(costPrice, sellingPrice, unitsSold) { // starting a function to calcualte profit
let profit = ((sellingPrice - costPrice) * unitsSold); // stating the equation
return profit;
};

console.log(`Profits Earned 1: $${calculateProfit(20, 30, 100)}`); // logging profits earned with given numbers
console.log(`Profits Earned 2: $${calculateProfit(50, 70, 200)}`); // logging profits earned with given numbers


// Task 2 - Sales Tax Computation //
const calculateSalesTax = function(amount, taxRate) { // starting a function expression to calculate sales tax
    let salesTax = Math.floor(amount * taxRate); // stating the equation being used
    return salesTax;
};

console.log(`Calculated Sales Tax 1: $${calculateSalesTax(100, .07)}`); // logging the calculated sales tax with the given values
console.log(`Calculated Sales Tax 2: $${calculateSalesTax(500, .1)}`); // logging the calculated sales tax with the given values