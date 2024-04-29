// Make a program that reads three floating point values: A, B and C. Then, calculate and show:
// a) the area of the rectangled triangle that has base A and height C.
// b) the area of the radius's circle C. (pi = 3.14159)
// c) the area of the trapezium which has A and B by base, and C by height.
// d) the area of ​​the square that has side B.
// e) the area of the rectangle that has sides A and B.

var lines = input.split("\n");

let A = parseFloat(lines.shift()),
	B = parseFloat(lines.shift()),
	C = parseFloat(lines.shift());

let rectangledTriangleArea  = (A * C) / 2,
	circleArea              = 3.14159 * Math.pow(C, 2),
	trapeziumArea           = Math.pow(C, 2) * (A + B),
    squareArea              = Math.pow(B,2),
    rectangleArea           = 1/2 * A * B;

console.log(`TRIANGULO: ${rectangledTriangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeziumArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
