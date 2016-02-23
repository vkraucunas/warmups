// Create a function that takes a word and returns true if and only if all of the vowels in the word are the same.

// Example
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
// myFn('oligopoly') >> false
// myFn('zoom') >> true
// myFn('bzz') >> false

//Step 1
// declare variable newArray, assign it an empty array.
var newArray = [];
// Write helper function to take the string, toLowerCase and split to an array. Call this function setUp.
function setUp(string) {
  newArray = string.toLowerCase().split('');
}

//Step 2
// declare vowelsOnly array, assign it an empty array.
var vowelsOnly = [];
// write helper function named onlyVowels
// for loop to compare newArray[i] against vowels (many ||)
function onlyVowels (array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j=0; j < array2.length; i++) {
      if (array1[i] === array2[j]) {
        vowelsOnly.push(array1[i]);
      }
    }
  }
}
// if array[i] === 'vowel' push newArray[i] to vowelsOnly array

//Step 3
// declare backwardsVowelsOnly slice and reverse vowelsOnly.
// var backwardsVowelsOnly = vowelsOnly.slice(0).reverse();

//Step 4
// Join vowelsOnly & backwardsVowelsOnly, assign to variables called stringForward and stringBackward
// var stringForward = vowelsOnly.join('');
// var stringBackward = backwardsVowelsOnly.join('');

//Step 5
// Compare stringForward and stringBackward, if === return true, else return false.
// if (stringForward === stringBackward) {
//   return true;
// } else {
//   return false;
// }

function myFn (string) {
  setUp(string);
  onlyVowels(newArray);
  var backwardsVowelsOnly = vowelsOnly.slice(0).reverse();
  var stringForward = vowelsOnly.join('');
  var stringBackward = backwardsVowelsOnly.join('');
  if (stringForward === stringBackward) {
    console.log(string, 'is', true);
    return true;
  } else {
    console.log(string, 'is', false);
    return false;
  }
}


myFn('mood');
myFn('oligopoly');
myFn('zoom');
myFn('bzz');








//solution

// Create a function that takes a word as an argument and returns true if and only if all of the vowels in the word are the same.
//   - myFn('oligopoly') => false
//   - myFn('zoom') => true

// 1. Break apart word into an array of letters
// 2. Determine if each letter is a vowel
//   - If so, add the letter to an array
// 3. Check to see if all letters in the vowel array are the same

// */


// // ** Globals **//

// var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];


// // ** Controller ** //

// function compareVowels (str) {
//   var strLower = toLower(str);
//   var splitArray = splitString(strLower);
//   var vowelArray = vowelParse(splitArray);
//   var clone = vowelArray.slice(0);
//   var solution = vowelCompare(vowelArray, clone);
//   return solution;
// }

// console.log(compareVowels("Oligopoly"));
// console.log(compareVowels("Bzz"));
// console.log(compareVowels("Zoom"));


// // ** Helper Functions ** //

// function splitString(str) {
//   return str.split('');
// }

// function toLower(str) {
//   return str.toLowerCase();
// }

// function vowelParse(array) {
//   var vowelArray = [];
//   for (i = 0; i < array.length; i++) {
//     for (j = 0; j < vowels.length; j++) {
//       if (array[i] === vowels[j]) {
//         vowelArray.push(array[i]);
//       }
//     }
//   }
//   return vowelArray;
// }

// function vowelCompare(array1, array2) {
//   if (!array1.length) {
//     return false;
//   } else {
//     for (i = 1; i < array1.length; i++) {
//       for (j = 0; j <= array2.length; j++) {
//         if (array1[i] === array2[j]) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
// }






