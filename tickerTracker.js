var square = document.querySelector("#square");
var breath = Number(document.getElementById("#breath"));
var timer;
var resetButton = document.querySelector("#reset");
// var timer;

square.addEventListener("click", function(){
 	breaths();
 });

$("#square").on("click", function(){
	countDown(30);
	$(this).off();	
});

// keep running this function until 30sec is complete
function breaths() {
	
	breath++;
	square.textContent = breath;
}


function sRR(){

}
//sum of clicks - function 5 
// sum of clicks x 2 = SRR - function 6 
// display SSR - alert box 

function countDown(count) {
	if (count > (-1)) {
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
	x.innerHTML = 30;
	breath = 0;//to reset sum to nil in square.
	square.textContent = " ";// to stop the timer from running.
}

function help(){
 // redirect to new page with info re heart disease 
}

