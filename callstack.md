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
