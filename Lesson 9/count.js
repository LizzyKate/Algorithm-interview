function count(string) {
  const result = {};
  for (let char of string) {
    result[char] = result[char] ? result[char] + 1 : 1;
  }
  return result;
}
