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

module.exports = countLetters;