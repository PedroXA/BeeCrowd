var lines = input.split('\n');

let A = parseFloat(lines.shift()),
	B = parseFloat(lines.shift());

    let media = ((A * 3.5) + (B * 7.5)) / (3.5 + 7.5);

    console.log(`MEDIA = ${media.toFixed(5)}`);