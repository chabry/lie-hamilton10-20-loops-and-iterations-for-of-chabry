// forOfStatement.js

// Function 1
function sumArray(arr) {
  // Implement a function to calculate the sum of all numbers in the given array.

  let sum = arr.reduce((sum, arr) => {
    return sum + arr
  }, 0)

  return sum
}

// Function 2
function concatenateStrings(arr) {
  // Implement a function to concatenate all strings in the given array into one string.
    return arr.join('')
}



// Function 3
function findAverage(arr) {
  // Implement a function to find the average of numbers in the given array.
  if(arr.length === 0) return 0

  let sum = arr.reduce((sum, arr) => {
    return sum + arr
  }, 0)

  let average = sum / arr.length

  return average
}

// Function 4
function getVowels(str) {
  // Implement a function to return an array containing all vowels in the given string.
  // liste des voyelles
  let vowels = 'aeiouyAEIOUY'

  // crééer un Set pour virer les doublons
  let vowelsSet = new Set()

  // Parcourir chaque caractère de la string/ vérifier si le caractère est dans la liste des voyelles et si oui l'ajouter dans le set
  for(let char of str){
    if (vowels.includes(char)){
      vowelsSet.add(char.toLowerCase())
    }
  }

  return [...vowelsSet]
} 

module.exports = {
  sumArray,
  concatenateStrings,
  findAverage,
  getVowels,
};
