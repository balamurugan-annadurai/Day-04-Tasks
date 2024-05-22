let oddNum = function(array){
    for(let i in array){
        if(array[i]%2!=0){
              console.log(array[i]);
        }
    }
}

let array = [1,2,3,4,5];
oddNum(array);