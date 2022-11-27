/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

// stack method

function validParentheses(parens) {
    let stack = [];
    for(let i = 0; i < parens.length; i++){
      let current = parens[i];
      let last = stack[stack.length - 1]
      if(current == '('){
        stack.push(')');
      } else if(current == last){
        stack.pop()
      }
      else return false;
    }
    return stack.length === 0;
  }

  // count method

  function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }