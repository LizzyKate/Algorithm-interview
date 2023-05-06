var uniqueInOrder = function (sequence) {
  //your code here - remember iterable can be a string or an array
  if (typeof sequence === "string") {
    sequence = sequence.split("");
  }

  return sequence.reduce((acc, current, index) => {
    if (current !== sequence[index - 1]) {
      acc.push(current);
    }
    return acc;
  }, []);
};
console.log(uniqueInOrder("stiuh"));
