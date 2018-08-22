var a = 5;
var b = "5";
var theNumbersMatch;
var aIsBigger;

alert("a = " + a + " , b = " + b);

// This test whether the content of the variables are the same
if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
//console.log(theNumbersMatch);
alert(" condition with ==  :  " + theNumbersMatch)

// This test whether the two variables are exactly the same.
if( a ===b ){
	theNumbersMatch = true;
}else{
	theNumbersMatch = false;
}
alert(" condition with === :   " + theNumbersMatch);


//If a is bigger than b.
if ( a > b ) {
    aIsBigger = true;
} else {
    aIsBigger = false;
}
alert("Condition a > b  : " + aIsBigger);


// XOR operator means that a or b is true but the shared part of a and b should be out.
/* if ( (a == b || c == d) && ( (a == b) != (c == d)) ){
	
} */

//Ternary: Condition ? true : false;
/* a == b ? console.log("Match") : console.log("noMatch"); */
