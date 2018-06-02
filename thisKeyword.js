var human = {
  strech: function() {
    console.log(this.hand);
  },
  hand: 'hand'
};

var dog = {
  hand: 'paw'
};

dog.strech = human.strech;
console.log(dog);
dog.strech(); //"paw"

//The key is who streches.

/* --------------------------------------------------------- */

(function() {
  (function() {
    (function() {
      (function() {
        console.log(this);
      })();
    })();
  })();
})(); //window.

//function can't be this. Only object or undefined.

/* ----------------------------------------------------------- */

/* 1. Called with a new?
2. Called with call or apply?
3. Called via a containing/owning object(context)?
4. Default: global/undefined */

/*
1. In the global execution context, this refers to the global object.
2.If a function is called as a method of an object, this in the function is bond to that object that object.
*/
