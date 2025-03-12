const repeatString = function(string, num) {
    
    let repeated = string;
    let name = string;
    
    if (num > 0) {
        for (let i = 1; i < num; i++) {
            name += `${repeated}`;
        }
        return name;
    }
    else if (num < 0) {
        return "ERROR";
    }
    else {
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
