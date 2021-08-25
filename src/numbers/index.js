/**
 * Check if the number is even or odd
 * isEven
 * @param {number} num - the number that we are checking
 * @returns true if the number is even
 */

const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0){
  console.log(`The ${num} is even`)
  return true
  } 
  else {
  return false
}
}

const sum = (arr) => {
  // write code for numbers.sum

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}