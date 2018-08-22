const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() 
{		
	// get the hr, min, sec of the current time.
	var date = new Date();
	let hr = date.getHours();
	let mint = date.getMinutes();
	let sec = date.getSeconds();

	// and positions in degree
	let hrPosition = (hr*360/12) + (mint*(360/60)/12);
	let minPosition = (mint*360/60) + (sec*(360/60)/60);
	let secPosition = sec * 360/60;

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

/* setInterval() function is a built-in one and it is in millisecond. 
As we want it to run every second, we put 1000 for millisecond. */
var interval = setInterval(runTheClock, 1000)

