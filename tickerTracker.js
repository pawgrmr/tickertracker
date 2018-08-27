var square = document.querySelector(".square");
// var timer;

square.addEventListener("click", function(){
	
	//start timer function 1

	//finish timer function 2 - after 30 sec

	// startTimer();
	// tap(); //function 3
	//start with empty array
	//add 1 to an empty array


	countDown(5);
	//each click = 1 tap count function 4

	//sum of clicks - function 5 
	// sum of clicks x 2 = SRR - function 6 
	// display SSR - alert box 

	//equal the sum of clicks to the tap count??

})

// function startTimer() {
// 	let timer = setTimeout(tap, 30000);
// 	//If the remaining time gets to zero, stop the clock
// }

function countDown (count) {
	if (count > -1) {
		var x = document.getElementById("timerDiv");
		x.innerHTML = count;
		setTimeout (function() {countDown(count-1);}, 1000);
	}
	else 
		x.innerHTML 
		count=0;
}

function tap() {
  var arr = [];

  for (i = 0; i < 5; i++) {
    arr.push(1)
  }
  
  alert(arr);
}

function tapCount(){
// var nums = [100,300,400,60,40];

// var sum = 0;

// for(var i=0; i < nums.length; i++){

//     sum += nums[i]

// }

// alert(sum);
}

function timer(){

}

function reset() {
    clearTimeout(timer); // to stop the timer from running.
}

function help(){

}