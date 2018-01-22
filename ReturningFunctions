//capturing (pulling in variable from outside of the scope)
let show = () => {
    let x = 1
    return () => console.log(x)
  } //console.log(x)
show()()//1

/*USE CASE:PRIVATE VARIABLE FEATURE
Here is a leaky counter object.
let counter = {
  count: 0,
  add1: this.count += 1
  currentValue: return this.count
}*/
counter.count = 9000; SHIT!

//A solid, flexible funtional counter with private variables
let createCounter = i => {
return {
	//Using the passed-in argument to set the initial value.
	increment:() => i += 1,
	currentValue:() => i
	}
}

let myCounterStartsAt5 = createCounter(5)
myCounterStartsAt5.increment()
console.log(myCounterStartsAt5.currentValue())//1
myCounterStartsAt5.count = 9000//myCounterStartsAt5 does not have a property called "count". AND BOO YA!
