function findBiggerNumber(){
	a > b ? console.log("a: ",a) : console.log("b: ", b);
}

//we need to put a,b before calling the function. 
//If we put it afterwards there is no a or b variables defined to be called in the function.
var a = 3/4;
var b = 5/7;

findBiggerNumber();