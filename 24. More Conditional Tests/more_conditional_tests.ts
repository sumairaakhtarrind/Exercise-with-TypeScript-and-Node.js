// equality and inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// equality and inequality Test 2
console.log("InEquality test with strings: ", ("Apple" as string) != "Orange");

// Tests using the lower case function

console.log("Lower case funcation test: ", "Hello".toLowerCase()==="hello" );

// Numerical tests involving equality.
console.log("Equality test with numbers: ", 28 === 28);
// Numerical tests involving inequality.
console.log("Inequality test with numbers: ", (28 as number) != 38);

// greater than test.
console.log("Greater then test: ", 15 > 5);
// less than test.
console.log("Less then test: ", 5 < 15);


// greater than and less than.
console.log ("greater than and less than tets : ", 20 >= 20 );
// less than or equal to
console.log("less than or equal to : ", 6 <= 12 );

// Tests using "and" Operator
console.log("And Operator test : ", 6===6 && 12 > 6 );

// Tests using "or" operator
console.log("or Operator test : ", 6===6 || 12 > 6 );

// Test whether an item is in a array
const fruits  :string[] = ['Mango' , 'Orange' , 'Apricoat'] ;
console.log ('Test "Mango" in the array :' , fruits.includes("Mango") );

// Test whether an item is not in a array

console.log('Testing "Apple" is not in a array: ' , ! fruits.includes ('Apple'))




