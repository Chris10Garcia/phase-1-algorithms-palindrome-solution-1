// function isPalindrome(word) {
//     let wordArray = [...word]
//     let ansArray = []

//     for (let i = wordArray.length -1; i >= 0; i--){
//         ansArray.push(wordArray[i])

//     }

//     for (let i = wordArray.length -1; i>=0; i--){
//         if (ansArray[i] !== wordArray[i]){
//             return false;
//         }
//     }
//     return true
// }

function reverseString(string){
  return [...string].reverse().join("")
}

function isPalindrome(string) {
  reverseWord = reverseString(string)
  return string === reverseWord
}

/* 
  input data = string
  output = boolean

  test if word forward is the same as word reverse

  need method / function / logic to reverse string
    - String object does not have any reverse methods
    - however, array object does (Array.prototype.reverse())
      - convert string to an array
      - reverse array method
      - join the word and return result
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
