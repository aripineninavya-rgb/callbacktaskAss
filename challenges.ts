// Challenge 1

console.log("\n----- Challenge 1 -----\n")
/*  Create a function addTwo that accepts one input and adds 2 to it. */
// Callback type: takes a number result and returns void


// Function type: takes a number and a callback function
type AddTwoFunction  = (result: number) => void
function addTwo(num: number, callback: AddTwoFunction): void {
    const result = num + 2;
    callback(result);
}
addTwo(3, (result) => {
    console.log(result)
});
addTwo(10, (result) => {
    console.log(result)
});


/// Challenge 2

console.log("\n----- Challenge 2 -----\n")
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
type AddSFunction = (result2: string) => void
const addS = (strg: string, callback: AddSFunction): void => {
  callback(strg + "s");
}
addS("pizza", (result2) => {
    console.log(result2)
});
addS("bagel", (result2) => {
    console.log(result2)
});

// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));