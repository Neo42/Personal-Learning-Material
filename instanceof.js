//The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

function cat(){}
function animal(){}

cat.prototype = animal.prototype

var a = new cat()
console.log(a instanceof cat) //true
console.log(a instanceof animal) //true.
