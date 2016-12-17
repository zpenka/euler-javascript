// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10,001st prime number?

const generatePrimes = (n) => {
  const primes = [];

  if (n > 1) {
    primes.push(2);
  } else {
    return primes;
  }

  let test = 3;

  while (primes.length < n) {
    let is_prime = true;
    let square_root = Math.sqrt(test);

    for (let i = 0; (i < primes.length && primes[i] <= square_root); i++) {
      if (test % primes[i] === 0) {
        is_prime = false;

        break;
      }
    }

    if (is_prime) {
      primes.push(test);
    }

    test += 2;
  }

  return primes;
}

const answer = generatePrimes(10001).pop();

console.log('The 10,001st Prime number is', answer);
// The 10,001st Prime number is 104743
//
// real    0m0.049s
// user    0m0.048s
// sys     0m0.000s
