
//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


//Create a function that will accept an array as an input, and it will return the sorted version of that array using the Insertion Sort approach

function insertionSort(array){
// we will loop through our array starting at index[1] all the way to the end of the array.
for(var i=1; i<array.length;i++){
    var currentElement= array[i]
    // as long as the value at the current index is less then the value on the left,we will swap with the value on the left.
    var j = i;
    while(currentElement< array[j-1]){
        [array[j],array[j-1]]=[array[j-1],array[j]];
        j--
    }
}
console.log(array)
}
insertionSort([10, 4, 5, 71, 50, 40, 2, 1 ])