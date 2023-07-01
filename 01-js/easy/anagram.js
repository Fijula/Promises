/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const normalize = (str) => str.toLowerCase().replace(/[^a-z]/g, ""); // Normalize the input string by converting to lowercase and removing non-alphabetic characters
  const sortedStr1 = normalize(str1).split("").sort().join(""); // Sort the characters of str1 in ascending order
  const sortedStr2 = normalize(str2).split("").sort().join(""); // Sort the characters of str2 in ascending order
  
  return sortedStr1 === sortedStr2; // Compare the sorted strings for anagram check
}

module.exports = isAnagram;
