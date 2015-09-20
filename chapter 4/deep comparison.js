function deepEqual(x,y){
    var equality = false;
    if (typeof x === "object" && typeof y === "object"){
        if (x.length != y.length){
            return false;
        } else{
            for (var prop in x){
                if (!y.hasOwnProperty(prop)){
                    return false;
                }
                if (x.prop != y.prop){
                    return false;
                }
            }
        }
    } else {
        if (x !== y){
           return false;
        }
    }
    return true;
}


console.log(deepEqual([1,2],[1]));