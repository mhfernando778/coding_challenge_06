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


// Task 3 - Employee Bonus Calculation //
const calculateBonus = (salary, performanceRating) => salary * performanceRating; // stating what the arrow function will calcualte
const performanceRating = { // the different performance ratings and the bonus amount they receive
    Excellent: .2,
    Good: .1,
    Average: .05
};

console.log(`Calculated Bonus: $${calculateBonus(5000, performanceRating.Excellent)}`); // logging the calculated bonus with given salary and rating
console.log(`Calculated Bonus: $${calculateBonus(7000, performanceRating.Good)}`); // logging the calculated bonus with given salary and rating


// Task 4 - Subscription Pricing Model //
const subscriptionPlans = { // declaring what the cost of each plan is
    basic: 10,
    premium: 20,
    enterprise: 50
};

function calculateSubscriptionCost(plan, months, discount = 0) { // starting the calculation for subscription cost
    let cost = (plan * months) - discount
    return cost;
};

console.log(`Calculated Basic Subscription Cost: $${calculateSubscriptionCost(subscriptionPlans.basic, 6, 10)}`); // logging a basic subscription plan
console.log(`Calculated Premium Subscription Cost: $${calculateSubscriptionCost(subscriptionPlans.premium, 12, 0)}`); // logging a premium subscription plan


// Task 5 - Currency Conversion //
function convertCurrency(amount, exchangeRate) { // starting a fuction to convert currency
    let conversion = Math.floor(amount * exchangeRate); // declaring the equation being used
    return conversion;
};

console.log(`Converted Currency 1: $${convertCurrency(100, 1.1)}`); // logging the first converted currency
console.log(`Converted Currency 2: $${convertCurrency(250, 0.85)}`); // logging the second converted currency


// Task 6 - High-order Function for Bulk Orders //
let orders = [200, 600, 1200, 450, 800]; // declared an array with five orders
function applyBulkDiscount(orders, discountFunction) { // started a function to apply bulk discounts
    return orders.filter(order => order > 500).map(discountFunction); // stating the parameters for the function
}
let discountedOrders = applyBulkDiscount(orders, amount => amount * .9); // declaring the discount to be 10%

console.log(`Discounted Orders: ${discountedOrders}`); // logging the discounted orders


// Task 7 - Business Expense Tracker //
function createExpenseTracker() { // starting function to track expenses
    let totalExpenses = 0;
    return function(expense) { // returning another function
        totalExpenses += expense;
        return totalExpenses;
    };
};

let tracker = createExpenseTracker();
console.log(`Total Tracked Expenses: $${tracker(200)}`); // logging  the total tracked expenses
console.log(`Total Tracked Expenses: $${tracker(150)}`); // logged the total tracked expenses
