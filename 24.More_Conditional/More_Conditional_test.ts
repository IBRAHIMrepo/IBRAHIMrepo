//Equality and Inequality Test.1
console.log("Equality test with string:","Apple" === "Apple");
//Equality and Inequality Test.2
console.log("Inequality test with string:",("APPle" as string) != "orange");
// using the lower case function Test.3
console.log("Lower case function test:","HELLO".toLowerCase() ==="hello");  
// Numerical involving equality test.4
console.log("Equality test with numbers:",26 === 26);
// Numerical involving equality test.4
console.log("Equality test with numbers:",(26 as number) != 35);
// greater than test.5
console.log("Greater than test:", 10 > 5);
//Less than test.6
console.log("less than test:", 5 < 10);
//greater than or equal to test.7
console.log("greater than and equal to test:", 10 >= 10);
//less than or equal to test.8
console.log("less than and equal to test:", 5 >= 10);
//Test using "and" operator
console.log("And operator test:",5===5 && 10 > 5);
//Test using "or" operator
console.log("or operator test:", 5===5 || false);
//Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
//Test whether an item is not in a array
console.log('Testing "Apple"is not in array:', !fruits.includes('Apple'));