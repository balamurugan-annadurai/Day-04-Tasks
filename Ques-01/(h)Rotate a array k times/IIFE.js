let rotateArrayLeft = (function(array,rotateCount){
    let size = array.length;
    var i;
    for(let j=1;j<=rotateCount;j++){
      let temp = array[0];
      for(i=0;i<size-1;i++){
          array[i] = array[i+1];
       }
       array[i] = temp;
    }
    return array;
})([1,2,3],2)

let rotateArrayRight = (function(array,rotateCount){
   let size = array.length-1; 
   var i;
   let temp;
   for(let j=0;j<rotateCount;j++){
      temp = array[size];
      for(i=0;i<size;i++){
          array[size-i] = array[size-1-i];
       }
      array[size-i] = temp;
   }

   return array;
})([1,2,3],2)

console.log("leftRotate:",rotateArrayLeft); //leftRotate: [ 3, 1, 2 ]
console.log("rightRotate:",rotateArrayRight); //rightRotate: [ 1, 2, 3 ]