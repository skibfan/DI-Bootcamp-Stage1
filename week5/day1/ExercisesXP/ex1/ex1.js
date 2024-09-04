
// #1.1 
// A: We will get 3 instead of ${a}
// #1.2 
// A: the code will note compile, preventing us from changing the const variable
//#2
// #2.1 
// A: We will get 2 subsequent alerts, first one with a = 0, second with a = 5
// #2.2 
// A: same as in 1.2, cannot override the const variable


//#3
// #3.1
// A: code will complie, returning alert 'hello' at ${a}
//#4
// #4.1 
// A: code compiles with alert with 'test' instead of ${a}
// #4.2 
// A: Code will compile with any combination of redeclaration, 
// as by declaring a variable inside a function we encapsulate it inside this function.
// If we try to access the variable ${a} after funcSix() we will see that it is not mutated. 
//#5
// #5.1 code compiles, first alert - '5', second - '2'
// #5.2 same logic as in 4.2, but encapsulated inside if statement