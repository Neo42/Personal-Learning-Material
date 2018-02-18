```flow
st=>start: stack pile on function by function 
op1=>operation: encounter async
op2=>operation: push XHR timer with callback function into web API
op3=>operation: function run out => stack pile off
op4=>operation: push callback function into task queue
op5=>operation: event loop runs callback
op6=>operation: stack pile on function by function 
e=>end
st->op1->op2->op3->op4->op5->op6->e
```
<hr>

<b><i>When you're passing parameter to js callbacks in a loop<br>
one thing to think about  is that<br>
callback will only be run by event loop after your call stack is clear<br>
that is after your variable have been fully iterated by the loop.<br>
Your result will come out with the iterated variable</i></b><br>
<br>
<b><i>you expect a function can run with variable in each iteration,
when you run your callback, you expect what you run is</i></b>
  ```js
  function(var in every iteration)
  ```
  <b><i>you want to pull out the function and run after the event loop.<br>
  So we set a function like this</i></b>
  ```js
  funtion(eachVar){
  return function(){//can't set a parameter here, not using the outer variable but event object
  console.log eachVar}
  }(var)
  ```
<b><i>The solution to it is, instead of running the callback directly,
you return the funciton in every loop,
this function uses variable in each loop,
and will be runned once the callstack is clear.</i></b>
