// Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// ASCII Vowel Codes
// a = 97
// e = 101
// i = 105
// o = 111
// u = 117

function isVow(a){
  return a.map(num => {
      const char = String.fromCharCode(num);
      return "aeiou".includes(char) ? char : num;
    });
}