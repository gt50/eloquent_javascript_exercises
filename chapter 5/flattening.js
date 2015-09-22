function flatten(arr){
    return arr.reduce(function(a,b){
        return a.concat(b);
    })
}

console.log(flatten([[1,2],[2,3]]));