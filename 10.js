// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const max = 2000000;

const generatePrimesBelow = (n) => {
  const primes = [ 2 ];

  let test = 3;

  while (primes.length < Number.MAX_VALUE) {
    let is_prime = true;
    let square_root = Math.sqrt(test);

    for (let i = 0; (i < primes.length && primes[i] <= square_root); i++) {
      if (test % primes[i] === 0) {
        is_prime = false;

        break;
      }
    }

    if (is_prime) {
      if (test < n) {
        primes.push(test);
      } else {
        break;
      }
    }

    test += 2;
  }

  return primes;
}

const answer = generatePrimesBelow(max).reduce((a, b) => a + b);

console.log('The sum of the primes below', max, 'is', answer);
// The sum of the primes below 2000000 is 142913828922
//
// real    0m0.399s
// user    0m0.396s
// sys     0m0.000s

