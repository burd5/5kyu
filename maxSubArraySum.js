/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
*/

var maxSequence = function(arr){
    let largest = 0;
    for(let i = 0; i < arr.length; i++){
      for(let j = arr.length - 1; j >= 0; j--){
        let arrSec = arr.slice(i, j + 1);
        if(arrSec.reduce( (acc, sum) => sum + acc, 0) > largest){
          largest = arrSec.reduce( (acc,sum) => sum + acc, 0)
        };
      }};
    return largest;
}

// other solutions

function maxSequence(arr) {
    var max = 0
    
    for (var i = 0; i < arr.length; i++) {
      for (var sum = 0, j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum > max) max = sum
      }
    }
    
    return max
  }

