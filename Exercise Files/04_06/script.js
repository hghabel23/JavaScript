var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));

//Immediate function; it runs immediately where it is in the code. 
//It is very important to know where to put the input variables (before the function is written).
var immediateVar = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(3/4, 7/9);

console.log(immediateVar);
