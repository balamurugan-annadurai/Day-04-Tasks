let palindrome = (function(string){
    let array = string.split(" ");
    let newArray = [];
    for(let value of array){

        let newString = "";

        for(let i in value){
            newString = newString + value[(value.length-1)-i];
        }
    if(value === newString){
        newArray.push(value);
      }  
    }
  return newArray;
})("time pop dad mam malayalam")

console.log(palindrome); //[ 'pop', 'dad', 'mam' ]
