// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { test } = require("jest-circus")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
describe ("shuffleArray", () => {   
    test("removes the first item from the array and shuffles the remaining content.", () => {

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
expect(shuffleArray(colors1)).toContainEqual("yellow", "blue", "pink", "green")
expect(shuffleArray(colors2)).toContainEqual("saffron", "aquamarine", "periwinkle", "ochre")


     })
})


// b) Create the function that makes the test pass.

//first thing first i made the test fail thats a good thing now i am going to start thinking about my logic
// 1. of course make a const 
// 2.the function is going to be called shuffleArray
// 3.so, what i am going to use is for loop
// 4. i am going to use shift()
// 5.and to shuffle my words around that is kinda tricky cause i was thinking of using reverse but we are not trying to move the last word to the beginning.
// 6.So, i decided to use sort() and math.random now lets do this if i do add anything i will explain it while i go along.
// so my method did not work at all so i had to create a new method and i had to think more so i went back to my syllabus and did some research 
// when i did my research i started to use slice, .length, math.floor and math.random 


// i made my function called shuffleArray and i equal to arr
const shuffleArray = (arr) => {
    // made a new function this time i made it to newArr equal to arr.slice
    const newArr = arr.slice() 
    // i use a for loop here with .length
    for (let i = newArr.length - 1; i > 0; i--) {
        // i did const rand equal to math.floor and math.random
        const rand = Math.floor(Math.random() * (i + 1));
        // then i did newarr index, newArr rand and equal to rand and index
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};
     
        
    







// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.
describe("arrayMaxMin", () => { 
    it("returns an array of the minimum and maximum numbers in that order.", () => { 

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
expect(arrayMaxMin(nums1)).toEqual([-8, 90])
expect(arrayMaxMin(nums2)).toEqual([5, 109])


     })
})

// // so i made the test fail now let's do some coding 
// // off the bat make a function 

// // b) Create the function that makes the test pass.
// so i try to do a code on my own logic but it wouldn't work. it pass 1 but not the other
// what i did on lines 90 - 106
// created a function that is called arrayMaxMin and equal to my placeholder with array and slector
// const arrayMaxMin = (array, selector) => {
// for my var i put val equal to array square brakcets of zero
//     var val = array[0];  
//  i use a for loop on line 95 with a .length 
//   for (var i = 1; i < array.length; i++) {
    // i use and if/else statement and this is where i use selector is true for Min
//       if (selector == "Min") {
    // array is greater than val
//         if (array[i] < val) {
    // then val equal array 
//           val = array[i];
//         }
// for line 104 - 106 i use else if and i did the same thing on line 97 - 101 but instead of Min i use Max 
//       } else if (selector == "Max") {
//         if (array[i] > val) {
//           val = array[i];
//         }
//       }
  
//     }
// and i did my return but it did not work
//     return val;
//   }
//  so i decided to create a new method way easier
// got my function arrayMaxMIn equal to my array 
const arrayMaxMin = (array) => {
    // for my return i did math.min and math.max the reason why i put 3 dots on my array i want my return to be true
    return [Math.min(...array), Math.max(...array)]
  }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.
describe("noRepeat", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
      var testArray1 = [3, 7, 10, 5, 4, 3, 3]
      var testArray2 = [7, 8, 2, 3, 1, 5, 4]
      // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      expect(noRepeat(testArray1, testArray2, [3, 7, 10])).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
  
//   made the test fail that is a good step now need to create my function 




// b) Create the function that makes the test pass.




// made a function called noRepeat and equal to my ...arr
const noRepeat = (...arr) => { 
// i did some reserach online and decided to use set because it will help me store unique valuse of any type and also used concat 
return [...new Set([].concat(...arr))];
} 
