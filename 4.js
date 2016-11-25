// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const palindromes = [];
const isPalindrome = (x) => x.toString().split('').reverse().join('') === x.toString();

for (let i = 999; i > 100; i--) {
  for (let j = 999; j > 100; j--) {

    let possible_answer = i * j;
    if (isPalindrome(possible_answer)) {
      palindromes.push(possible_answer);
    }
  }
}

const answer = palindromes.sort((a, b) => a > b).pop();

console.log('Largest palindrome', answer);
// Largest palindrome 906609
//
// real    0m0.524s
// user    0m0.516s
// sys     0m0.012s
