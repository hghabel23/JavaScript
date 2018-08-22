const MYCONSTANT = 5;
console.log(MYCONSTANT);

// ****NOTE: we cannot change the constant value and the system will through an error.
MYCONSTANT = 7;


//using let inside a code block to keep the value of a variable only in that block
// without changing the other variable with the same naming.
function logScope(){
	
	var localVar = 2;
	
	if (localVar) {
		//using "let" to differenciate localVar outside and inside the nested if-statement.
	    //if we use "var" then the localVar value will be changed inside nested if-statement for the rest of the function.
		let localVar = "I'm different";
		console.log("nested localVar: " + localVar);
	}
	
	console.log("logScope : " + localVar);
}

logScope();