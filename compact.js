function compact(array) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array');
  }

  return array.filter((item) => Boolean(item));
}

console.log(compact([0, 1, false, 2, '', 3]));
