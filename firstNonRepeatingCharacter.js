/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {
    if(s == ''){
      return ''
    }
    let charCount = {};
    let lower = s.toLowerCase();
    for(let i = 0; i < lower.length; i++){
      if(charCount[lower[i]]){
        charCount[lower[i]]++
      } else {
        charCount[lower[i]] = 1
      }
    }
    let occursOnce = [];
    for([keys,values] of Object.entries(charCount)){
      if(values == 1){
        occursOnce.push(keys)
      }
    }
    if(!occursOnce.length){
      return ''
    }
    let lowerCase = s.indexOf(occursOnce[0]);
    let upperCase = s.indexOf(occursOnce[0].toUpperCase());
    
    return s[lowerCase] == undefined ? s[upperCase] : s[lowerCase]
  }

  // much shorter solution

  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }



function combineLists(l1,l2){
  let carry = 0;
  let resultNode = new ListNode(0);
  let returnNode = resultNode;
  while(l1 || l2){
    const sum  = (l1 ? l1.val : null) + (l2 ? l2.val : null) + carry;
    resultNode.next = new ListNode(sum >=10 ? sum % 10 : sum);
    carry = sum >= 10 ? Math.floor(sum/10) : 0;
    l1 ? l1.next : null;
    l2 ? l2.next : null;
    resultNode = resultNode.next;
  }
  if(carry > 0){
    resultNode.next = new ListNode(carry)
  }
  return returnNode.next;
}



// Cracking the Coding Interview - Chapter 1 : Arrays and Strings

// 1.1 Implement an algorithm to see if a str contains all unique characters. What 
// if you cannot use additional data structures?

function isUnique(str){
  return str.filter( (item,index) => str.indexOf(item) === index).length === str.length ? true : false;
}

// 1.2  Implement a function void reverse(char*str) in C or C++ which reverses
// a null terminatedn string.

// 1.3  Given two strings, write a method to decide if one is a permutation of 
// the other.

// 1.4  Write a method to replace all spaces in a string with '%20'. 

// Example: Input = "Mr.   John   Smith      " Ouput = "Mr.%20John%20Smith"

function replaceWith20(str){
  return str.trim().replace(' ', /['%20']g/)
}

// 1.5 


// 1.6 


// 1.8



// 1.9