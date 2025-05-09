const reverseString = function(stringToReverse) {
    finalString = ""
    stringLength = stringToReverse.length

    for (let i = stringLength-1; i >= 0; i--) {
        finalString+=stringToReverse[i];
    }
    return finalString
};

// Do not edit below this line
module.exports = reverseString;
