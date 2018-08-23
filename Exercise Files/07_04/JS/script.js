const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

/* merge and make multiple events on one click */
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){ console.log("This Button was clicked"); }, false); 