function splitString(str) {
  let result = [];
  let paired = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!paired.has(i)) {
      let pair = str.substring(i, i + 2);
      if (pair.length < 2) {
        pair += "_";
      }
      result.push(pair);
      paired.add(i);
      paired.add(i + 1);
    }
  }
  return result;
}

console.log(splitString("Hello World!"));
