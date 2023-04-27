// gather inputs
var x1 = 4
var y1 = 6

var x2 = 6
var y2 = 8

// perform operation 
// d = squareRoot of (distanceX squared + distanceY squared)
var distanceY = y2 - y1;
var distanceX = x2 - x1;
var distance = Math.sqrt(distanceX ** 2 + distanceY ** 2); 

// write outputs 
console.log(`The distance from (${x1}, ${y1}) to (${x2}, ${y2}) is ${distance}`);
