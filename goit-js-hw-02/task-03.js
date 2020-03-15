const findLongestWord = function(string) {
  const strArr = string.split(" ");
  let longestWord = strArr[0];
  for (let i = 0; i < strArr.length - 1; i++) {
    if (longestWord.length <= strArr[i + 1].length) {
      longestWord = strArr[i + 1];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
