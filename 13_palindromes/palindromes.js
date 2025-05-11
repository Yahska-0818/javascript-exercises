function isAlphaNumerical(c) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    if (alphanumerical.includes(c)) {
        return true
    }
    else return false
}

const palindromes = function (string) {
    let finalArr = []
    let secondArr = []
    let start = 0
    for (let i = string.length-1; i >= 0; i--) {
        if (isAlphaNumerical(string[i].toLowerCase())) {
            finalArr.push(string[i].toUpperCase())
        }
        if (isAlphaNumerical(string[start].toLowerCase())) {
            secondArr.push(string[start].toUpperCase())
        } 
        start += 1
    }
    for (let i = 0; i<finalArr.length;i++) {
        if (finalArr[i]!==secondArr[i]) {
            return false
        }
    }
    return true
};



// Do not edit below this line
module.exports = palindromes;
