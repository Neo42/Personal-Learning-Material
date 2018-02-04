// A recursive factorial function.
// !5=5*4*3*2*1

let factorial = ( i , x ) => {
  if( x <= 0 ) {
    return undefined;
  }
  
  if ( !x ) {
    x = 1;
  }
  
  if ( i === 1 ) {
    console.log(x);
    return;
  } // Base case(stopping point)
  
  x = i * x;
  i -= 1;
  factorial( i , x );
};
factorial(5);
