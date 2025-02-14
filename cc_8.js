// Task 1: Function Declaration 
// Write a function calculateSalary(baseSalary, bonus, taxRate) that computes the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Formula
    return `Net Salary: $${netSalary.toFixed(2)}`;
};
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00



// Task 2: Function Expression 
// Declare a function expression calculateDiscount(price, discountRate) to determine the final price
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate); // Formula
    console.log (`Final Price: $${finalPrice.toFixed(2)}`);
};

// Test Cases
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50



// Task 3: Arrow Function
// Write an arrow function calculateServiceFee(amount, serviceType) that applies a fee
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === "Premium") fee = amount * 0.15; // 15% of the amount 
    else if (serviceType === "Standard") fee = amount * 0.10; // 10% of the amount
    else if (serviceType === "Basic") fee = amount * 0.05; // 5% of the amount 
    
    return `Service Fee: $${fee.toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00



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
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500

