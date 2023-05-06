function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // must return [0, 1]
