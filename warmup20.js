
//use filter to return only vowels

//procedural


// for (var i = 0; i < letters.length; i++) {
//   for (var j= 0; j <vowels.length; j++) {
//     if (letters[i] === vowels[j]) {
//       vowelArray.push(letters[i]);
//     }
//   }
// }


var letters = ['a', 'b', 'c', 'd', 'e','f', 'a', 'g', 'h', 'i', 'j', 'k'];
var vowels = ['a', 'e', 'i'];


//functional
console.log("functional approach");

function getVowels(arr) {
 // loop through letters passing each to isVowel
  var vowelArray = arr.filter(function(letter) {
    return isVowel(letter);
  });
  return vowelArray;
}

function isVowel(letter) {
//return true if a letter is a vowel
  var vowels = ['a', 'e', 'i'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter) {
      return true;
    }
  }
  return false;
}

getVowels(letters);
// console.log(vowelArray);



//filter replaces a for loop and if statement function, if you see for/if, use filter.



spotify:artist:0cmWgDlu9CwTgxPhf403hb
