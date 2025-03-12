const palindromes = function (text) {
    let lowerText = text.toLowerCase().replace(/[^\w]|_/g, "");
    let wordArray = Array.from(lowerText);

    let comparativeArray = wordArray.slice().reverse();

    const originalArray = JSON.stringify(wordArray);
    const reversedArray = JSON.stringify(comparativeArray);

    if (originalArray === reversedArray) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
