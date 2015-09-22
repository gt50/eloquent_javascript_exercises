var ancestry = JSON.parse(require('./ancestry.js'));

function averageCenturyAge(century){
    var peopleInCentury = ancestry.filter(function(person){
        return person.century === century
    })
    var agesInCentury = peopleInCentury.map(function(person){
        return person.age;
    })
    var sumAges = agesInCentury.reduce(function(a,b){return a+b;});
    var averageAge = sumAges/agesInCentury.length;
    return averageAge;
}

function printAgeStats(century){
    console.log(century + ': ' + averageCenturyAge(century) );
}

ancestry.map(function(person){
   person.century = Math.ceil(person.died/100) ;
   person.age = person.died - person.born;
});

var centuries = [];
ancestry.map(function(person){
    if (centuries.indexOf(person.century) < 0){
        centuries.push(person.century);
    }
});
centuries.sort();

centuries.forEach(printAgeStats);
