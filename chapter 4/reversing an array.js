function reverseArray(myArray){
    var reversedArray = [];
    for (var i = myArray.length -1; i >= 0; i--){
        reversedArray.push(myArray[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(myArray){
    var tempArray = myArray.slice(0);
    for (var i = tempArray.length -1; i >= 0; i--){
        myArray.shift();
        myArray.push(tempArray[i]);
    }
}

var testArray = [1,2,3,4,5];
console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));
console.log(testArray);