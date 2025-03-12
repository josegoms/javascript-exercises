const removeFromArray = function(originalArray, ...deletedElement) {

    let sortedArray = originalArray.sort();

    for (let j = 0; j < deletedElement.length; j++) {

        let i = sortedArray.length - 1;

        while (i >= 0) {
            if (sortedArray[i] === deletedElement[j]) {
                sortedArray.splice(i, 1);
            } else {
                i--;
            }

        }
    }
    return sortedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
