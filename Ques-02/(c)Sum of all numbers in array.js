let sumOfArray = (array) => {
    let sum = 0;
    for(let i=0;i<array.length;i++){
      sum = sum + array[i];
    }
    console.log(sum);
}

let array = [10,10];
sumOfArray(array);