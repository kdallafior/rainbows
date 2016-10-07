var colors = require('colors');

var myString = 'Hello World';

function runInterval() {

console.log(myString);
console.log(myString.cyan); // cyan
console.log(myString.blue); // blue
console.log(myString.red); // red
console.log(myString.yellow); // yellow
}

setInterval(runInterval, 5000);
