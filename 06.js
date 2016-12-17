// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
//
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const natural_numbers = [];
for (let i = 1; i <= 100; i++) {
  natural_numbers.push(i);
}

const sum_of_squares = natural_numbers.map((number) => Math.pow(number, 2)).reduce((a, b) => a + b);

const square_of_sums = Math.pow(natural_numbers.reduce((a, b) => a + b), 2);

const difference = square_of_sums - sum_of_squares;

console.log('The difference is', difference);
// The difference is 25164150
//
// real    0m0.047s
// user    0m0.036s
// sys     0m0.008s
