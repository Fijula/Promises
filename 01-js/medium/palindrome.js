/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalize the input string by converting to lowercase and removing non-alphanumeric characters
  const reversedStr = normalizedStr.split("").reverse().join(""); // Reverse the normalized string
  
  return normalizedStr === reversedStr; // Compare the original and reversed strings for palindrome check
}

module.exports = isPalindrome;

