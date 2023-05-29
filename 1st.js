function sortNumbers(arr) {
    
  let even = 0;
  let odd = 0;
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] === 0) {
          zero++;
      } else if (arr[i] % 2 === 0) {
          even++;
      } else {
          odd++;
      }
  }
  }
  
  return console.log(`Четных чисел ${even}
Нечетных чисел ${odd}
Нулей ${zero}`)

}

sortNumbers([ 0, 2, 4, 7, 10, 'abc', null, NaN])