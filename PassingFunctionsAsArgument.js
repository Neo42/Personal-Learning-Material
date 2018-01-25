/*Adding an extra critria to the original function in different nesting ways.
First one nests the original function inside the criteria branch.
Second one nests the criteria branch inside the original funtion.*/

let div = (x,y) => x/y

let doIfSafe = (x,y,func) =>
  {if(y !== 0) {
  return func(x,y)
    }else{
    return null
    }
	}
console.log(doIfSafe(1,2,div))

let safeVersion = (func) => (x,y) => {if(y !== 0){
return func(x,y)}else{console.log('err')}}
console.log(safeFunction(div)(1,2))
