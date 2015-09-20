function arrayToList(myArray){
    var myList = {};
    if (myArray.length == 0){
        return null;
    }else {
        myList.value = myArray[0];
        myList.rest = arrayToList(myArray.slice(1));
    }
    return myList;
}

function listToArray(myList){
    var myArray = [];
    if (myList.rest === null){
        return myList.value;
    } else {
        myArray.push(myList.value);
        myArray.push(listToArray(myList.rest));
    }
    return [].concat.apply([],myArray);
}

console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3,4])));