//Suppose there is a fire function
function fire(bool) {
  if (bool) {
    var x = 1;
    console.log(x);
  } else {
    console.log(x);
  }
}
fire(false) //undefined


//Because of hoisting, declaration of variables will be excuted first once the function runs. Like this


function fire(bool) {
  var x;//Declared immediately at the beginning of the function.
  if (bool) {//
    x = 1; //blockscope: Not asigned with any value outside.
    console.log(x);
  }//
  else {
    console.log(x);
  }
}
fire(false) //undefined
