let median_Of_two_Array = (function(array1,array2){
   
    let median;
    for(let i=0;i<array2.length;i++){
        array1.push(array2[i]);
    }
    array1 = array1.sort();
    let newLength = array1.length;
    if(newLength % 2 == 0){
       median = (array1[((newLength/2)-1)] + array1[(newLength/2)])/2
    }
    else{
        median = array1[Math.round(newLength/2)-1];
    }

    return median;
})([1,3],[2])

console.log(median_Of_two_Array); //2
