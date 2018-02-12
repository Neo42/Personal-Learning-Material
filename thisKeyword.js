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

/* 1. Called with a now?
2. Called with call or apply?
3. Called via a containing/owning object(context)?
4. Default: global/undefined */
