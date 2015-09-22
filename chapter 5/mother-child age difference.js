var ancestry = JSON.parse(require('./ancestry.js'));

function ageDifference(personName){
    var mothersBirthYear =  ancestry.filter(function(person){
        return person.name === personName;
    })[0].born;
    var children = ancestry.filter(function(person){
        return person.mother === personName;
    });
    var childrenBirthYears = children.map(function(child){
        return child.born;
    })
    var difference = childrenBirthYears.map(function(year){
        return year - mothersBirthYear;
    });
    return difference;
}

var ageDifferences = ancestry.map(function(person){
    return ageDifference(person.name);
}).reduce(function(a,b){return a.concat(b);})
var ageSum = ageDifferences.reduce(function(a,b){return a+b;});

console.log(ageSum/ageDifferences.length);