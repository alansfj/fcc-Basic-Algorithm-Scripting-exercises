// Mutations

// Return true if the string in the first element of the array contains all of the 
// letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in 
// the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not 
// contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are 
// present in Alien.



function mutation(arr) {
  let firstStr = arr[0]
  let secondStr = arr[1]
  let lettersFoundDuplicated = []
  
  for(let letterFS of firstStr) {
    for(let letterSS of secondStr) {
      if(letterFS.toLowerCase() === letterSS || letterFS.toUpperCase() === letterSS) {
        lettersFoundDuplicated.push(letterFS)
      }
    }
  }

  let lettersFound = [...(new Set(lettersFoundDuplicated))]
  let secondStrNoDuplicatedLettersArray = [...new Set(secondStr.toLowerCase())]
  
  if(lettersFound.length === secondStrNoDuplicatedLettersArray.length) {
    return true
  } else return false
  
}

mutation(["hello", "hey"]);