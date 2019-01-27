var square = document.querySelector("#square");
var breath = Number(document.getElementById("#breath"));
var timer;
var box = document.querySelector(".box");
var x = document.querySelector("#timerDiv");
var resetButton = document.querySelector("#reset");
var sum = document.querySelector("#sum");
var clicks;
var y;

init();

function init() {
	squareListener();
}

function squareListener() {
	square.addEventListener("click", function(){
			breaths();	
	 });
	
	$("#square").on("click", function(){
		countDown(30);
		$(this).off();
	});
}

function breaths() {
	breaths>=0;
	breath++;
	box.textContent = parseInt(breath);
	var clicks = box.textContent;
	SRR = clicks * 2; //actual SRR

}

function countDown(count) {
	let y = count;
	if (y > (-1)) {
		x.textContent = y;

		timer = setTimeout (function() {countDown(count-1);}, 1000);
		if (y == 0){
			window.alert("Sleeping Respiratory Rate: " + SRR)
			x.textContent = y; 
			sum.textContent = SRR;
			box.textContent = clicks;
		}
	}
}


resetButton.addEventListener("click", function(){
	location.reload();
	// reset();
	
})

// function reset() {	
//    clearTimeout(timer)

// // return timer to " "
// 	x.innerHTML = " ";
// 	sum.innerHTML = " ";
// 	square.textContent = " ";// to stop the timer from running.
// 	breath=0;

//  }



