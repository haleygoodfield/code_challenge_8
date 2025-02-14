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



