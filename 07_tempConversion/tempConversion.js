const convertToCelsius = function(fahr) {
  let result = (fahr -32) * 5/9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let result = celsius * 9/5 + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
