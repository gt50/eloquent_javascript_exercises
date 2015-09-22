function testForOne(number){
    return (number === 1)? true:false;
}

function every(arr,test){
    var everyItem = true;
    for(var i = 0; i < arr.length; i++){
        if (!test(arr[i])){
            everyItem = false;
        }
    }
    return everyItem;
}

function some(arr,test){
    for(var i = 0; i < arr.length; i++){
        if (test(arr[i])){
            return true;
        }
    }
    return false;
}

console.log(every([1,1,1,0],testForOne));
console.log(some([0,0],testForOne));