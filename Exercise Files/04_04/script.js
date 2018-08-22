function findBiggestFraction(a,b) {
    var result = a > b ? "a: "+ a : "b: "+ b;
	return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var message = findBiggestFraction(firstFraction,secondFraction);
alert(message);
