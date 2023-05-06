function digital_root(n) {
  if (n < 10) {
    return n;
  }
  return digital_root(
    n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0)
  );
}
console.log(digital_root(12345)); // Output: 6
