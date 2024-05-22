let array = [1,1,1,2,2,2,3,3,3];

let removeDuplicates = (function(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
})(array)

console.log(removeDuplicates); //[ 1, 2, 3 ]
