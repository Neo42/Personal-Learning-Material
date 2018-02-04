### Bubble sort<br>
>It simply walk through the arrey, and once it sees a number out of order compared to the next one, it swaps both of 'em. Suppose we have an arrey that has N numbers in it. It takes N times of swaps to finish an iteration. And it at most takes (N+1) iterations to finish sort the arrey. So its big O is n^2.
#### Here is how it's done in js:
```js
function bubbleSort(nums) {
  for (var j = 0; j < nums.length; j++) {
    for (var i = 0; i < nums.length; i++) {
      var x;
      if (nums[i] > nums[i + 1]) {
        x = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = x;
        snapshot(nums);
      }
    }
  }
}
```
