# Algorithms in Plain English and JavaScript<br>
### Bubble Sort<br>
>It simply walk through the arrey, and once it sees a number out of order compared to the next one, it swaps both of 'em. Suppose we have an arrey that has N numbers in it. It takes N times of swaps to finish an iteration. And it at most takes N iterations to finish sorting the arrey, so its big O is n^2.
#### Here is how it's done in js:
```js
let bubbleSort = (nums) => {
  for (var j = 0; j < nums.length; j++) { //Walk the arrey through for N times. 
    for (var i = 0; i < nums.length; i++) { //Walk through all N elements of the arrey.
      let x;
      if (nums[i] > nums[i + 1]) {
        x = nums[i]; //Put a variable as a value container while exchanging.
        nums[i] = nums[i + 1];
        nums[i + 1] = x;
      }
    }
  }
}
```
#### Rossetta Code Version:
```js
Array.prototype.bubblesort = function() {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i<this.length; i++) {
            if (this[i-1] > this[i]) {
                done = false;
                [this[i-1], this[i]] = [this[i], this[i-1]]//Nasty as fuck💀!
            }
        }
    }
    return this;
}
```

### Insertion Sort<br>
>Insertion sort is kinda similar to bubble sort. It walks through the whole arrey, swap the element out of order, but after every swap, it doesn't stop, instead it will keep compare that swapped relatively smaller number to its left neighbor, and if they are still out of order, it swaps them again and goes on and on.
