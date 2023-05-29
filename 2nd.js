function defineNumber(x){
  if ( x == 0 || x == 1 || x >= 1000 ){
      return console.log ("Данные неверны")
  }
  let y = 0
  for ( let y = 1; y <= x; y++ ){
      if ( x%y == 0 ){
          y++
      }
  }
  if ( y == 2){
      return console.log("Это простое число")
  } else{
      return console.log("Это непростое число")
  }
}

defineNumber(999)