const arr = [
    { a: 1, b: 2 },
    { a: 'value' },
    { o: null },
    { a: true, m: 123 },
  ]
  
  function pick(arr, key) {
    return arr.map(x => x[key])
  }
  
  pick(arr, 'a')  // [1, 'value', undefined, true]
  console.log(pick(arr, 'a'))