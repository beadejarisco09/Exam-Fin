//1.
function isPalindrome(str) {
  // Convert string to lowercase for case-insensitive comparison
  str = str.toLowerCase();
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
}

let str1 = "racecar";
let str2 = "recorder";

console.log(str1 + " is a palindrome: " + isPalindrome(str1)); // true
console.log(str2 + " is a palindrome: " + isPalindrome(str2)); // false
