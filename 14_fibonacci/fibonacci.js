const fibonacci = function(num) {
    const zero = 0
    const first = 1
    let previous = zero
    let current = first
    let temp = 0

    if (num < 0) {
        return "OOPS"
    }
    else if (num == 0) {
        return zero
    }
    else if (num == 1) {
        return first
    }
    else {
        for (let i = 0; i<num-2; i++) {
            temp = current
            current += previous
            previous = temp
        }
        return previous+current
    }

};

// Do not edit below this line
module.exports = fibonacci;
