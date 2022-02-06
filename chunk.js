function chunk(array, size = 1) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  let result = [];

  for (let i = 0; i < array.length; i = i + size) {
    const targetSubArray = array.slice(i, i + size);
    result.push(targetSubArray);
  }

  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
