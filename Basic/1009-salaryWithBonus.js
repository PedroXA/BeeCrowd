// reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money).
// considering that this seller receives 15% over all products sold

var lines = input.split("\n");

let employeeName = lines.shift(),
	employeeFixedSalary = parseFloat(lines.shift()),
	employeeTotalSaleMade = parseFloat(lines.shift()); // Money

// Regra de Negocio
let employeePart = employeeTotalSaleMade - employeeTotalSaleMade * 0.85;

console.log(`TOTAL = R$ ${(employeePart + employeeFixedSalary).toFixed(2)}`);
