var colors = require('colors');

// var colors = 'Hello World';

function makeRainbows(string) {
    console.log(colors.white(string));
    console.log(colors.cyan(string));
    console.log(colors.blue(string));
    console.log(colors.red(string));
    console.log(colors.yellow(string));
}

  for (var i = 2; i < process.argv.length; i++) {
    setInterval(makeRainbows, 1000, process.argv[i]);
}
