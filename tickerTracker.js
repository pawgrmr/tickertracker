var square = document.querySelector("#square");
var breath = 0;
var timer;
var resetButton = document.querySelector("#reset");
// var timer;

 square.addEventListener("click", function(){
 	// breaths();
 	countDown(30);
 });



// keep running this function until 30sec is complete
function breaths() {
	breath++;
	square.textContent = breath;
}

//sum of clicks - function 5 
// sum of clicks x 2 = SRR - function 6 
// display SSR - alert box 

function countDown(count) {
	if (count > 0) {
		var x = document.getElementById("timerDiv");
		x.innerHTML = count;
		timer = setTimeout (function() {countDown(count-1);}, 1000);
	}
	else {
		reset();
	}

}

resetButton.addEventListener("click", function(){
	reset();
})

function reset() {	
   clearTimeout(timer)
   	var x = document.getElementById("timerDiv");
	x.innerHTML = 0;// to stop the timer from running.
}

function help(){

}