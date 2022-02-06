function concat(array, ...values) {
  let result = [...array];
  for (let value of values) {
    result = result.concat(value);
  }
  return result;
}

// concat([1], 2, [3], [[4]]);
// => [1, 2, 3, [4]]
