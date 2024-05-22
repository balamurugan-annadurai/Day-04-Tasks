let sumOfArray = (function(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
      sum = sum + array[i];
    }
    console.log(sum);
})([10,10,20]);

