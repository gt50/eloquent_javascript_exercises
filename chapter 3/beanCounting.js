function countBs(myString){
    return myString.split('').reduce(function (a,b){
        if (b === 'B'){
            return a + b;
        } else {
            return a;
        }
    },'').length;
}

console.log(countBs('ABC'));