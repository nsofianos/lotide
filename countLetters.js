const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
 const letterCount = {};
 const oneWord = string.split(' ').join('');
 for (const letter of oneWord) {
   if (letterCount[letter]) {
     letterCount[letter] += 1;
   }
   else letterCount[letter] = 1;
 }
 return letterCount;
}

console.log(countLetters("lighthouse in the house"));