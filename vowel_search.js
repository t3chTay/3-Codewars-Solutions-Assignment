// Is there a vowel in there?

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