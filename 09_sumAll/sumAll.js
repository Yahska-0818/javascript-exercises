const sumAll = function sumAll(intOne,intTwo) {
    if (intOne>=0 && intTwo>=0) {
        if (Number.isInteger(intOne) && Number.isInteger(intTwo)) {
                let finalSum = 0
                if (intTwo > intOne) {
                    for (let i = intOne; i < intTwo + 1; i++) {
                        finalSum += i;
                    }
                    return finalSum
                } else {
                    for (let i = intTwo; i < intOne + 1; i++) {
                        finalSum += i;
                    }
                    return finalSum
                }
        } else {
            return "ERROR"
        }
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
