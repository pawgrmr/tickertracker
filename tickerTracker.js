var square = document.querySelector(".square");
// var timer;


square.addEventListener("click", function(){
	
	//start timer function 1
	//finish timer function 2 - after 30 sec
	countDown(30);
	
	// tap(); //function 3
	//start with empty array
	//add 1 to an empty array


	
	//each click = 1 tap count function 4

	//sum of clicks - function 5 
	// sum of clicks x 2 = SRR - function 6 
	// display SSR - alert box 

	//equal the sum of clicks to the tap count??

})



function countDown (count) {
	if (count > 0) {
		var x = document.getElementById("timerDiv");
		x.innerHTML = count;
		timer = setTimeout (function() {countDown(count-1);}, 1000);
	}
	else 
		reset();
}

function tapCount(tap) {
 
 if(tap = 0){
 	tap++;
 	var y = document.getElementById("taps");
 	y.innerHTML = tap;
 	//add statement here about clickCount running until timer runs out
 }
 // else 
 // 	var y = document.getElementById("taps");
 // 	y.innerHTML = "START";
 } 

// function tap() {
//   var arr = [];

//   for (i = 0; i < 5; i++) {
//     arr.push(1)
//   }
  
//   alert(arr);
// }

// function tapCount(){
// // var nums = [100,300,400,60,40]

// // var sum = 0;

// // for(var i=0; i < nums.length; i++){

// //     sum += nums[i]

// // }

// // alert(sum);
// }

function reset() {
   clearTimeout(timer);
   var x = document.getElementById("timerDiv");
	x.innerHTML = 0;// to stop the timer from running.
}

function help(){

}