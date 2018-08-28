const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
	//Here if result is false, the loop continues without going to the next line.
	if (result == false ) {
		continue;
	}
    console.log(i + " is a prime number.");
}
