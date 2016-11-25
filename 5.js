// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);
const divisible = (a) => {
  let result = 1;

  for (let i = 2; i <= a; ++i) {
    result = lcm(result, i);
  }

  return result;
}

const answer = divisible(20);

console.log('The smallest number is', answer);
// The smallest number is 232792560
//
// real    0m0.038s
// user    0m0.036s
// sys     0m0.000s
