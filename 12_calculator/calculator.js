const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	finalTot = array.reduce((total,num)=>{
    return total+num
  },0)
  return finalTot
};

const multiply = function(array) {
  
	return array.reduce((total,num)=> total*num,1)
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(a) {
  finalReturn = 1
	for (let i = a; i>0; i--) {
    finalReturn *= i
  }
  return finalReturn
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
