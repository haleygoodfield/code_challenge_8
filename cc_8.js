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
    return `Final Price: $${finalPrice.toFixed(2)}`;
};
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50



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



