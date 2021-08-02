// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

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
    test("removes the first item from the array and shuffles the remaining content", () => {

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
expect(shuffleArray(colors1)).toEqual(["yellow", "blue", "pink", "green"])
expect(shuffleArray(colors1)).toEqual(["saffron", "aquamarine", "periwinkle", "ochre"])


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

       
        
    







// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
