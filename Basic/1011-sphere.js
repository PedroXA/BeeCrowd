// calculates and shows the volume of a sphere being provided the value of its radius (R) .
// calculate the volume is: (4/3) * pi * R3. Consider (assign) for pi the value 3.14159.

var lines = input.split('\n');

let radius = parseFloat(lines.shift());

    let calc = (4/3.0) * 3.14159 * Math.pow(radius,3);

console.log(`VOLUME = ${calc.toFixed(3)}`);