// Task 1: Function Declaration 
// Write a function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Formula
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
};

// Test Cases
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"



// Task 2: Function Expression 
// Declare a function expression calculateDiscount(price, discountRate) to determine the final price
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate); // Formula
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
};

// Test Cases
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"



// Task 3: Arrow Function
// Write an arrow function calculateServiceFee(amount, serviceType) that applies a fee
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === "Premium") fee = amount * 0.15; // 15% of the amount 
    else if (serviceType === "Standard") fee = amount * 0.10; // 10% of the amount
    else if (serviceType === "Basic") fee = amount * 0.05; // 5% of the amount 

    console.log(`Service Fee: $${fee.toFixed(2)}`);
};

// Test Cases
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"



// Task 4: Parameters and Arguments
// Write a function calculateRentalCost(days, carType, insurance = false) that calculates rental costs
function calculateRentalCost(days, carType, insurance = false) {
    let carRates = { "Economy": 40, "Standard": 60, "Luxury": 100}; // $40, $60, and $100/day
    let insuranceCost = 0;
    if (insurance) {
        insuranceCost = 20 * days; // Insurance costs an extra $20 per day.
    }
    let totalCost= (carRates[carType] * days) + insuranceCost;

    console.log(`Total Rental Cost: $${totalCost}`);
    
};

// Test Cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"



// Task 5: Returning Values
// Write a function calculateLoanPayment(principal, rate, time) that returns total loan payment
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = (principal + (principal * rate * time)); // Formula
    
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
};

// Test Cases
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"



// Task 6: Higher-Order Functions
// Write a higher-order function filterLargeTransactions(transactions, filterFunction) to find transactions above $1000
function filterLargeTransactions(transactions, filterFunction) {
    let largeTransactions = transactions.filter(filterFunction);
    console.log(`Large Transactions: $${largeTransactions}`);
}; // What is the ? for ??

// Test Cases
let transactions = [200, 1500, 3200, 800, 2500]; // Declare an array transactions with at least five values
filterLargeTransactions(transactions, amount => amount > 1000);
// Expected output: [1500, 3200, 2500]



// Task 7: Closures
// Write a function createCartTracker() that returns another function to add items and maintain a running total
function createCartTracker() {
    let cartValue = 0;
    
    return function(amount) {
        cartValue += amount;
        return `Total Cart Value: $${cartValue}`;
    };
};

// Test Cases
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"



// Task 8: Recursion in JavaScript
// Write a recursive function calculateSavings(years, amount) that projects savings growth
function calculateSavings(years, amount) {
    if (years >= 10) return amount;
    return calculateSavings(years + 1, amount * 1.05); // Each year increases savings by 5% until reaching year 10
};
// Test Cases
console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`); // Expected output: "Projected Savings: $1102.50"
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`); // Expected output: "Projected Savings: $6381.41"