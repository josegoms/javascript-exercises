const sumAll = function(int1, int2) {
    if ( int1 < 0 || int2 < 0 || typeof int1 !== 'number' || typeof int2 !== 'number' || 
        !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }
    if (int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    let sumOfAll = 0;
    while (int1 <= int2) {
        
        sumOfAll += int1;
        int1++;
    }
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
