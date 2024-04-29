var lines = input.split('\n');

let employeeNumber              = parseInt(lines.shift()),
	employeeWorkedHours         = parseInt(lines.shift()),
	employeeAmountPerHour       = parseFloat(lines.shift());

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${(employeeWorkedHours*employeeAmountPerHour).toFixed(2)}`);