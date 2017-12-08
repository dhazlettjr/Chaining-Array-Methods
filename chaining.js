// start the project with an array of integers
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// make a single line of code to complete the task
// make the array output in descending order
// add a filter to only keep anything 19 and below
// create a function that will return less than or equal to 19

console.log(integers.sort(function(a, b){return b-a}).filter(function (cut){return cut<=19}).map(function(num){return num * 1.5 - 1}).reduce(function(a, b){return a+b}))


