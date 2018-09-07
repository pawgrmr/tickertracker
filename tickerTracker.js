var square = document.querySelector("#square");
var breath = Number(document.getElementById("#breath"));
var timer;
var x = document.querySelector("#timerDiv");
var resetButton = document.querySelector("#reset");
var sum = document.querySelector("#sum");
var clicks;

init();


function init() {
	squareListener();
}


function squareListener() {
	square.addEventListener("click", function(){
	 	breaths(0);
	 });

	$("#square").on("click", function(){
		countDown(5);
		$(this).off();	
	});

}


function breaths(num) {
	breath++;
	square.textContent = parseInt(breath);
	var clicks = square.textContent;
	SRR = clicks * 2; //actual SRR
}


function countDown(count) {
	if (count > (-1)) {
		x.textContent = count;
		timer = setTimeout (function() {countDown(count-1);}, 1000);
		if (count == 0){
			window.alert("Sleeping Respiratory Rate: " + SRR)
			x.textContent = count; 
			sum.textContent = SRR;
			square.textContent = clicks;
		}
	}
}


resetButton.addEventListener("click", function(){
	location.reload();
})

// function reset() {	
//    clearTimeout(timer)
// 	location.reload();
// 	// x.innerHTML = " ";
// 	// sum.innerHTML = " ";
// 	// breath = -1;
// 	// square.textContent = " ";// to stop the timer from running.
// }



