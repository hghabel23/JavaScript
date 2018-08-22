//a function inside another function which relies on the variables of the inside function
//is called "Closure".
function doSomeMath() {
	var a = 5;
	var b = 4;
	
	function multiply(){
		var result = a * b;
		return result;
	}
	
	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);
console.log("The Actual restul: ", theResult());
