const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

/* we want to change button text when it is clicked */
//current is the clicked object which is CTA here.
function reveal(e, current) {
    e.preventDefault();
    
	console.log(current.innerHTML);
	current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!";
	
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', function(e){reveal(e, this);}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
