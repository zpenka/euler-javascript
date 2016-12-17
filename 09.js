// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
//
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const sum = 1000;

const getPythagoreanTripletProductWhichSumsTo = (sum) => {
  for (let m = 2; m < Number.MAX_VALUE; m++) {
    for (let n = 1; n < m; n++) {
      const a = m * m - n * n;
      const b = 2 * m * n;
      const c = m * m + n * n;

      const s = a + b + c;

      if (sum % (s) === 0) {
        const k = sum / (s);

        return (k * a) * (k * b) * (k * c);
      }
    }
  }

  return -1;
}

const answer = getPythagoreanTripletProductWhichSumsTo(sum);

console.log('The pythagorean triplet product which sums to', sum, 'is', answer);
// │The pythagorean triplet product which sums to 1000 is 31875000
// │
// │real    0m0.034s
// │user    0m0.028s
// │sys     0m0.004s
