const CTA = document.querySelector(".cta a");
const ALERT =  document.querySelector("#booking-alert");

// simply remove hide property from CTA and add it to ALERT.
CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){
	e.preventDefault(); //it prevents the page to go at top every time we click the button.
	CTA.classList.toggle("hide");
	ALERT.classList.toggle("hide");
}

CTA.onclick = reveal; //By not including () for reveal, we make sure the function does not run when the page originally loads.


