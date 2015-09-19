function rangeArray(start, end, step){
    step = step || 1;
    var range = [];
    if (start < end && step > 0){
        for(var i = start; i <= end; i += step){
            range.push(i);
        }
    } else if (start > end && step < 0){
        for(var i = start; i >= end; i += step){
            range.push(i);
        }
    }
    return range;
}

function sum(myArray){
    return myArray.reduce(function(a,b){
        return a+b;
    });
}


console.log(rangeArray(10,1,1));