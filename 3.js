// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const base_number = 600851475143;
const getPrimeFactors = (x) => {
  const factors = [];

  const isPrime = (x) => {
    if (isNaN(x) || !isFinite(x) || x % 1 || x < 2) {
      return false;
    }

    if (x % 2 === 0) {
      return (x === 2);
    }

    if (x % 3 === 0) {
      return (x === 3);
    }

    for (var i = 5; i <= Math.sqrt(x); i += 6) {
      if (x % i === 0) {
        return false;
      }

      if (x % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = 1; i <= Math.sqrt(x); i += 2){
    let quotient = x / i;

    if(quotient === Math.floor(quotient)){
      if (isPrime(i)) {
        factors.push(i);
      }
    }
  }

  return factors;
};

const sorted_factors = getPrimeFactors(base_number).sort((x, y) => x > y);
const largest_prime_factor = sorted_factors.pop();

console.log('The largest prime factor is', largest_prime_factor);
// The largest prime factor is 6857
//
// real    0m0.049s
// user    0m0.048s
// sys     0m0.000s
//
