const repeatString = function(stringToRepeat,numerOfRepeats) {
    if (numerOfRepeats >= 0) {
        let finalString = ""
        for (let i=0; i<numerOfRepeats;i++) {
            finalString+=stringToRepeat;
        }
        return finalString
    }

    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
