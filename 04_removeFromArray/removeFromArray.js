const removeFromArray = function(arrayToRemoveFrom,...args) {
    arrayToReturn = []
    arrayToRemoveFrom.forEach(partOfArray => {
        if (!args.includes(partOfArray)) {
            arrayToReturn.push(partOfArray)
        }
    });
    return arrayToReturn
};

// Do not edit below this line
module.exports = removeFromArray;
