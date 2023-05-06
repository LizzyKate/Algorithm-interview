function spinWords(string) {
  //TODO Have fun :)
  let result = string.split(" ");
  result.forEach((e, i) => {
    if (e.length >= 5) {
      result[i] = e.split("").reverse().join("");
    }
  });
  return result.join(" ");
}
