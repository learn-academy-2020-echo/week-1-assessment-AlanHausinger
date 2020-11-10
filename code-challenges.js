 // ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us undestand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// I feel like you would have to put a const

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212
// const boilingPoint = (temp) => {
//   // if temperature is < 212, return "number is less than boiling point"
//   if(temp < 212){
//     return `${temp} is less than boiling poing`
//   }else if (temp > 212) {
//     return `${temp)} is greater than the boiling point`
//   }else if (temp === 212) {
//     return `${temp} is at boiling point`
//   }else {
//     return error
//   }
  // else if temp > 212, return "number is above boiling point"
  // else if temp === 212, return "number is at boiling point"
  // else return "error"
// }
// I'm honestly not to sure what todo here because I wanna say you would have to create a .funtion
// then try to set the temps to something so it can spit out a text but I don't know how todo that

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

//
// var myNumbers1 = [3, 7, 0, 6, -9]
//
// for(let i=0; i<myNumbers1.length; i++){
//   console.log(myNumbers1[i] * 5)
// }


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// var myNumbers2 = [8, -7, 0, 6, 2]

// create a const for the multiplier, use value because it multipiles them individualy

// const multiplier = (array) => {

// need to use a return because we put an arrow, then use array.map to recieve the value and multiply it by 5
//
//   return array.map(value => value * 5)
// }
// console.log(multiplier(myNumbers2))

// not gonna lie putting the parenthsis and curly brackets is still pretty hard for me it takes me a long tinme
// todo by myself or I need to see an example to see where to put them


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"
//
// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
//
// // create a funtions that takes in a string
// const noVowels = (string) => {
//   // make a split
//   let stringAsArray = string.split("")
//   // create a fitler
//   // console.log(stringAsArray)
//   let conststantOnly = stringAsArray.filter(value => {
// // create a boolean statment if the statment that passes is trur then keep interval
// // if not then don't keep it
//     return value != "a" && value !="A" && value != "e" && value !="E" && value !="e"
//     && value !="i" && value !="I" && value !="o" && value !="O" && value !="u" && value !="U"
//   })
//
// return conststantOnly.join("")
// }
// console.log(noVowels(stringWithVowels1));
// console.log(noVowels(stringWithVowels2));
// I can't get the code to go through I feel like im really close but it keeps saying
// unexpected token var and i don't know how to fix it





// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"
//
// var notAString1 = true
// var notAString2 = 42
// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
//
// const noVowels = (string) => {
//
//   let stringAsArray = string.split("")
//   let conststantOnly = stringAsArray.filter(value => {
//     return value != "a" && value !="A" && value != "e" && value !="E" && value !="e"
//     && value !="i" && value !="I" && value !="o" && value !="O" && value !="u" && value !="U"
//   })
//
//     return conststantOnly.join("")
//   } else if (typeof string === "number"){
//     return `${string} is not a number`
//   } else if (`${string} is a boolean`) {
//     return `${string} is a boolean`
//   }
// }
// console.log(noVowels(stringWithVowels1));
// console.log(noVowels(stringWithVowels2));

// im honestly not even too sure where to start on this qustions because I couldn't get 4 to work
// and im not too sure how to even approach something like this

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
//
var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]
//
// const getCats = (array) =>{
//   return array.filter(value => value.animal === "cat")
// }
// console.log(getCats(toonimals));
// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
// create a functions
const nonCatNames = (array) => {
  let noCats array.filter(value => value.animal !== "cat")
  return noCats.map(value => value.name)
}
console.log(nonCatNames(toonimals));
