// Read a code of a product 1, the number of units of product 1 the price for one unit of product 1,
// the code of a product 2, the number of units of product 2 and the price for one unit of product 2. 

var lines = input.split('\n');

let productOneCode  = parseInt(lines.shift()), 
    productOneUnits = parseInt(lines.shift()),
    productOnePrice = parseFloat(lines.shift());

let productTwoCode  = parseInt(lines.shift()),
    productTwoUnits = parseInt(lines.shift()),
    productTwoPrice = parseFloat(lines.shift());


let result = (productOnePrice * productOneUnits) + (productTwoPrice * productTwoUnits); 

console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`);