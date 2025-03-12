const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	let accumulator = 1;
  for (let i = number; i > 0; i--) {
    accumulator = accumulator * i;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
