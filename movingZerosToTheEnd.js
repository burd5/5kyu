/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

function moveZeros(arr) {
    // arr to hold the number of zeros
     let zeros = [];
    // loop through arr and add all zeros to another arr
     for(num of arr){
       if(num === 0){
         zeros.push(num)
       }
     }
    // filter out all the zeros from original arr
     let filterArr = arr.filter( e => e !== 0);
    // combine filteredArr and zeros 
     return filterArr.concat(zeros);
  }


  // compact solution

  var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }