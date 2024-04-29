var lines = input.split('\n');

let A = parseInt(lines.shift()),
	B = parseInt(lines.shift()),
    C = parseInt(lines.shift()),
	D = parseInt(lines.shift());

let difference = (A * B - C * D);

console.log(`DIFERENCA = ${difference}`);