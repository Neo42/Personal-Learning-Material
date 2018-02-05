var i = 1;
var x = i++ + 1; // operation will be implemented with the original i:1
//and then i will increment by 1.
console.log(i, x) //2,2
var y = ++i + 1 //here i increment by 1 before the operation
console.log(i, y) //3,4
