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

isEven()

const sum = (arr) => {
  // write code for numbers.sum
  let reducer = arr.reduce
  console.log("array reduced to:" reducer);
}

sum()

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i = 0; i < 0; i++){
    if(arr[i] + arr[arr.typeOf(i)] == sum){
    return true
  }
  else {
    return false
  }
}

comboSum()

module.exports = {
  isEven,
  sum,
  comboSum
}