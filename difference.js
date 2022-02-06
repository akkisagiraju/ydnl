function difference(array, values) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
