const fibonacci = function(number) {
    if (number == 0) {
        return 0;
    }
    else if (number < 0) {
        return "OOPS";
    }
    let fibonacci = [1, 1];
    for (let i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
