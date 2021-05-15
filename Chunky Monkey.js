// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  let twoDimArray = [];
  let initialSize = size
  
  for(let i = 0; i < arr.length; i += initialSize) {
    twoDimArray.push(arr.slice(i, size))
    size += initialSize
  }
  return twoDimArray;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);