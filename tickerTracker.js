
var square = document.querySelector(".square");

square.addEventListener("click", addClicks, false);

function addClicks( event ) {
	event.target.textContent = event.detail;
};

