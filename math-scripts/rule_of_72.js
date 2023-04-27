// gather input
var interestRate = 9;
var savings = 300;

// perform calculation
var years = 72 / interestRate;
var doubleAmount = savings * 2;
    
// print output
console.log(`At ${interestRate}% interest rate, your savings account will be worth ${doubleAmount.toFixed(2)} in ${years} years`);