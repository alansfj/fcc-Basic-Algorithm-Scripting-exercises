/*Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let arr = [];
  let strLowerCase = str.toLowerCase()

  let count = 0;
  for(let letter of strLowerCase) {
    if(count === 0) {
      arr.push(letter.toUpperCase())
      count++;
    } else if (count !== 0 && letter !== ' ') {
      arr.push(letter)
      count++
    } else if (letter === ' '){
      arr.push(letter)
      count = 0
    }
  }

  return arr.join('')

}

titleCase("I'm a little tea pot");