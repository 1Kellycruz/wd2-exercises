// gather input
var payRate = 12;
var hoursWorked = 45;

var overtimeThreshold = 40;


// Perform operation 
var overtimeHours = hoursWorked - overtimeThreshold;
var overtimeRate = payRate * 1.5;


if (hoursWorked <= overtimeThreshold) {
    console.log('gross pay is', payRate * hoursWorked)
} else {
    var overtimePay = overtimeHours * overtimeRate;
    console.log('')
}

if (hrsWorkedB == 40) {
    var overtimeB = (grossPayB * 1.5);
}

if (hrsWorkedC > 40) {
    var overtimeC = (grossPayC * 1.5);

}
// write outputs
console.log('the overtime for working more than 40 hours is', overtimeA);
console.log('the overtime for working exactly 40 hours is', overtimeB);
console.log('the overtime for working 45 hours is', overtimeC);
