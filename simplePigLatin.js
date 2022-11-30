/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// my solution

function pigIt(str){
    // split str into arr
    let words = str.split(' ')
    let chars = /[?.!,]/
    let newWords = [];
    // check to see if word contains non-letters, remove first letter of word and attach it to the end
    for(let i = 0; i < words.length; i++){
        if(words[i].match(chars)){
            newWords.push(words[i])
        } else{
            newWords.push(words[i].slice(1) + words[i][0] + 'ay')
        }
    }
    // recombine new words with space
    return newWords.join(' ');
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('Hello world !'), 'elloHay orldWay !')


// simpler replace method

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }