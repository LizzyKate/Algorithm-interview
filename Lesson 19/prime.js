function primeFactors(n) {
  let factors = "";
  let factor = 2;
  let exponent = 0;

  while (n > 1) {
    if (n % factor === 0) {
      n /= factor;
      exponent++;
    } else {
      if (exponent > 0) {
        factors += `(${factor}${exponent > 1 ? `**${exponent}` : ""})`;
        exponent = 0;
      }
      factor++;
    }
  }

  if (exponent > 0) {
    factors += `(${factor}${exponent > 1 ? `**${exponent}` : ""})`;
  }

  return factors;
}
