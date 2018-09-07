var square = document.querySelector("#square");
var breath = Number(document.getElementById("#breath"));
var timer;
var x = document.querySelector("#timerDiv");
var resetButton = document.querySelector("#reset");
var sum = document.querySelector("#sum");


square.addEventListener("click", function(){
 	breaths();
 });

$("#square").on("click", function(){
	countDown(5);
	$(this).off();	
});



function breaths() {
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
			// sum.innerHTML=SRR;
		}
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
	x.innerHTML = 30;
	sum.innerHTML = 0;
	breath = -1;
	square.textContent = " ";// to stop the timer from running.
	// breaths();
}

function help(){
 // redirect to new page with info re heart disease 
}

