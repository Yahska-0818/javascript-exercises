
const findTheOldest = function(array) {
    let sortedArray = array.sort(function(firstPerson,secondPerson){
        if (firstPerson.yearOfDeath === undefined) {
            firstPerson.yearOfDeath = 2025
        }
        if (secondPerson.yearOfDeath === undefined) {
            secondPerson.yearOfDeath = 2025
        }
        const firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth
        const secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth
        if (firstPersonAge > secondPersonAge) {
            return -1
        }
        else {
            return 1
        }
    })
    return sortedArray[0]
};

// Do not edit below this line
module.exports = findTheOldest;
