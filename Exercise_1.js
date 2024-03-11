let arr = [23, 44, 45, 0, 12, 19, 0];

function evenOrOdd(){
    let even = 0;
    let odd = 0;
    let zero = 0;
    for(i=0; i<arr.length; i+=1){
        if (arr[i]===0){
        zero+=1;
}
    else if(arr[i]%2===0){
    even+=1;
}
    else {
    odd+=1;
}}
console.log('Количество четных чисел: ' + even);
console.log('Количество нечетных чисел: ' + odd);
console.log('Количество нулей: ' + zero);
}

evenOrOdd();
