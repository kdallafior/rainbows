var colors = require('colors');

var myString = 'Hello World';

function makeRainbows() {

console.log(myString.white); // white
console.log(myString.cyan); // cyan
console.log(myString.blue); // blue
console.log(myString.red); // red
console.log(myString.yellow); // yellow
}

setInterval(makeRainbows, 1000);
