var lines = input.split('\n');

let A = parseFloat(lines.shift()),
	B = parseFloat(lines.shift()),
	C = parseFloat(lines.shift());

media = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5);

console.log(`MEDIA = ${media.toFixed(1)}`);