var human = {
    strech: function() {
      console.log(this.hand)
    },

    hand: "hand"

  }


var dog = {

    hand: "paw"

  } 

dog.strech = human.strech;

console.log(dog);

dog.strech();//"paw" 

//The key is who streches.

/*---------------------------------------------------------*/

(function() {
  (function() {
    (function() {
      (function() {
        console.log(this);
      })();
    })();
  })();
})();//window. 

//function can't be this. Only object or undefined.
