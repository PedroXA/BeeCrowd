var lines = input.split('\n');

let R = parseFloat(lines.shift());
let A = 3.14159 * Math.pow(R, 2);
console.log(`A=${A.toFixed(4)}`);