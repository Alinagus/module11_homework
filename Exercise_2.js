function simpleNum(num){
  if (num<1000 || num===0){
    numIs= 'Данные неверны или вы ввели 0';
  }
  for (let i=2; i<num && num<1000; i++){
    if (num%i===0){
      numIs= 'Число не является простым';
  }}
  if (numIs !=='Число не является простым'){
    numIs = 'Число является простым';
  }
  return numIs;
}

console.log(simpleNum(10));
